// src/contexts/BlogProvider.js
import { useState, useEffect, useCallback } from "react";
import BlogContext from "./BlogContext";
import dotenv from 'dotenv'
// Load env variables manually
// dotenv.config()


function BlogProvider({ children }) {
  console.log("The base url is : ", import.meta.env.VITE_BACKEND_BASE_URL)

  const [blogs, setBlogs] = useState([]);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]); // Initialize as empty array instead of null
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  // Get CSRF token first
  const getCsrfToken = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/blogs/csrf/`, {
        method: 'GET',
        credentials: 'include', // Add this for CSRF cookies
        headers: {
          "X-API-KEY": import.meta.env.VITE_READ_API_KEY
        }
      });

      if (!response.ok) {
        throw new Error(`CSRF token fetch failed: ${response.status}`);
      }

      const data = await response.json();
      return data.csrfToken;
    } catch (error) {
      console.error('Error getting CSRF token:', error);
      throw error;
    }
  };

  // API request function
  const apiRequest = async (endpoint, method = "GET", data = null) => {
    const baseUrl = `${import.meta.env.VITE_BACKEND_BASE_URL}/api/blogs/`;
    const options = {
      method: method,
      credentials: 'include',
      headers: {
        "X-API-KEY": import.meta.env.VITE_WRITE_API_KEY,
      }
    };

    if (data) {
      try {
        const csrf_token = await getCsrfToken();

        options.body = JSON.stringify(data);
        options.headers['Content-Type'] = 'application/json';
        options.headers['X-CSRFToken'] = csrf_token;

      } catch (csrfError) {
        throw csrfError;
      }
    }

    try {
      const response = await fetch(baseUrl + endpoint, options);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  };

  // Get all blogs
  const getAllBlogs = async () => {
    try {
      setLoading(true);
      const blogs = await apiRequest("getall/");
      setBlogs(blogs);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get single blog post by slug
  const getPost = async (slug) => {
    try {
      setLoading(true);
      const blog = await apiRequest(`get/${slug}`);
      setPost(blog);
      const response = await apiRequest(`${slug}/comments`);
      // console.log("BLog loaded:", blog);
      // console.log("Comments loaded:", response);
      setComments(response);

    } catch (error) {
      console.error("Failed to fetch blog:", error);
    } finally {
      setLoading(false);
    }
  };

  // In your BlogProvider
  // Wrap getComments in useCallback
  const getComments = useCallback(async (slug) => {
    // console.log("getComments called with slug:", slug);
    try {

      setLoading(true);
      const response = await apiRequest(`${slug}/comments`);
      setComments(response);

      // console.log("Comments loaded:", response);

      return response;
    } catch (error) {

      console.error("Failed to fetch the comments:", error);
      setComments([]);

    } finally {
      setLoading(false);
    }
  }, [apiRequest]); // Add apiRequest as dependency if it's not stable


  // Add top-level comment
  const addComment = async (blogSlug, content, email, parentCommentId = null) => {
    try {
      // Fixed: Your Django URL is '<slug>/comments/add/new', not '<slug>/comments/add/'
      const newComment = await apiRequest(`${blogSlug}/comments/add/new/`, "POST", {
        content: content,
        parent: null,
        email: email,
        parent: parentCommentId
      });

      // Update comments state to include the new comment
      setComments(prevComments => [newComment, ...prevComments]);

      return newComment;
    } catch (error) {
      console.error("Failed to add comment:", error);
      throw error;
    }
  };

  // Additional helper functions matching your Django URLs
  const updateBlogReadTime = async (blogId, readTime) => {
    try {
      return await apiRequest(`blog/${blogId}/readtime/`, "POST", { readTime });
    } catch (error) {
      console.error("Failed to update read time:", error);
      throw error;
    }
  };


  const registerPageView = async (pageData) => {
    try {
      return await apiRequest('track-view/', "POST", pageData);
    } catch (error) {
      console.error("Failed to register page view:", error);
      throw error;
    }
  };

  const toggleLike = async (data) => {
    // console.log("Toggling like with data:", data);
    const response = await apiRequest('toggle-like/', "POST", data);
    // console.log("Like toggled:", response);
    if (response.success && response.message === "Liked") {
      setLikes(likes + 1);
      return { liked: true };
    }
    else if (response.success && response.message === "Disliked") {
      setLikes(likes - 1);
      return { liked: false };
    }
    else if (!response.success) {
      // console.log("User not authenticated");
      return { liked: null };
    }
  }

  // Function to send read time to backend
  const sendReadTime = async (seconds) => {
    try {
      const response = await apiRequest('readtime/', "POST", { "path": window.location.pathname, "read_time": seconds })
      // console.log("Read time sent successfully:", response);

    } catch (err) {
      console.error("Failed to send read time:", err);
    }
  };

  return (
    <BlogContext.Provider value={{
      // State
      blogs,
      post,
      comments,
      loading,

      // Setters
      setBlogs,
      setPost,
      setComments,

      // Functions
      getAllBlogs,
      getPost,
      getComments,
      addComment,
      updateBlogReadTime,
      registerPageView,
      getCsrfToken,
      // Utility
      apiRequest,
      // handle likes
      toggleLike,
      likes,
      setLikes,
      // Read time tracking
      sendReadTime
    }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;