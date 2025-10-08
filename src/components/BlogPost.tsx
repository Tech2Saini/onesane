import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MessageSquare, Tag, User, ArrowLeft, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RelatedPosts } from '@/components/RelatedPosts';
import { CommentsSection } from '@/components/CommentsSection';
import { sampleBlogPost } from '@/data/blogData';
import blogHeroImage from '@/assets/blog-hero.jpg';

const BlogPost = () => {
  const { slug } = useParams();
  const [post] = useState(sampleBlogPost);
  const [isLiked, setIsLiked] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = () => {
    navigator.share?.({
      title: post.title,
      text: post.excerpt,
      url: window.location.href
    });
  };

  return (
    <div className="min-h-screen">
      {/* Parallax Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${blogHeroImage})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        sunny
        {/* Navigation */}
        <nav className="relative z-10 p-6">
          <Button
            variant="outline" 
            size="sm"
            className="glass-card border-glass-border/30 text-foreground hover:glow-primary"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="container mx-auto px-6 pb-16">
            <div className="max-w-4xl">
              <Badge className="mb-4 neon-glow animate-pulse-glow">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight animate-fade-in">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
                {post.excerpt}
              </p>
              
              {/* Author & Meta Info */}
              <div className="glass-card p-4 rounded-xl inline-block animate-fade-in">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 ring-2 ring-primary/50">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{post.author.name}</p>ppppp
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(post.created_at)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.read_time} min read
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        {post.comments_count} comments
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div className="glass-card p-8 hover-lift">
                <div 
                  className="prose prose-lg prose-invert max-w-none
                    prose-headings:gradient-text prose-headings:font-bold
                    prose-p:text-foreground prose-p:leading-relaxed
                    prose-strong:text-primary prose-strong:font-semibold
                    prose-code:bg-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded
                    prose-pre:bg-secondary prose-pre:border prose-pre:border-border
                    prose-blockquote:border-l-4 prose-blockquote:border-primary
                    prose-ul:text-foreground prose-ol:text-foreground
                    prose-li:text-foreground"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6} /g, '<h2 class="gradient-text">').replace(/<h2 class="gradient-text">([^<]+)/g, '<h2 class="gradient-text">$1</h2>')
                  }} 
                />
                
                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex flex-wrap items-center gap-3">
                    <Tag className="w-5 h-5 text-primary" />
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="hover-glow cursor-pointer">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 glass-panel p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16 ring-2 ring-primary/50">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                        {post.author.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold gradient-text mb-2">About {post.author.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{post.author.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                {/* Action Buttons */}
                <div className="glass-panel p-4 rounded-xl space-y-3">
                  <Button
                    onClick={() => setIsLiked(!isLiked)}
                    variant="outline"
                    className={`w-full justify-start ${isLiked ? 'text-red-400 border-red-400/50' : ''}`}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                    {isLiked ? 'Liked!' : 'Like Post'}
                  </Button>
                  <Button onClick={sharePost} variant="outline" className="w-full justify-start">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Post
                  </Button>
                </div>

                {/* Reading Progress */}
                <div className="glass-panel p-4 rounded-xl">
                  <h3 className="font-semibold mb-3 gradient-text">Reading Progress</h3>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="glass-panel p-4 rounded-xl">
                  <h3 className="font-semibold mb-3 gradient-text">Table of Contents</h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#ai-revolution" className="block text-muted-foreground hover:text-primary transition-colors">
                      The AI Revolution in Coding
                    </a>
                    <a href="#key-technologies" className="block text-muted-foreground hover:text-primary transition-colors">
                      Key Technologies Shaping the Future
                    </a>
                    <a href="#developer-role" className="block text-muted-foreground hover:text-primary transition-colors">
                      The Developer's New Role
                    </a>
                    <a href="#challenges" className="block text-muted-foreground hover:text-primary transition-colors">
                      Challenges and Opportunities
                    </a>
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <CommentsSection blogSlug={post.slug} />
      </div>

      {/* Related Posts */}
      <RelatedPosts />
    </div>
  );
};

export default BlogPost;