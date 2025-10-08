// src/contexts/BlogProvider.js
import { useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";
import BlogContext from "@/Contexts/BlogContext";
import { csrfFetch } from '../utils/csrf';
import dotenv from "dotenv"
// dotenv.config()


function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // const { getCsrfToken } = useContext(BlogContext);


  async function apiRequest(endpoint: string, method = 'GET', data = null) {
    const baseUrl = `${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/`;
    const url = `${baseUrl}${endpoint}`;

    const options: RequestInit = {
      method,
      headers: {
        'X-API-KEY': import.meta.env.VITE_WRITE_API_KEY,
      },
      credentials: 'include', // Important for Django session cookies
    };

    if (data) {
      options.body = JSON.stringify(data);
    }


    // console.log('Requesting:', url);

    const response = await csrfFetch(url, options);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    return await response.json();
  }


  const sendOTP = async (data) => {
    const response = await apiRequest('send-otp/', "POST", data)
    // console.log("auth response ", response)
    setLoading(false)
    return response
  }

  const verifyOTP = async (data) => {
    const response = await apiRequest('verify-otp/', "POST", data)
    console.log("auth response ", response)
    setLoading(false)
    return response
  }

  const getUser = async (token) => {
    const response = await apiRequest('get-user/', "POST", { token });
    console.log("auth response ", response);
    setLoading(false);
    return response;
  }
  const logout = async (token) => {
    const response = await apiRequest('logout/', "POST", { token });
    // console.log("auth response ", response);
    setLoading(false);
    return response;
  }

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, sendOTP, verifyOTP, loading, getUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
