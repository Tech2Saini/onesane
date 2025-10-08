import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Zap, TrendingUp, Rocket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setIsSubmitted(true);
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to our tech innovation updates.",
      });
    }
  };

  const benefits = [
    {
      icon: Zap,
      title: "Weekly AI Insights",
      description: "Latest trends in artificial intelligence and automation"
    },
    {
      icon: TrendingUp,
      title: "Business Growth Tips",
      description: "Proven strategies to scale your operations efficiently"
    },
    {
      icon: Rocket,
      title: "Innovation Updates",
      description: "First access to new tools, services, and methodologies"
    },
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Join entrepreneurs and innovators in our private network"
    }
  ];

  return (
    <div className="min-h-screen bg-background parallax-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Stay Ahead of Innovation</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 neon-text animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Tech Updates
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Get exclusive insights on AI, automation, and business innovation delivered directly to your inbox. 
              Join 10,000+ forward-thinking entrepreneurs.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Form */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="glass-panel p-8 hover-lift">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <Mail className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse-neon" />
                    <h2 className="text-3xl font-bold mb-2">Subscribe Now</h2>
                    <p className="text-muted-foreground">Join the innovation revolution</p>
                  </div>
                  
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="neon-glow"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="neon-glow"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full hover-lift group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Subscribe to Updates
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    No spam, unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse-neon" />
                  <h2 className="text-3xl font-bold mb-4">Welcome Aboard!</h2>
                  <p className="text-muted-foreground mb-6">
                    You're now part of our exclusive tech innovation community. 
                    Check your email for a welcome message.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="neon-glow"
                  >
                    Subscribe Another Email
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 neon-text">What You'll Get</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Premium insights and exclusive content delivered weekly
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className="glass-panel p-6 hover-lift animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <benefit.icon className="w-12 h-12 text-primary mb-4 animate-float" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 cyber-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold neon-text mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Subscribers</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold neon-text mb-2">98%</div>
              <div className="text-muted-foreground">Open Rate</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold neon-text mb-2">Weekly</div>
              <div className="text-muted-foreground">Updates</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;