import React, { useState } from 'react';
import { Download, BookOpen, FileText, Zap, TrendingUp, Bot, Users, ArrowRight, Lock, Unlock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Resources = () => {
  const [email, setEmail] = useState('');
  const [unlockedResources, setUnlockedResources] = useState<string[]>([]);
  const { toast } = useToast();

  const handleUnlock = (resourceId: string) => {
    if (email) {
      setUnlockedResources([...unlockedResources, resourceId]);
      toast({
        title: "Resource Unlocked!",
        description: "Download link has been sent to your email.",
      });
    } else {
      toast({
        title: "Email Required",
        description: "Please enter your email to unlock resources.",
        variant: "destructive"
      });
    }
  };

  const resources = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy Implementation Guide',
      description: 'Complete 50-page blueprint for implementing AI in your business operations',
      category: 'Strategy',
      icon: Bot,
      downloadCount: '2.5K',
      premium: true,
      pages: 50,
      format: 'PDF'
    },
    {
      id: 'automation-checklist',
      title: 'Business Automation Checklist',
      description: 'Step-by-step checklist to identify and automate repetitive tasks',
      category: 'Automation',
      icon: Zap,
      downloadCount: '4.1K',
      premium: false,
      pages: 15,
      format: 'PDF'
    },
    {
      id: 'growth-templates',
      title: 'Growth Hacking Templates',
      description: 'Proven templates and frameworks for rapid business scaling',
      category: 'Growth',
      icon: TrendingUp,
      downloadCount: '3.2K',
      premium: true,
      pages: 35,
      format: 'Template Pack'
    },
    {
      id: 'team-productivity',
      title: 'Remote Team Productivity Playbook',
      description: 'Best practices and tools for managing distributed teams effectively',
      category: 'Management',
      icon: Users,
      downloadCount: '1.8K',
      premium: false,
      pages: 25,
      format: 'PDF'
    },
    {
      id: 'client-onboarding',
      title: 'Client Onboarding Framework',
      description: 'Streamlined process to onboard clients and set expectations',
      category: 'Process',
      icon: FileText,
      downloadCount: '2.9K',
      premium: true,
      pages: 20,
      format: 'Workflow'
    },
    {
      id: 'freelancer-toolkit',
      title: 'Ultimate Freelancer Toolkit',
      description: 'Essential tools, contracts, and resources for independent professionals',
      category: 'Freelancing',
      icon: BookOpen,
      downloadCount: '5.5K',
      premium: false,
      pages: 40,
      format: 'Resource Kit'
    }
  ];

  const categories = ['All', 'Strategy', 'Automation', 'Growth', 'Management', 'Process', 'Freelancing'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background parallax-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up">
              <Download className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Free Resources & Downloads</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 neon-text animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Resources Hub
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Access premium guides, templates, and frameworks to accelerate your business growth. 
              All resources are battle-tested and ready to implement.
            </p>

            {/* Email Unlock */}
            <div className="glass-panel p-6 max-w-md mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter email to unlock resources"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="neon-glow"
                />
                <Button variant="outline" className="neon-glow">
                  <Unlock className="w-4 h-4" />
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

      {/* Resources Grid */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredResources.map((resource, index) => (
              <Card 
                key={resource.id} 
                className="glass-panel border-0 hover-lift animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <resource.icon className="w-10 h-10 text-primary animate-pulse-neon" />
                    {resource.premium ? (
                      <Lock className="w-5 h-5 text-accent" />
                    ) : (
                      <Unlock className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      {resource.category}
                    </span>
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                      {resource.format}
                    </span>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <span>{resource.pages} pages</span>
                    <span>{resource.downloadCount} downloads</span>
                  </div>
                  
                  <Button
                    className="w-full group"
                    onClick={() => handleUnlock(resource.id)}
                    disabled={resource.premium && !email}
                    variant={unlockedResources.includes(resource.id) ? "default" : "outline"}
                  >
                    {unlockedResources.includes(resource.id) ? (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download Now
                      </>
                    ) : (
                      <>
                        {resource.premium && !email ? (
                          <Lock className="w-4 h-4 mr-2" />
                        ) : (
                          <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        )}
                        {resource.premium && !email ? 'Enter Email' : 'Get Resource'}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 cyber-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 neon-text">Need Custom Resources?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized guides and frameworks tailored specifically to your business needs.
            </p>
            <Button size="lg" className="hover-lift">
              <ArrowRight className="w-5 h-5 mr-2" />
              Request Custom Resource
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;