// src/components/BlogItems.js
import { useContext, useEffect } from "react";
import BlogContext from "../Contexts/BlogContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, User, ArrowRight, Search, Tag, Clock, MessageSquare, TrendingUp, Zap, Bot, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from "react-router-dom";
import { formatReadingTime } from "../utils/formatTime";




function BlogItems() {
  const { loading, getAllBlogs, blogs, setBlogs } = useContext(BlogContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBlogs()
    console.log("The blogs are : ", blogs)
  }, [])

  if (loading) return <div className='flex items-center justify-center h-[100vh] flex-col fixed top-0 left-0 w-full bg-background z-50'>
    <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-primary shadow-[0_0_20px_5px_rgba(59,130,246,0.6)]"></div>
    <p className="text-lg text-muted-foreground mx-4 mt-3">Loading...</p>
  </div>;

  return (
    <div className="grid lg:grid-cols-3 gap-8 mb-16">
      {blogs.map((post, index) => (
        <Card onClick={() => { navigate(`/blog/${post.slug}`) }}
          key={post.id}
          className="glass-panel border-0 hover-lift animate-fade-in-up cursor-pointer overflow-hidden"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="relative">
            <img
              src={`${import.meta.env.VITE_BACKEND_BASE_URL}${post.featured_image}`}
              alt={post.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary/85 text-white border-primary/30">
                Featured
              </Badge>
            </div>
            <div className="absolute top-4 right-4">
              {/* <post.icon className="w-8 h-8 text-white animate-pulse-neon" /> */}
              Icon
            </div>
          </div>

          <CardHeader>
            <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
              <Badge variant="outline" className="neon-glow">
                {post.category.name}
              </Badge>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.created_at).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {formatReadingTime(post.read_time)}
              </div>
            </div>

            <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
              {post.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {post.excerpt}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground justify-start w-full">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{post.user.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{post.comments_count} comments</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{post.read_time} read</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <Button className="w-full group" onClick={() => { navigate(`/blog/${post.slug}`) }}>
              Read Full Article
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default BlogItems;
