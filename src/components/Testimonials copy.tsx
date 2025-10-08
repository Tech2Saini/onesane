import React, { useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Users, TrendingUp, Award, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face",
      category: "AI Development",
      rating: 5,
      text: "The AI solution transformed our customer service completely. Response times dropped by 85% and our team can now focus on complex issues. The ROI was incredible - we recovered our investment in just 3 months.",
      project: "AI Customer Service Platform",
      results: [
        "85% faster response times",
        "40% increase in satisfaction",
        "$200K annual savings"
      ],
      videoUrl: "https://example.com/video1",
      featured: true
    },
    {
      id: 2,
      name: "Mike Chen",
      position: "Operations Manager",
      company: "Manufacturing Plus",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      category: "Automation",
      rating: 5,
      text: "The automation suite revolutionized our operations. We went from 40 hours of manual work per week to virtually zero. The accuracy improvement was just as impressive - 95% reduction in errors.",
      project: "Business Process Automation",
      results: [
        "40 hours saved weekly",
        "95% fewer errors",
        "ROI in 2 months"
      ],
      videoUrl: null,
      featured: true
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "CEO",
      company: "StyleHub Fashion",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      category: "E-commerce",
      rating: 5,
      text: "Our new e-commerce platform exceeded all expectations. The conversion rate increased by 65% and mobile sales grew by 120%. The user experience is incredible and our customers love it.",
      project: "E-commerce Platform Redesign",
      results: [
        "65% higher conversion",
        "120% mobile sales growth",
        "$1.2M revenue increase"
      ],
      videoUrl: "https://example.com/video3",
      featured: false
    },
    {
      id: 4,
      name: "David Park",
      position: "Founder",
      company: "FitTrack Pro",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      category: "Mobile App",
      rating: 5,
      text: "The AI fitness app's personalized coaching feature is game-changing. We gained 100K users in 6 months with a 4.8-star rating. The machine learning adaptation keeps users engaged like nothing else.",
      project: "AI Fitness Coaching App",
      results: [
        "100K+ users in 6 months",
        "4.8-star app rating",
        "85% user retention"
      ],
      videoUrl: null,
      featured: true
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Marketing Director",
      company: "GrowthLab",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      category: "Marketing Automation",
      rating: 5,
      text: "The marketing automation platform transformed our lead generation. We're now processing 300% more leads with the same team size. The AI-powered lead scoring is incredibly accurate.",
      project: "Marketing Automation System",
      results: [
        "300% more leads processed",
        "90% lead scoring accuracy",
        "50% faster sales cycle"
      ],
      videoUrl: "https://example.com/video5",
      featured: false
    },
    {
      id: 6,
      name: "Robert Kim",
      position: "Operations Director",
      company: "LogiTech Systems",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      category: "Supply Chain",
      rating: 5,
      text: "The supply chain optimization AI reduced our inventory costs by 30% while improving delivery times. The predictive analytics help us stay ahead of demand fluctuations.",
      project: "Supply Chain AI Optimization",
      results: [
        "30% inventory cost reduction",
        "25% faster deliveries",
        "98% demand accuracy"
      ],
      videoUrl: null,
      featured: false
    }
  ];

  const categories = ['All', 'AI Development', 'Automation', 'E-commerce', 'Mobile App', 'Marketing Automation', 'Supply Chain'];
  
  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const featuredTestimonials = testimonials.filter(t => t.featured);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  return (
    <div className="min-h-screen bg-background parallax-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up">
              <Award className="w-5 h-5 text-primary animate-pulse-neon" />
              <span className="text-sm font-medium">Client Success Stories</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 neon-text animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Testimonials
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Discover how we've helped businesses achieve remarkable transformations. 
              Real results from real clients who trusted us with their growth.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="text-center">
                <div className="text-3xl font-bold neon-text mb-2">98%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-text mb-2">5.0</div>
                <div className="text-muted-foreground text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-text mb-2">120+</div>
                <div className="text-muted-foreground text-sm">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Testimonial Carousel */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 neon-text">Featured Success Stories</h2>
            
            <div className="relative">
              <Card className="glass-panel border-0 p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <Quote className="w-12 h-12 text-primary mb-6 animate-pulse-neon" />
                    
                    <blockquote className="text-xl leading-relaxed mb-6">
                      "{featuredTestimonials[currentTestimonial]?.text}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={featuredTestimonials[currentTestimonial]?.avatar} 
                        alt={featuredTestimonials[currentTestimonial]?.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-lg">
                          {featuredTestimonials[currentTestimonial]?.name}
                        </div>
                        <div className="text-muted-foreground">
                          {featuredTestimonials[currentTestimonial]?.position}
                        </div>
                        <div className="text-primary font-medium">
                          {featuredTestimonials[currentTestimonial]?.company}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    {featuredTestimonials[currentTestimonial]?.videoUrl && (
                      <Button variant="outline" className="neon-glow">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Video Testimonial
                      </Button>
                    )}
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 neon-text">Project Results</h3>
                      <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                        {featuredTestimonials[currentTestimonial]?.project}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      {featuredTestimonials[currentTestimonial]?.results.map((result, index) => (
                        <div key={index} className="glass-panel p-4 hover-lift">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            <span className="font-medium">{result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={prevTestimonial}
                  className="neon-glow"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <div className="flex gap-2">
                  {featuredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial 
                          ? 'bg-primary scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={nextTestimonial}
                  className="neon-glow"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-12">
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

      {/* All Testimonials Grid */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id}
                  className="glass-panel border-0 hover-lift animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="neon-glow">
                        {testimonial.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>
                          {testimonial.position} at {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <Quote className="w-6 h-6 text-primary mb-3 opacity-50" />
                    <blockquote className="text-sm leading-relaxed mb-4">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-primary">Key Results:</div>
                      {testimonial.results.slice(0, 2).map((result, i) => (
                        <div key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                          <TrendingUp className="w-3 h-3 text-primary" />
                          {result}
                        </div>
                      ))}
                    </div>
                    
                    {testimonial.videoUrl && (
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Video
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 cyber-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-neon" />
            <h2 className="text-4xl font-bold mb-6 neon-text">Join Our Success Stories</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to become our next success story? Let's discuss how we can help transform 
              your business and achieve remarkable results together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift">
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Success Story
              </Button>
              <Button variant="outline" size="lg" className="neon-glow">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;