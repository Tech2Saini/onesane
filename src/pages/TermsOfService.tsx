import { useEffect, useRef } from 'react';
import { FileCheck, Briefcase, CreditCard, Copyright, AlertTriangle, XCircle, Gavel, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    "AI strategy & consulting",
    "AI agents for messaging platforms", 
    "Process automation",
    "Web/app development",
    "Data analytics & insights",
    "SEO & digital marketing"
  ];

  const userResponsibilities = [
    "Provide accurate and truthful information",
    "Use our services only for lawful purposes",
    "Not attempt to disrupt or misuse our systems",
    "Respect intellectual property rights"
  ];

  const terminationReasons = [
    "You violate these Terms",
    "Payments are not completed", 
    "Services are misused for unlawful or harmful activities",
    "Breach of confidentiality agreements"
  ];

  return (
    <div className="min-h-screen parallax-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div ref={parallaxRef} className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-10 w-28 h-28 border border-neon-cyan/40 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-32 left-16 w-36 h-36 border border-neon-purple/40 rounded-full animate-pulse-neon"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-primary/40 rounded-full animate-float"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up">
              <FileCheck className="w-12 h-12 text-primary animate-pulse-neon" />
              <h1 className="text-5xl font-bold neon-text">Terms of Service</h1>
            </div>
            
            <div className="glass-panel p-8 hover-lift">
              <p className="text-lg text-muted-foreground mb-4">
                <strong className="text-foreground">Effective Date:</strong> August 22, 2025
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Last Updated:</strong> August 22, 2025
              </p>
              <p className="text-xl leading-relaxed">
                Welcome to <span className="neon-text font-semibold">Onesane</span>. 
                By accessing or using our website and services, you agree to these Terms of Service.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 hover-lift">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/20 neon-glow">
                  <Gavel className="w-8 h-8 text-primary animate-float" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                These Terms are a binding agreement between Onesane ("we", "our", "us") and you ("Client", "User"). 
                By using our services, you agree to comply with these Terms.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 hover-lift">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-accent/20 neon-glow">
                  <Briefcase className="w-8 h-8 text-accent animate-pulse-neon" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">2. Services Provided</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">
                We provide consulting, freelancing, and AI-powered business solutions including (but not limited to):
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover-lift"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-background animate-pulse"></div>
                    </div>
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 hover-lift">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-neon-cyan/20 neon-glow">
                  <FileCheck className="w-8 h-8 text-neon-cyan animate-float" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">3. User Responsibilities</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">When using our services, you agree to:</p>
              
              <div className="space-y-3">
                {userResponsibilities.map((responsibility, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full border-2 border-neon-cyan flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
                    </div>
                    <span className="text-foreground leading-relaxed">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Payments & Refunds */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 hover-lift">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-neon-purple/20 neon-glow">
                  <CreditCard className="w-8 h-8 text-neon-purple animate-pulse-neon" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">4. Payments & Refunds</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/30">
                  <p className="text-foreground font-medium mb-2">Payment Terms</p>
                  <p className="text-muted-foreground">All fees are agreed upon before the start of a project. Payments are due as per the agreed schedule (milestone, upfront, or recurring).</p>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/30">
                  <p className="text-foreground font-medium mb-2">Refund Policy</p>
                  <p className="text-muted-foreground">Refunds may be considered on a case-by-case basis but are not guaranteed once services have been delivered.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 hover-lift">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/20 neon-glow">
                  <Copyright className="w-8 h-8 text-primary animate-float" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">5. Intellectual Property</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 rounded-xl cyber-gradient border border-primary/30">
                  <p className="text-foreground leading-relaxed">
                    All website content, branding, and service materials provided by Onesane remain our intellectual property unless explicitly transferred. 
                    Deliverables created under contract (e.g., websites, code, designs) may be licensed or transferred to the client as per agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 hover-lift">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-destructive/20 neon-glow">
                  <AlertTriangle className="w-8 h-8 text-destructive animate-pulse-neon" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
              </div>
              
              <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/30">
                <p className="text-foreground leading-relaxed">
                  We strive for excellence, but we are not liable for indirect damages, data loss, or business interruptions resulting from the use of our services. 
                  Our total liability shall not exceed the amount paid by you for the service in question.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 hover-lift">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-accent/20 neon-glow">
                  <XCircle className="w-8 h-8 text-accent animate-float" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">7. Termination</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">We may suspend or terminate services if:</p>
              
              <div className="space-y-3">
                {terminationReasons.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 hover:bg-destructive/20 transition-all duration-300"
                  >
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 animate-pulse" />
                    <span className="text-foreground leading-relaxed">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 hover-lift">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Mail className="w-8 h-8 text-primary animate-pulse-neon" />
                Legal Inquiries
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover-lift">
                  <Mail className="w-6 h-6 text-accent animate-float" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@onesane.ai</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover-lift">
                  <Phone className="w-6 h-6 text-accent animate-float" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover-lift">
                  <MapPin className="w-6 h-6 text-accent animate-float" />
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
                Ready to work with us?
              </h3>
              <p className="text-muted-foreground mb-6">
                By proceeding, you acknowledge that you've read and agree to these terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="neon-glow hover:scale-105 transition-all duration-300"
                >
                  Start Your Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/50 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                >
                  Contact Legal Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;