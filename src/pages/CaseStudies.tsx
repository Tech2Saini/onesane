import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
 
import AIDemoModal from "../components/AIDemoModal";
import AIJourneyModal from "../components/AIJourneyModal";

import {
  ArrowRight,
  Brain,
  BarChart3,
  Zap,
  TrendingUp,
  Code,
  Filter,
  Calendar,
  Users,
  Target
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  service: string;
  category: string;
  keyResults: string[];
  teaser: string;
  featured: boolean;
}

const categories = [
  { id: "all", label: "All Cases", icon: Filter },
  { id: "ai-agents", label: "AI Agents", icon: Brain },
  { id: "data-analytics", label: "Data Analytics", icon: BarChart3 },
  { id: "automation", label: "Automation", icon: Zap },
  { id: "ecommerce-growth", label: "E-commerce Growth", icon: TrendingUp },
  { id: "web-app-dev", label: "Web & App Development", icon: Code },
];

const caseStudies: CaseStudy[] = [
  {
    id: "techfashion-ai-agents",
    clientName: "TechFashion Co.",
    industry: "E-commerce Fashion",
    service: "AI Customer Service Agents",
    category: "ai-agents",
    keyResults: ["47% increase in customer satisfaction", "60% reduction in response time", "35% boost in sales conversion"],
    teaser: "Transformed customer support with AI agents that understand fashion preferences and provide personalized recommendations.",
    featured: true
  },
  {
    id: "retailmax-analytics",
    clientName: "RetailMax",
    industry: "Multi-brand Retail",
    service: "Predictive Analytics Platform",
    category: "data-analytics",
    keyResults: ["23% increase in inventory efficiency", "18% reduction in waste", "41% improvement in demand forecasting"],
    teaser: "Built a comprehensive analytics system that predicts customer behavior and optimizes inventory across 200+ stores.",
    featured: true
  },
  {
    id: "autoparts-automation",
    clientName: "AutoParts Direct",
    industry: "Automotive",
    service: "Order Processing Automation",
    category: "automation",
    keyResults: ["89% reduction in processing time", "99.8% order accuracy", "$2.3M annual cost savings"],
    teaser: "Completely automated their order fulfillment pipeline with intelligent routing and quality checks.",
    featured: false
  },
  {
    id: "beautybrand-growth",
    clientName: "BeautyBrand Elite",
    industry: "Cosmetics",
    service: "Growth Optimization Suite",
    category: "ecommerce-growth",
    keyResults: ["156% revenue growth", "73% increase in customer lifetime value", "45% improvement in retention"],
    teaser: "Scaled from $1M to $2.5M in annual revenue using data-driven growth strategies and AI-powered personalization.",
    featured: true
  },
  {
    id: "hometech-platform",
    clientName: "HomeTech Solutions",
    industry: "Smart Home",
    service: "Custom E-commerce Platform",
    category: "web-app-dev",
    keyResults: ["300% faster page load times", "92% mobile conversion rate", "65% increase in average order value"],
    teaser: "Rebuilt their entire platform with modern architecture, resulting in exceptional performance and user experience.",
    featured: false
  },
  {
    id: "foodchain-ai",
    clientName: "Fresh Food Chain",
    industry: "Food & Beverage",
    service: "AI Demand Forecasting",
    category: "ai-agents",
    keyResults: ["31% reduction in food waste", "52% improvement in stock accuracy", "28% increase in profit margins"],
    teaser: "Deployed AI agents to predict demand patterns and optimize supply chain for 150+ restaurant locations.",
    featured: false
  }
];


const CaseStudies = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);
  const [scrollY, setScrollY] = useState(0);
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredStudies(caseStudies);
    } else {
      setFilteredStudies(caseStudies.filter(study => study.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCaseStudyClick = (id: string) => {
    navigate(`/case-study/${id}`);
  };

  return (
    <>
       <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Parallax Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />

          {/* Animated Tech Grid Overlay */}
          <div className="absolute inset-0 tech-grid opacity-20 z-10" />

          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80 z-20" />

          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl float-animation z-10" />
          <div className="absolute bottom-40 right-32 w-24 h-24 rounded-full bg-secondary/20 blur-xl float-animation z-10" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-accent/20 blur-xl float-animation z-10" style={{ animationDelay: '4s' }} />

          {/* Hero Content */}
          <div className="relative z-30 text-center max-w-4xl mx-auto px-6">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  See How{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent animated-gradient">
                    Onesane AI
                  </span>
                  <br />
                  Transforms Businesses
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Real results from real clients — driven by AI innovation, automation, and data-driven strategies.
                </p>
              </div>

              {/* Animated Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { number: "150+", label: "Businesses Transformed", delay: "0s" },
                  { number: "89%", label: "Average Efficiency Increase", delay: "0.5s" },
                  { number: "$12M+", label: "Revenue Generated", delay: "1s" }
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-2xl micro-bounce"
                    style={{ animationDelay: metric.delay }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{metric.number}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section
          className="py-16 px-6" style={{ background: "radial-gradient(ellipse at center, hsl(214 88% 55% / 0.3), transparent 70%)" }}
        >

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Our Success Stories</h2>
              <p className="text-muted-foreground text-lg">Filter by service category to find relevant case studies</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`glass-button ${selectedCategory === category.id
                      ? "bg-gradient-primary glow-primary"
                      : ""
                      }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.label}
                  </Button>
                );
              })}
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, index) => (
                <Card
                  key={study.id}
                  className={`glass-card p-6 cursor-pointer micro-bounce group ${study.featured ? "ring-2 ring-primary/30" : ""
                    }`}
                  onClick={() => handleCaseStudyClick(study.id)}
                  style={{ animationDelay: `${index * 0.1}s`, backgroundColor: "#194a8f" }}
                >
                  {study.featured && (
                    <Badge className="mb-4 bg-gradient-primary">Featured</Badge>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {study.clientName}
                        </h3>
                        <p className="text-sm text-muted-foreground">{study.industry}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>

                    <Badge variant="outline" className="w-fit">
                      {study.service}
                    </Badge>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.teaser}
                    </p>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary">Key Results:</p>
                      <ul className="space-y-1">
                        {study.keyResults.slice(0, 2).map((result, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-center">
                            <Target className="w-3 h-3 mr-2 text-secondary" />
                            {result}
                          </li>
                        ))}
                        {study.keyResults.length > 2 && (
                          <li className="text-xs text-primary">
                            +{study.keyResults.length - 2} more results
                          </li>
                        )}
                      </ul>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-4 glass-button group-hover:bg-gradient-primary"
                    >
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute inset-0 tech-grid opacity-5" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold leading-tight">
                Ready to Write Your Own{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Success Story?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the businesses already transforming their operations with Onesane AI.
                Let's discuss how we can accelerate your growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:glow-primary text-lg px-8 py-6 rounded-2xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-button text-lg px-8 py-6 rounded-2xl"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Try AI Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
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
    </>
  );
};

export default CaseStudies;