import { useEffect, useRef } from 'react';
import { Shield, Eye, Lock, Users, Globe, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal Information: Name, email, phone number, company name, project details (when you fill forms or contact us).",
        "Technical Information: IP address, browser type, operating system, device identifiers, and browsing activity through cookies or analytics tools.",
        "Business Information: Project budgets, service requests, and preferences you share with us."
      ]
    },
    {
      title: "How We Use Your Information", 
      icon: FileText,
      content: [
        "Provide and improve our services.",
        "Respond to inquiries and customer support requests.",
        "Customize and optimize our website and offerings.",
        "Conduct analytics and improve user experience.",
        "Send updates, newsletters, and marketing (only with your consent).",
        "Comply with legal requirements."
      ]
    },
    {
      title: "Data Sharing & Third Parties",
      icon: Users,
      content: [
        "We do not sell or rent your data. We may share limited information with:",
        "Trusted service providers (e.g., hosting, analytics, payment processors).",
        "Legal authorities, if required by law.",
        "Business partners, but only with your consent."
      ]
    },
    {
      title: "Cookies & Tracking",
      icon: Globe,
      content: [
        "Our website uses cookies and similar technologies for:",
        "Site functionality and performance.",
        "Analytics (to understand how users engage).",
        "Marketing personalization.",
        "You can disable cookies in your browser settings, but some features may not function properly."
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "We implement industry-standard security measures such as encryption, secure servers, and limited access controls to protect your data.",
        "However, no system is 100% secure, and we cannot guarantee absolute security."
      ]
    }
  ];

  return (
    <div className="min-h-screen parallax-bg relative overflow-hidden">
      {/* Animated background patterns */}
      <div ref={parallaxRef} className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-primary/30 animate-pulse-neon"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full border border-accent/30 animate-float"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full border border-neon-purple/30 animate-pulse-neon"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up">
              <Shield className="w-12 h-12 text-primary animate-pulse-neon" />
              <h1 className="text-5xl font-bold neon-text">Privacy Policy</h1>
            </div>
            
            <div className="glass-panel p-8 hover-lift">
              <p className="text-lg text-muted-foreground mb-4">
                <strong className="text-foreground">Effective Date:</strong> August 22, 2025
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Last Updated:</strong> August 22, 2025
              </p>
              <p className="text-xl leading-relaxed">
                At <span className="neon-text font-semibold">Onesane</span>, your privacy is a top priority. 
                We are committed to protecting your personal information and being transparent about how we use it.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div 
                  key={index}
                  className="glass-panel p-8 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/20 neon-glow">
                      <IconComponent className="w-8 h-8 text-primary animate-float" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground flex-1">
                      {index + 1}. {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 animate-pulse"></div>
                        <p className="text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Your Rights Section */}
            <div className="glass-panel p-8 hover-lift">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-accent/20 neon-glow">
                  <Shield className="w-8 h-8 text-accent animate-pulse-neon" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">6. Your Rights</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">You have the right to:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Access, update, or delete your personal information",
                  "Withdraw consent to marketing communications", 
                  "Request details of how your data is used",
                  "Data portability and rectification"
                ].map((right, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300">
                    <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>
                    <span className="text-foreground">{right}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 rounded-xl cyber-gradient border border-primary/30">
                <p className="text-foreground">
                  To exercise your rights, contact us at: 
                  <a href="mailto:hello@onesane.ai" className="text-primary hover:text-accent transition-colors duration-300 ml-2 font-semibold">
                    hello@onesane.ai
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="glass-panel p-8 hover-lift">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Mail className="w-8 h-8 text-primary" />
                Contact Us
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300">
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@onesane.ai</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300">
                  <Phone className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Office</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-panel p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Questions about our Privacy Policy?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're here to help clarify anything about how we protect your data.
              </p>
              <Button 
                size="lg" 
                className="neon-glow hover:scale-105 transition-all duration-300"
              >
                Contact Our Privacy Team
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;