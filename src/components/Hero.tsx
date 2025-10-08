import { ArrowRight, Bot, Zap, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AIJourneyModal from "./AIJourneyModal";
import AIDemoModal from "./AIDemoModal";
import heroImage from '../assets/hero-ai-network.jpg';


const Hero = () => {
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screjen flex items-center justify-center overflow-hidden" style={{ padding: '30px 10px', marginTop: '4rem' }}>
      {/* Background with Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Neural Network"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-glow rounded-full animate-float opacity-30" />
      <div className="absolute bottom-40 right-32 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-xs animate-pulse-glow">
              <Zap className="w-3 h-3 text-accent" />
              <span className="gradient-text-accent font-medium">AI-Powered Business Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="gradient-text">Transform Your</span>
              <br />
              <span className="text-foreground">Business with</span>
              <br />
              <span className="gradient-text-accent">AI Innovation</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Strategic consulting, automation, and cutting-edge AI agents that revolutionize
              how you connect with customers and optimize operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center pt-2">
              <Button
                size="lg"
                onClick={() => setIsJourneyModalOpen(true)}
                className="bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 px-6 py-4 text-base font-semibold glow-primary group"
              >
                <Zap className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                Start Your AI Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
                className="glass border-accent/50 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300 px-6 py-4 text-base hover-lift group"
              >
                <Sparkles className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                Try AI Demo
              </Button>
            </div>
          </div>

          {/* Right Content - AI Demo Video */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl glow-primary">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-primary/20 border border-accent/30">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/api/placeholder/640/360"
                >
                  <source src="/videos/Aug_14__1801_29s_202508141812_yilj4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>



                {/* Fallback - Animated AI Visual */}
                <div className="absolute inset-0 bg-gradient-primary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">

                  </div>
                </div>
              </div>

              {/* Video Overlay Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text">24/7</div>
                  <div className="text-xs text-muted-foreground">AI Availability</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">&lt; 1s</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">99%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto hidden">

          <div className="glass-card text-center hover-lift">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">AI Agents Deployed</div>
          </div>
          <div className="glass-card text-center hover-lift">
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="glass-card text-center hover-lift">
            <div className="text-3xl font-bold gradient-text mb-2">50M+</div>
            <div className="text-muted-foreground">Messages Processed</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Modals */}
      <AIJourneyModal
        isOpen={isJourneyModalOpen}
        onClose={() => setIsJourneyModalOpen(false)}
      />
      <AIDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onStartJourney={() => {
          setIsDemoModalOpen(false);
          setIsJourneyModalOpen(true);
        }}
      />
    </section>
  );
};

export default Hero;