import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Calendar,
  Users,
  Target,
  CheckCircle2,
  TrendingUp,
  Quote,
  Brain,
  BarChart3,
  Clock,
  DollarSign
} from "lucide-react";
import { useEffect, useState } from "react";

interface CaseStudyData {
  id: string;
  clientName: string;
  industry: string;
  service: string;
  category: string;
  projectDuration: string;
  teamSize: string;
  clientOverview: string;
  challenge: string;
  solution: string;
  implementation: {
    phases: Array<{
      title: string;
      duration: string;
      description: string;
      tasks: string[];
    }>;
  };
  results: {
    metrics: Array<{
      label: string;
      before: string;
      after: string;
      improvement: string;
      type: 'percentage' | 'number' | 'currency' | 'time';
    }>;
    additionalBenefits: string[];
  };
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  technologies: string[];
  keyLearnings: string[];
}

// Mock data - in a real app, this would come from an API
const getCaseStudyData = (id: string): CaseStudyData | null => {
  const studies: Record<string, CaseStudyData> = {
    "techfashion-ai-agents": {
      id: "techfashion-ai-agents",
      clientName: "TechFashion Co.",
      industry: "E-commerce Fashion",
      service: "AI Customer Service Agents",
      category: "ai-agents",
      projectDuration: "4 months",
      teamSize: "6 specialists",
      clientOverview: "TechFashion Co. is a rapidly growing online fashion retailer serving over 100,000 customers across North America. They specialize in trendy, affordable clothing for millennials and Gen Z consumers, with a catalog of over 10,000 products across multiple categories.",
      challenge: "TechFashion was struggling with overwhelming customer service demands. Their support team of 12 agents was handling 500+ inquiries daily, leading to 8-hour response times, frustrated customers, and declining satisfaction scores. The team was spending 70% of their time on repetitive questions about sizing, returns, and product recommendations, leaving little time for complex issues that required human expertise.",
      solution: "We implemented a comprehensive AI customer service ecosystem featuring intelligent chatbots powered by advanced NLP, automated ticket routing, and AI-driven product recommendation engines. The system was trained on TechFashion's entire product catalog, customer interaction history, and fashion expertise to provide personalized, accurate responses 24/7.",
      implementation: {
        phases: [
          {
            title: "Discovery & Data Collection",
            duration: "3 weeks",
            description: "Analyzed existing customer service data and identified key pain points",
            tasks: [
              "Audit of 50,000+ customer interactions",
              "Analysis of product catalog and customer preferences",
              "Integration planning with existing systems",
              "Team training needs assessment"
            ]
          },
          {
            title: "AI Agent Development",
            duration: "6 weeks",
            description: "Built and trained custom AI agents for fashion-specific customer service",
            tasks: [
              "NLP model training on fashion terminology",
              "Product recommendation algorithm development",
              "Sizing guide AI integration",
              "Return policy automation system"
            ]
          },
          {
            title: "System Integration",
            duration: "4 weeks",
            description: "Seamlessly integrated AI agents with existing platforms",
            tasks: [
              "CRM system integration",
              "E-commerce platform connection",
              "Live chat implementation",
              "Mobile app integration"
            ]
          },
          {
            title: "Testing & Optimization",
            duration: "3 weeks",
            description: "Comprehensive testing and performance optimization",
            tasks: [
              "Beta testing with 1000 customers",
              "Performance optimization",
              "Quality assurance testing",
              "Staff training and handover"
            ]
          }
        ]
      },
      results: {
        metrics: [
          {
            label: "Response Time",
            before: "8 hours",
            after: "30 seconds",
            improvement: "99.9%",
            type: "time"
          },
          {
            label: "Customer Satisfaction",
            before: "72%",
            after: "94%",
            improvement: "30.6%",
            type: "percentage"
          },
          {
            label: "Sales Conversion",
            before: "2.3%",
            after: "3.1%",
            improvement: "34.8%",
            type: "percentage"
          },
          {
            label: "Support Cost per Ticket",
            before: "$12.50",
            after: "$3.20",
            improvement: "74.4%",
            type: "currency"
          }
        ],
        additionalBenefits: [
          "24/7 customer support availability",
          "Multilingual support in 5 languages",
          "95% first-contact resolution rate",
          "60% reduction in human agent workload",
          "AI-powered upselling increased AOV by 18%"
        ]
      },
      testimonial: {
        quote: "Onesan AI completely transformed our customer service operations. What used to take our team hours now happens instantly, and our customers are happier than ever. The AI agents understand fashion better than some of our human staff!",
        author: "Sarah Chen",
        position: "Head of Customer Experience",
        company: "TechFashion Co."
      },
      technologies: ["GPT-4 Turbo", "Custom NLP Models", "Vector Databases", "Real-time Analytics", "API Integrations"],
      keyLearnings: [
        "Fashion-specific AI training significantly improves recommendation accuracy",
        "Hybrid AI-human approach works better than full automation",
        "Real-time learning from customer interactions improves performance over time",
        "Integration with existing systems requires careful data flow planning"
      ]
    },

    // Add more case studies here...
    
  };

  return studies[id] || null;
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudyData | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (id) {
      const data = getCaseStudyData(id);
      setCaseStudy(data);
    }
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate('/cases')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/cases')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Button>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-gradient-primary">{caseStudy.service}</Badge>
              <Badge variant="outline">{caseStudy.industry}</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              How We Helped{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {caseStudy.clientName}
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-4 rounded-xl">
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Clock className="w-4 h-4 mr-2" />
                  Project Duration
                </div>
                <div className="font-semibold">{caseStudy.projectDuration}</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Users className="w-4 h-4 mr-2" />
                  Team Size
                </div>
                <div className="font-semibold">{caseStudy.teamSize}</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Target className="w-4 h-4 mr-2" />
                  Focus Area
                </div>
                <div className="font-semibold">{caseStudy.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="w-8 h-8 mr-3 text-primary" />
            Client Overview
          </h2>
          <div className="glass-card p-8 rounded-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {caseStudy.clientOverview}
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Target className="w-8 h-8 mr-3 text-destructive" />
            The Challenge
          </h2>
          <div className="glass-card p-8 rounded-2xl border-l-4 border-destructive">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {caseStudy.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Brain className="w-8 h-8 mr-3 text-primary" />
            Our Solution
          </h2>
          <div className="glass-card p-8 rounded-2xl border-l-4 border-primary">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              {caseStudy.solution}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/10">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <CheckCircle2 className="w-8 h-8 mr-3 text-success" />
            Implementation Process
          </h2>

          <div className="space-y-6">
            {caseStudy.implementation.phases.map((phase, index) => (
              <Card key={index} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold">{phase.title}</h3>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center text-sm">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-success" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3 text-success" />
            The Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {caseStudy.results.metrics.map((metric, index) => (
              <Card key={index} className="glass-card p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{metric.label}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Before:</span>
                      <span>{metric.before}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">After:</span>
                      <span className="text-success font-semibold">{metric.after}</span>
                    </div>
                    <Progress
                      value={parseFloat(metric.improvement)}
                      className="h-2"
                    />
                    <div className="text-center">
                      <span className="text-success font-bold text-lg">
                        {metric.improvement} improvement
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6">Additional Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.results.additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-success" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Quote className="w-8 h-8 mr-3 text-primary" />
            Client Testimonial
          </h2>

          <Card className="glass-card p-8 border-l-4 border-primary">
            <Quote className="w-12 h-12 text-primary/30 mb-4" />
            <blockquote className="text-xl leading-relaxed text-muted-foreground mb-6 italic">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold">{caseStudy.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {caseStudy.testimonial.position} at {caseStudy.testimonial.company}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Similar Results?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can transform your business with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:glow-primary px-8 py-6 rounded-2xl">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="glass-button px-8 py-6 rounded-2xl">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;