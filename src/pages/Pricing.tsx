import React, { useState } from 'react';
import { Check, Zap, Rocket, Crown, ArrowRight, Calculator, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 297,
      annualPrice: 2970,
      savings: '2 months free',
      features: [
        'AI Strategy Consultation (2 hours)',
        'Basic Process Automation',
        'Simple Chatbot Implementation',
        'Monthly Progress Review',
        'Email Support',
        '1 Revision Round'
      ],
      deliverables: [
        'AI Readiness Assessment',
        'Basic Automation Setup',
        'Simple Chat Integration'
      ],
      timeline: '2-3 weeks',
      ideal: 'Small businesses, Solo entrepreneurs',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      icon: Rocket,
      description: 'Comprehensive solutions for growing companies',
      monthlyPrice: 597,
      annualPrice: 5970,
      savings: '2 months free',
      features: [
        'AI Strategy & Implementation (8 hours)',
        'Advanced Process Automation',
        'Custom AI Agent Development',
        'Integration with Existing Systems',
        'Bi-weekly Progress Reviews',
        'Priority Support',
        '3 Revision Rounds',
        'Performance Analytics Dashboard'
      ],
      deliverables: [
        'Comprehensive AI Strategy',
        'Custom Automation Workflows',
        'Intelligent Agent Systems',
        'Analytics Dashboard'
      ],
      timeline: '4-6 weeks',
      ideal: 'Growing businesses, Mid-size teams',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      description: 'Full-scale transformation for established companies',
      monthlyPrice: 1497,
      annualPrice: 14970,
      savings: '2 months free',
      features: [
        'Complete AI Transformation (20+ hours)',
        'Multi-department Automation',
        'Advanced AI Agent Ecosystem',
        'Custom Integrations & APIs',
        'Weekly Strategy Sessions',
        'Dedicated Account Manager',
        'Unlimited Revisions',
        'Advanced Analytics & Reporting',
        'Team Training & Onboarding',
        'Priority Feature Development'
      ],
      deliverables: [
        'Enterprise AI Architecture',
        'Multi-system Automation',
        'Advanced Agent Network',
        'Custom Integrations',
        'Team Training Program'
      ],
      timeline: '8-12 weeks',
      ideal: 'Large enterprises, Complex operations',
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: 'Rush Delivery',
      description: '50% faster completion time',
      price: '+50% project cost'
    },
    {
      name: 'Additional Revisions',
      description: 'Beyond included revision rounds',
      price: '$200/round'
    },
    {
      name: 'Extended Support',
      description: '6 months post-project support',
      price: '$500/month'
    },
    {
      name: 'Team Training',
      description: 'Comprehensive team workshops',
      price: '$2,000/session'
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
              <Calculator className="w-5 h-5 text-primary animate-pulse-neon" />
              <span className="text-sm font-medium">Transparent Pricing</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 neon-text animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Pricing Plans
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Choose the perfect package for your business transformation. 
              No hidden fees, no surprises - just clear, value-driven pricing.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 glass-panel p-4 w-fit mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <span className={`font-medium ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual}
              />
              <span className={`font-medium ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge className="bg-primary/20 text-primary border-primary/30 ml-2">
                  Save 17%
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id}
                className={`glass-panel border-0 hover-lift animate-fade-in-up relative ${
                  pkg.popular ? 'neon-glow scale-105' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <pkg.icon className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse-neon" />
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {pkg.description}
                  </CardDescription>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold neon-text">
                        ${isAnnual ? Math.round(pkg.annualPrice / 12) : pkg.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-primary mt-2">
                        Billed annually (${pkg.annualPrice}) • {pkg.savings}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Key Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center gap-1 text-primary font-medium">
                        <Clock className="w-4 h-4" />
                        Timeline
                      </div>
                      <div className="text-muted-foreground">{pkg.timeline}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-primary font-medium">
                        <Users className="w-4 h-4" />
                        Ideal For
                      </div>
                      <div className="text-muted-foreground text-xs">{pkg.ideal}</div>
                    </div>
                  </div>
                  
                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Key Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.deliverables.map((item, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full group ${pkg.popular ? 'neon-glow' : ''}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 cyber-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 neon-text">Additional Services</h2>
              <p className="text-xl text-muted-foreground">
                Enhance your package with these premium add-ons
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={service.name}
                  className="glass-panel p-6 hover-lift animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{service.name}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                    <div className="text-primary font-bold text-lg">
                      {service.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 neon-text">Pricing FAQ</h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  q: "What's included in the consultation hours?",
                  a: "Consultation hours cover strategy sessions, planning meetings, progress reviews, and technical discussions. We maximize the value of every minute."
                },
                {
                  q: "Can I upgrade or downgrade my package?",
                  a: "Yes, you can change packages at any time. We'll adjust the timeline and deliverables accordingly, with transparent pricing for any changes."
                },
                {
                  q: "What if my project needs more time?",
                  a: "We provide accurate timelines upfront. If scope changes require additional time, we'll discuss options including extended timelines or additional phases."
                },
                {
                  q: "Do you offer custom packages?",
                  a: "Absolutely! For unique requirements, we create tailored solutions. Contact us to discuss your specific needs and receive a custom quote."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="glass-panel p-6 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <h3 className="font-semibold mb-3 text-primary">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-panel p-12">
              <Star className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-neon" />
              <h2 className="text-4xl font-bold mb-6 neon-text">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a free consultation to discuss your needs and find the perfect package for your transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-lift">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="neon-glow">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;