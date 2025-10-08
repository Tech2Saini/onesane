import React, { useState } from 'react';
import { Cookie, Shield, Settings, Eye, BarChart, CheckCircle, XCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const CookiePolicy = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const handleCookieToggle = (type: string) => {
    if (type === 'essential') return; // Essential cookies can't be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieTypes = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      icon: Shield,
      description: 'Required for basic website functionality and security',
      examples: ['Authentication', 'Security', 'Form submissions'],
      retention: 'Session/1 year',
      required: true
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      icon: BarChart,
      description: 'Help us understand how visitors use our website',
      examples: ['Google Analytics', 'Page views', 'User behavior'],
      retention: '2 years',
      required: false
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      icon: Eye,
      description: 'Used to deliver relevant advertising and track campaigns',
      examples: ['Ad targeting', 'Social media pixels', 'Retargeting'],
      retention: '1-2 years',
      required: false
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      icon: Settings,
      description: 'Remember your settings and provide enhanced features',
      examples: ['Language settings', 'Theme preferences', 'Customization'],
      retention: '1 year',
      required: false
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
              <Cookie className="w-5 h-5 text-primary animate-pulse-neon" />
              <span className="text-sm font-medium">Cookie Policy & Preferences</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 neon-text animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Cookie Policy
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              We use cookies to enhance your experience, provide security, and improve our services. 
              Take control of your privacy preferences below.
            </p>

            <div className="glass-panel p-6 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <p className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> August 22, 2025 | 
                <strong> Last Updated:</strong> August 22, 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Preferences */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 neon-text">Cookie Preferences</h2>
              <p className="text-xl text-muted-foreground">
                Customize your cookie settings to match your privacy preferences
              </p>
            </div>

            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <Card 
                  key={type.id}
                  className="glass-panel border-0 hover-lift animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <type.icon className="w-8 h-8 text-primary animate-pulse-neon" />
                        <div>
                          <CardTitle className="text-xl flex items-center gap-2">
                            {type.name}
                            {type.required && (
                              <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                                Required
                              </span>
                            )}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {type.description}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {cookieSettings[type.id as keyof typeof cookieSettings] ? (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        ) : (
                          <XCircle className="w-5 h-5 text-muted-foreground" />
                        )}
                        <Switch
                          checked={cookieSettings[type.id as keyof typeof cookieSettings]}
                          onCheckedChange={() => handleCookieToggle(type.id)}
                          disabled={type.required}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Examples:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          {type.examples.map((example, i) => (
                            <li key={i}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Retention Period:</h4>
                        <p className="text-muted-foreground">{type.retention}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift">
                <CheckCircle className="w-5 h-5 mr-2" />
                Save Preferences
              </Button>
              <Button variant="outline" size="lg" className="neon-glow">
                Accept All Cookies
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Policy */}
      <div className="py-16 cyber-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-8">
                <Info className="w-8 h-8 text-primary animate-pulse-neon" />
                <h2 className="text-3xl font-bold neon-text">Detailed Cookie Information</h2>
              </div>

              <div className="space-y-8">
                <section className="animate-fade-in-up">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">What Are Cookies?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies are small text files stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences, 
                    keeping you logged in, and understanding how you use our site.
                  </p>
                </section>

                <section className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">How We Use Cookies</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Security & Authentication:</strong> To keep your account secure and maintain your login session.
                    </div>
                    <div>
                      <strong className="text-foreground">Site Functionality:</strong> To remember your preferences and provide core website features.
                    </div>
                    <div>
                      <strong className="text-foreground">Analytics:</strong> To understand how visitors use our site and improve user experience.
                    </div>
                    <div>
                      <strong className="text-foreground">Marketing:</strong> To show you relevant content and measure advertising effectiveness.
                    </div>
                  </div>
                </section>

                <section className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Third-Party Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may use third-party services like Google Analytics, social media platforms, 
                    and advertising networks that set their own cookies. These services have their 
                    own privacy policies and cookie practices.
                  </p>
                </section>

                <section className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Managing Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can control cookies through your browser settings or using our preference 
                    center above. Note that disabling certain cookies may affect website functionality. 
                    You can also clear existing cookies from your browser at any time.
                  </p>
                </section>

                <section className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h3>
                  <p className="text-muted-foreground">
                    If you have questions about our cookie policy, please contact us at:
                  </p>
                  <div className="mt-4 space-y-2 text-muted-foreground">
                    <div><strong className="text-foreground">📧 Email:</strong> hello@onesane.ai</div>
                    <div><strong className="text-foreground">📞 Phone:</strong> +1 (555) 123-4567</div>
                    <div><strong className="text-foreground">🏢 Office:</strong> San Francisco, CA</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;