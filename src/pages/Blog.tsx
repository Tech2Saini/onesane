import React, { useState } from 'react';
import { BookOpen, Calendar, User, ArrowRight, Search, Tag, Clock, TrendingUp, Zap, Bot, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BlogItem from "@/components/BlogItem"
import { Link } from 'react-router-dom';


const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 10 Trends to Watch in 2025",
      excerpt: "Discover the emerging AI technologies that will reshape how businesses operate, from autonomous agents to predictive analytics.",
      category: "AI Insights",
      author: "Alex Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      tags: ["AI", "Business Strategy", "Future Tech"],
      featured: true,
      icon: Bot
    },
    {
      id: 2,
      title: "Automation ROI Calculator: Measuring Success in Process Optimization",
      excerpt: "Learn how to calculate the real return on investment for your automation projects with practical formulas and case studies.",
      category: "Automation",
      author: "Sarah Rodriguez",
      date: "2025-01-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["ROI", "Automation", "Business Metrics"],
      featured: false,
      icon: Zap
    },
    {
      id: 3,
      title: "Building High-Performing Remote Teams: A Consultant's Guide",
      excerpt: "Essential strategies for managing distributed teams, tools that work, and communication practices that drive results.",
      category: "Team Management",
      author: "Mike Johnson",
      date: "2025-01-10",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
      tags: ["Remote Work", "Team Management", "Productivity"],
      featured: true,
      icon: Users
    },
    {
      id: 4,
      title: "Freelancer's Guide to Pricing: Value-Based vs. Hourly Strategies",
      excerpt: "Stop undercharging for your services. Learn advanced pricing strategies that reflect your true value and boost profits.",
      category: "Freelancing",
      author: "Lisa Wang",
      date: "2025-01-08",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
      tags: ["Pricing", "Freelancing", "Business Growth"],
      featured: false,
      icon: TrendingUp
    },
    {
      id: 5,
      title: "ChatGPT for Business: 25 Practical Use Cases That Drive Results",
      excerpt: "From customer service to content creation, discover how to leverage AI tools for maximum business impact.",
      category: "AI Tools",
      author: "David Park",
      date: "2025-01-05",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=400&fit=crop",
      tags: ["ChatGPT", "AI Tools", "Productivity"],
      featured: true,
      icon: Bot
    },
    {
      id: 6,
      title: "The Complete Guide to Client Onboarding for Consultants",
      excerpt: "Create a seamless onboarding experience that sets expectations, builds trust, and ensures project success from day one.",
      category: "Consulting",
      author: "Emma Thompson",
      date: "2025-01-03",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
      tags: ["Client Management", "Consulting", "Process"],
      featured: false,
      icon: Users
    }
  ];

  const categories = ['All', 'AI Insights', 'Automation', 'Team Management', 'Freelancing', 'AI Tools', 'Consulting'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });


  return (
    <div className="min-h-screen bg-background parallax-bg">
      {/* Hero Section */}

      <div className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up">
              <BookOpen className="w-5 h-5 text-primary animate-pulse-neon" />
              <span className="text-sm font-medium">Business Insights & Tutorials</span>
            </div>

            <h1 className="text-6xl md:text-7xl pb-2 font-bold mb-4 neon-text animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Blog & Insights
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Expert insights on AI, automation, freelancing, and business growth.
              Practical guides to help you stay ahead in the digital transformation era.
            </p>

            {/* Search Bar */}
            <div className="glass-panel mx-auto animate-fade-in-up hidden" style={{ animationDelay: '0.6s' }}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 neon-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="pt-6 hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 neon-text">Featured Articles</h2>
            <div className="">
              {/* <BlogItem/> */}
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "neon-glow" : "hover:neon-glow"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* All Articles */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 neon-text">
              {searchTerm ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
            </h2>
            <div className=''>
              <BlogItem />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="py-20 cyber-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-neon" />
            <h2 className="text-4xl font-bold mb-6 neon-text">Never Miss an Insight</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest articles, tutorials, and business insights delivered directly to your inbox.
              Join thousands of professionals staying ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className='neon-glow px-5 flex items-center bg-black/60 hover:bg-accent/60 hover:text-black/80 py-2 rounded-full'>
                Browse All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;