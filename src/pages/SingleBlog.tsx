import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MessageSquare, Tag, Share2, Heart, Eye, TrendingUp, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RelatedPosts } from '@/components/RelatedPosts';
import { CommentsSection } from '@/components/CommentsSection';
import BlogContext from '../Contexts/BlogContext'
import { toast } from 'sonner';
import { formatReadingTime } from "../utils/formatTime";
import { humanizeDate } from "../utils/formatTime";
import { formatNumber } from "@/utils/formatTime";


const BlogPost = () => {
  const { slug } = useParams();

  const [isLiked, setIsLiked] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);
  const [pageViews, setViews] = useState(0);
  const [readTime, setReadTime] = useState(0);
  const [averageReadTime, setAverageReadTime] = useState(0);


  const { loading, getPost, post, toggleLike, setLikes, likes, registerPageView, sendReadTime } = useContext(BlogContext);

  const setPageView = async () => {
    const viewed = await registerPageView({ "path": window.location.pathname })

    if (viewed.success) {
      setIsLiked(viewed.is_liked)
      setViews(viewed.views)
      setLikes(viewed.likes)
      setReadTime(viewed.total_read)
      setAverageReadTime(viewed.ave_read)
    }
    else if (!viewed.success) {
      await setPageView()
    }
  }


  useEffect(() => {

    let startTime = Date.now();
    let accumulatedTime = 0;
    let intervalId;
    let isActive = true;


    const updateAccumulatedTime = () => {
      const now = Date.now();
      if (isActive) {
        const delta = Math.floor((now - startTime) / 1000);
        if (delta > 0) {
          accumulatedTime += delta;
          sendReadTime(delta);
        }
      }
      startTime = now;
    };

    (async () => {
      if (slug) {
        await getPost(slug);
        await setPageView();
      }
    })();

    // Scroll progress tracking
    const handleScroll = () => {
      const article = document.getElementById("maincontent");
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalHeight = rect.height;
      const scrollTop = Math.min(Math.max(0, windowHeight - rect.top), totalHeight);

      const scrollPercent = (scrollTop / totalHeight) * 100;
      setProgress(Math.min(Math.max(scrollPercent, 0), 100));
    };

    window.addEventListener("scroll", handleScroll);

    // Interval to send reading time every 5 seconds
    intervalId = setInterval(updateAccumulatedTime, 5000);

    // Pause/resume tracking when tab visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        updateAccumulatedTime(); // send time before pausing
        isActive = false;
      } else {
        startTime = Date.now();
        isActive = true;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Send remaining read time on page unload
    const handleBeforeUnload = () => {
      updateAccumulatedTime();
      const total = accumulatedTime;
      if (total > 0) {
        navigator.sendBeacon(
          "/api/blogs/readtime/",
          JSON.stringify({
            path: window.location.pathname,
            read_time: total
          })
        );
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(intervalId);
      handleBeforeUnload(); // Final update on cleanup
    };
  }, [slug]);


  if (loading) return <div className='flex items-center justify-center h-[100vh] flex-col fixed top-0 left-0 w-full bg-background z-50'>
    <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-primary shadow-[0_0_20px_5px_rgba(59,130,246,0.6)]"></div>
    <p className="text-lg text-muted-foreground mx-4 mt-3">Loading...</p>
  </div>;
  
  if (!post) return <div>Post not found</div>;


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
    <div className="pt-5 mt-8">
      {/* Parallax Hero Section */}
      <div className="relative p-4 flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${import.meta.env.VITE_BACKEND_BASE_URL}${post.featured_image})`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" style={{ backdropFilter: "blur(5px)" }} />

        {/* Hero Content */}
        <div className="relative z-10 w-full flex items-end">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <Badge className="my-4 neon-glow animate-pulse-glow">
                {post.category.name}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold gradient-text leading-tight animate-fade-in break-words">
                {post.title}
              </h1>
              <p className="text-base md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in break-words">
                {post.excerpt}
              </p>

              {/* Author & Meta Info */}
              <div className="glass-card p-4 rounded-xl inline-block animate-fade-in">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 ring-2 ring-primary/50">
                    <AvatarImage src={`${import.meta.env.VITE_BACKEND_BASE_URL}${post.user.profile}`} alt={post.user.username} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {post.user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{post.user?.name || post.user?.username}</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(post.created_at)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {formatReadingTime(readTime)} read
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        {formatNumber(post.comments_count)} comments
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
      <div className="relative" id="maincontent">
        <div className="container mx-auto px-0 md:px-6 py-8 md:py-16 max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div className="glass-card p-4 md:p-8 hover-lifts">
                <div className="prose prose-lg prose-invert max-w-none prose-headings:gradient-text prose-headings:font-bold prose-p:text-foreground prose-p:leading-relaxed prose-strong:text-primary prose-strong:font-semibold prose-code:bg-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-blockquote:border-l-4 prose-blockquote:border-primary prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground"
                  dangerouslySetInnerHTML={{
                    __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6} /g, '<h2 class="gradient-text">').replace(/<h2 class="gradient-text">([^<]+) /g, '<h2 class="gradient-text">$1</h2>')
                  }}
                />

                {/* Tags */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
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
                <div className="mt-8 md:mt-12 glass-panel p-4 md:p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12 md:w-16 md:h-16 ring-2 ring-primary/50">
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                        {/* {post.user.name.split(' ').map(n => n[0]).join('')} */}
                        <img src={`${import.meta.env.VITE_BACKEND_BASE_URL}${post.user.profile}`} alt="" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold gradient-text mb-2">About {post.user?.name || post.user?.username}</h3>
                      {/* <p className="text-muted-foreground leading-relaxed">{post.author.bio}</p> */}
                      <p className="text-muted-foreground leading-relaxed text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia temporibus consectetur sit nobis earum ipsum eos enim recusandae incidunt possimus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Action Buttons */}
                <div className="glass-panel p-4 rounded-xl space-y-3">

                  <div className="flex flex-col gap-2 border rounded p-2">
                    <p>Read Time of this post</p>
                    <div className="flex items-center justify-between w-full">
                      <Label className="flex items-center gap-2 bg-transparent text-gray-200">
                        <Clock className="w-4 h-4 mr-2" /> Total
                      </Label>
                      <Badge className="bg-gray-800 text-white">{formatReadingTime(readTime)}</Badge>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <Label className="flex items-center gap-2 bg-transparent text-gray-200">
                        <TrendingUp className="w-4 h-4 mr-2" /> Average
                      </Label>
                      <Badge className="bg-gray-800 text-white">{formatReadingTime(averageReadTime)}</Badge>
                    </div>
                  </div>

                  <Button
                    onClick={async () => {
                      const result = await toggleLike({ path: window.location.pathname });
                      if (result) {
                        setIsLiked(result.liked);
                      }
                      toast.success(`Post ${!isLiked ? 'liked' : 'unliked'}!`);
                    }}
                    variant="outline"
                    className={`w-full justify-start ${isLiked ? 'text-blue-400 border-blue-400/50' : ''}`}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                    {isLiked ? 'Liked!' : 'Like Post'}
                    <Badge className={`ml-auto ${isLiked ? 'bg-blue-400 text-white' : ''}`}>
                      {formatNumber(likes)}
                    </Badge>
                  </Button>

                  <Button variant="outline" className={`w-full justify-start mt-0`} >
                    <Eye className={`w-4 h-4 mr-2`} /> Views
                    <Badge className={`ml-auto bg-green-400 text-white`}>
                      {formatNumber(pageViews)}
                    </Badge>
                  </Button>

                  <Button onClick={sharePost} variant="outline" className="w-full justify-start mt-0">
                    <Share2 className="w-4 h-4 mr-2" /> Share Post
                  </Button>
                </div>

                {/* Reading Progress */}
                <div className="glass-panel p-4 rounded-xl">
                  <h3 className="font-semibold mb-3 gradient-text">Reading Progress</h3>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${progress}%`,
                      }}
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
      <div className="relative mb-5">
        <div className="container mx-auto max-w-7xl ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Comments Section */}
            <div className="lg:col-span-9">
              <CommentsSection blogSlug={post.slug} />
            </div>

            {/* Sidebar / Top Posts */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4 hidden">Top Post</h3>
              {/* Add top posts content here */}
            </div>
          </div>
        </div>
      </div>
      {/* Related Posts */}
      <RelatedPosts />

      <div className="w-full bg-secondary rounded-full h-1 fixed bottom-1 left-0 z-50">
        <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

export default BlogPost;