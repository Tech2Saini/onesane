import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, TrendingUp, Star, ArrowRight, Globe, Smartphone, Bot, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'ai-customer-service',
      title: 'AI-Powered Customer Service Platform',
      category: 'AI Development',
      client: 'TechCorp Solutions',
      description: 'Developed an intelligent customer service chatbot that reduced response time by 85% and increased customer satisfaction.',
      longDescription: 'Built a comprehensive AI chatbot system using natural language processing and machine learning. The solution integrated with existing CRM systems and handled 90% of customer inquiries automatically.',
      technologies: ['Python', 'TensorFlow', 'OpenAI API', 'React', 'Node.js'],
      duration: '4 months',
      team: '3 developers',
      results: [
        '85% reduction in response time',
        '40% increase in customer satisfaction',
        '60% reduction in support tickets',
        '$200K annual cost savings'
      ],
      testimonial: {
        text: "The AI solution transformed our customer service. Response times dropped dramatically and our team can focus on complex issues.",
        author: "Sarah Johnson",
        position: "CTO, TechCorp Solutions"
      },
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      icon: Bot,
      featured: true
    },
    {
      id: 'automation-workflow',
      title: 'Business Process Automation Suite',
      category: 'Automation',
      client: 'Manufacturing Plus',
      description: 'Automated 15 manual processes, saving 40 hours per week and reducing errors by 95%.',
      longDescription: 'Designed and implemented a comprehensive automation suite that streamlined inventory management, order processing, and quality control workflows.',
      technologies: ['Zapier', 'Python', 'API Integration', 'PostgreSQL', 'Docker'],
      duration: '3 months',
      team: '2 developers',
      results: [
        '40 hours saved per week',
        '95% reduction in errors',
        '30% faster order processing',
        'ROI achieved in 2 months'
      ],
      testimonial: {
        text: "The automation suite revolutionized our operations. We've saved countless hours and virtually eliminated manual errors.",
        author: "Mike Chen",
        position: "Operations Manager, Manufacturing Plus"
      },
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop',
      icon: Zap,
      featured: true
    },
    {
      id: 'ecommerce-platform',
      title: 'Next-Gen E-commerce Platform',
      category: 'Web Development',
      client: 'StyleHub Fashion',
      description: 'Built a modern e-commerce platform that increased conversion rates by 65% and mobile sales by 120%.',
      longDescription: 'Created a responsive, fast-loading e-commerce platform with advanced features like AI-powered recommendations, real-time inventory, and seamless payment integration.',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB', 'AWS'],
      duration: '5 months',
      team: '4 developers',
      results: [
        '65% increase in conversion rate',
        '120% growth in mobile sales',
        '45% faster page load times',
        '$1.2M revenue increase in first year'
      ],
      testimonial: {
        text: "Our new platform exceeded all expectations. The user experience is incredible and sales have skyrocketed.",
        author: "Emma Rodriguez",
        position: "CEO, StyleHub Fashion"
      },
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      icon: Globe,
      featured: false
    },
    {
      id: 'mobile-fitness-app',
      title: 'AI Fitness Coaching Mobile App',
      category: 'Mobile Development',
      client: 'FitTrack Pro',
      description: 'Developed a personalized fitness app with AI coaching that gained 100K+ users in 6 months.',
      longDescription: 'Built a comprehensive fitness application with AI-powered workout recommendations, progress tracking, and social features. The app uses machine learning to adapt workouts based on user performance.',
      technologies: ['React Native', 'Firebase', 'TensorFlow Lite', 'Stripe', 'Socket.io'],
      duration: '6 months',
      team: '5 developers',
      results: [
        '100K+ active users in 6 months',
        '4.8-star app store rating',
        '85% user retention rate',
        '$500K revenue in first year'
      ],
      testimonial: {
        text: "The app's AI coaching feature is game-changing. Users love the personalized experience and results speak for themselves.",
        author: "David Park",
        position: "Founder, FitTrack Pro"
      },
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      icon: Smartphone,
      featured: true
    }
  ];

  const categories = ['All', 'AI Development', 'Automation', 'Web Development', 'Mobile Development'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-background parallax-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up">
              <Star className="w-5 h-5 text-primary animate-pulse-neon" />
              <span className="text-sm font-medium">Featured Portfolio</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 neon-text animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Our Work
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Discover how we've helped businesses transform their operations with cutting-edge AI, 
              automation, and innovative development solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="text-center">
                <div className="text-3xl font-bold neon-text mb-2">50+</div>
                <div className="text-muted-foreground text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-text mb-2">98%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-text mb-2">$5M+</div>
                <div className="text-muted-foreground text-sm">Client ROI Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16 hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 neon-text">Featured Success Stories</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <Card 
                  key={project.id}
                  className="glass-panel border-0 hover-lift animate-fade-in-up cursor-pointer"
                  style={{animationDelay: `${index * 0.2}s`}}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <project.icon className="w-8 h-8 text-white animate-pulse-neon" />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="neon-glow">
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.team}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <Button className="w-full group">
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
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

      {/* All Projects */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="glass-panel border-0 hover-lift animate-fade-in-up cursor-pointer"
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <project.icon className="w-6 h-6 text-white animate-pulse-neon" />
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <Badge variant="outline" className="w-fit mb-2 neon-glow text-xs">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.client}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">High Impact</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                    </div>
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
            <h2 className="text-4xl font-bold mb-6 neon-text">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our portfolio of successful clients. Let's discuss how we can transform your business 
              with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift">
                <ArrowRight className="w-5 h-5 mr-2" />
                <Link to="/contact">
                Start Your Project
                </Link>
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;