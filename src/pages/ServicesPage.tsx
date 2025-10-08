import { Brain, MessageCircle, Globe, TrendingUp, Palette, Search, Cog, BarChart3, ArrowLeft, ExternalLink, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import React, { useState } from 'react';


// {
//     id: "ai-strategy",
//     icon: Brain,
//     title: "AI Strategy & Consulting",
//     description: "Strategic roadmaps for AI integration and digital transformation tailored to your business goals.",
//     features: ["AI Readiness Assessment", "Implementation Strategy", "ROI Optimization"],
//     detailedDescription: "Transform your business with our comprehensive AI strategy consulting. We analyze your current operations, identify AI opportunities, and create a roadmap for successful implementation that delivers measurable ROI.",
//     demoWork: [
//       {
//         title: "Manufacturing Efficiency AI",
//         description: "Implemented predictive maintenance system reducing downtime by 40%",
//         metrics: "40% downtime reduction, $2M annual savings",
//         image: "🏭"
//       },
//       {
//         title: "Retail Intelligence Platform",
//         description: "AI-powered inventory optimization and demand forecasting",
//         metrics: "25% inventory cost reduction, 95% forecast accuracy",
//         image: "🛒"
//       },
//       {
//         title: "Healthcare AI Assessment",
//         description: "Complete AI readiness evaluation for medical practice",
//         metrics: "6-month implementation roadmap, 30% efficiency gain",
//         image: "🏥"
//       }
//     ]
//   }

const servicesData = [
  {
    id: "ai-strategy",
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Strategic roadmaps for AI integration and digital transformation tailored to your business goals.",
    features: ["AI Readiness Assessment", "Implementation Strategy", "ROI Optimization"],
    detailedDescription: "Transform your business with our comprehensive AI strategy consulting. We analyze your current operations, identify AI opportunities, and create a roadmap for successful implementation that delivers measurable ROI.",
    demoWork: [
      {
        title: "Manufacturing Efficiency AI",
        description: "Implemented predictive maintenance system reducing downtime by 40%",
        metrics: "40% downtime reduction, $2M annual savings",
        image: "🏭"
      },
      {
        title: "Retail Intelligence Platform",
        description: "AI-powered inventory optimization and demand forecasting",
        metrics: "25% inventory cost reduction, 95% forecast accuracy",
        image: "🛒"
      },
      {
        title: "Healthcare AI Assessment",
        description: "Complete AI readiness evaluation for medical practice",
        metrics: "6-month implementation roadmap, 30% efficiency gain",
        image: "🏥"
      }
    ]
  },
  {
    id: "ai-agents",
    icon: MessageCircle,
    title: "WhatsApp & Telegram AI Agents",
    description: "Intelligent conversational agents that handle customer support, sales, and engagement 24/7.",
    features: ["Natural Language Processing", "Multi-language Support", "Integration APIs"],
    detailedDescription: "Deploy intelligent AI agents on WhatsApp and Telegram that understand context, handle complex queries, and provide personalized responses. Our agents integrate seamlessly with your existing systems.",
    demoWork: [
      {
        title: "E-commerce Support Bot",
        description: "24/7 customer service handling orders, returns, and inquiries",
        metrics: "85% query resolution, 60% support cost reduction",
        image: "🛍️"
      },
      {
        title: "Real Estate Assistant",
        description: "Property inquiry bot with scheduling and lead qualification",
        metrics: "300% lead increase, 90% qualification accuracy",
        image: "🏠"
      },
      {
        title: "Restaurant Booking Bot",
        description: "Multi-language reservation system with menu recommendations",
        metrics: "50% booking increase, 8 languages supported",
        image: "🍽️"
      }
    ]
  },
  {
    id: "automation",
    icon: Cog,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation solutions that reduce costs and increase efficiency.",
    features: ["Workflow Optimization", "Data Processing", "Smart Integrations"],
    detailedDescription: "Automate repetitive tasks and complex workflows with our intelligent automation solutions. We design systems that learn and adapt, ensuring maximum efficiency and minimal manual intervention.",
    demoWork: [
      {
        title: "Invoice Processing System",
        description: "Automated invoice extraction, validation, and processing",
        metrics: "95% accuracy, 80% time savings",
        image: "📄"
      },
      {
        title: "HR Onboarding Automation",
        description: "Complete employee onboarding workflow automation",
        metrics: "90% faster onboarding, 100% compliance",
        image: "👥"
      },
      {
        title: "Marketing Campaign Automation",
        description: "Multi-channel campaign management and optimization",
        metrics: "200% campaign efficiency, 45% cost reduction",
        image: "📈"
      }
    ]
  },
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and applications built with cutting-edge technologies.",
    features: ["React & Next.js", "Cloud Deployment", "Performance Optimization"],
    detailedDescription: "Build lightning-fast, scalable web applications using the latest technologies. Our development approach focuses on performance, user experience, and maintainability.",
    demoWork: [
      {
        title: "SaaS Platform Dashboard",
        description: "Real-time analytics dashboard with advanced visualizations",
        metrics: "98% uptime, 2s load time, 10K+ users",
        image: "💻"
      },
      {
        title: "E-learning Platform",
        description: "Interactive course platform with video streaming",
        metrics: "500K+ students, 99% satisfaction rate",
        image: "🎓"
      },
      {
        title: "Fintech Mobile App",
        description: "Secure financial management application",
        metrics: "Bank-grade security, 1M+ transactions",
        image: "💳"
      }
    ]
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven insights and predictive analytics to fuel strategic decision making.",
    features: ["Real-time Dashboards", "Predictive Modeling", "Custom Reports"],
    detailedDescription: "Transform raw data into actionable insights with our advanced analytics solutions. We build custom dashboards and predictive models that help you make informed decisions.",
    demoWork: [
      {
        title: "Sales Forecasting Model",
        description: "ML-powered sales prediction with 95% accuracy",
        metrics: "95% forecast accuracy, 30% revenue increase",
        image: "📊"
      },
      {
        title: "Customer Behavior Analytics",
        description: "Comprehensive user journey and conversion analysis",
        metrics: "40% conversion improvement, 25% churn reduction",
        image: "👤"
      },
      {
        title: "Supply Chain Dashboard",
        description: "Real-time logistics and inventory monitoring",
        metrics: "Real-time tracking, 20% cost optimization",
        image: "🚚"
      }
    ]
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding & Design",
    description: "Compelling brand identities and user experiences that resonate with your target audience.",
    features: ["Brand Strategy", "UI/UX Design", "Visual Identity"],
    detailedDescription: "Create memorable brand experiences that connect with your audience. Our design process combines strategic thinking with creative execution to build brands that stand out.",
    demoWork: [
      {
        title: "Tech Startup Rebrand",
        description: "Complete brand identity and digital presence redesign",
        metrics: "300% brand recognition, 150% engagement",
        image: "🎨"
      },
      {
        title: "Mobile App UI/UX",
        description: "User-centered design for fitness tracking app",
        metrics: "4.8★ app rating, 80% user retention",
        image: "📱"
      },
      {
        title: "Enterprise Design System",
        description: "Scalable design system for multi-product company",
        metrics: "60% faster design process, unified UX",
        image: "🎯"
      }
    ]
  },
  {
    id: "seo-marketing",
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility and drive qualified traffic.",
    features: ["Technical SEO", "Content Strategy", "Performance Tracking"],
    detailedDescription: "Boost your online presence with comprehensive SEO and digital marketing strategies. We focus on sustainable growth through technical optimization and content excellence.",
    demoWork: [
      {
        title: "SaaS SEO Campaign",
        description: "Complete technical SEO overhaul and content strategy",
        metrics: "400% organic traffic, 250% lead generation",
        image: "🔍"
      },
      {
        title: "Local Business Marketing",
        description: "Multi-channel local marketing campaign",
        metrics: "300% local visibility, 180% customer acquisition",
        image: "📍"
      },
      {
        title: "E-commerce Growth",
        description: "SEO and PPC optimization for online store",
        metrics: "500% ROI, 60% conversion rate increase",
        image: "🛒"
      }
    ]
  },
  {
    id: "growth-optimization",
    icon: TrendingUp,
    title: "Growth Optimization",
    description: "Systematic approach to scaling your business through technology and process improvements.",
    features: ["Conversion Optimization", "A/B Testing", "Growth Analytics"],
    detailedDescription: "Scale your business systematically with data-driven growth strategies. We optimize every aspect of your customer journey to maximize conversions and revenue.",
    demoWork: [
      {
        title: "SaaS Conversion Optimization",
        description: "Complete funnel optimization and user experience enhancement",
        metrics: "300% trial conversions, 45% revenue increase",
        image: "📈"
      },
      {
        title: "E-commerce Growth Stack",
        description: "Integrated growth tools and automation platform",
        metrics: "250% customer lifetime value, 40% retention",
        image: "🚀"
      },
      {
        title: "Marketplace Optimization",
        description: "Multi-sided platform growth and engagement optimization",
        metrics: "400% GMV growth, 85% user retention",
        image: "🏪"
      }
    ]
  }
];

const categories = ['All', 'AI Strategy & Consulting', 'WhatsApp & Telegram AI Agents', 'Process Automation', 'Web Development', 'Analytics & Insights', 'Branding & Design','SEO & Digital Marketing','Growth Optimization'];


const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen">

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-6">
              <Cog className="w-4 h-4 text-accent" />
              <span className="gradient-text-accent font-medium">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Comprehensive AI</span>
              <br />
              <span className="text-foreground">& Business Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Explore our complete portfolio of services with detailed case studies and proven results.
              Each solution is crafted to drive measurable growth and transformation.
            </p>
          </div>
        </div>
      </section>


      {/* Category */}
      <div className="pt-6 sticky top-10 bg-[#0a0d12] z-10">
        <div className="container mx-auto px-4">
          <div className="flex p-2 flex-nowrap justify-start overflow-auto gap-4 mb-12" id="service-categories">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category);
                  if (category !== 'All') {
                    const element = document.getElementById(category.toLowerCase().replace(/\s+/g, '_').replace(/ /g, '-'));
                    if (element) {
                      const yOffset = -140; // Adjust this value to match your sticky header height
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }
                  else{
                    window.scrollTo({ top:0, behavior: 'smooth'});
                  }
                }}
                className={selectedCategory === category ? "neon-glow" : "hover:neon-glow"}
              >
                {/* {category} */}
                {category.toLowerCase().replace(/\s+/g, '_').replace(/ /g, '-')}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.id} id={categories[index+1].replace(/\s+/g, '_').toLowerCase()} className="glass-card rounded-2xl p-8 hover-lift">
                  {/* Service Header */}
                  <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    <div className="lg:w-1/2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-[70px] h-[70px] bg-gradient-primary rounded-2xl flex items-center justify-center glow-primary">
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold gradient-text">{service.title}</h2>
                          <p className="text-muted-foreground mt-1">{service.description}</p>
                        </div>
                      </div>

                      <p className="text-foreground text-lg leading-relaxed mb-6">
                        {service.detailedDescription}
                      </p>

                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-accent">Key Features:</h3>
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full glow-accent" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-1/2 lg:ml-auto">
                      <div className="glass rounded-xl h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4 animate-float">
                            <Icon className="w-40 h-40 text-accent mx-auto" />
                          </div>
                          {/* <Button className="bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 glow-primary">
                            <Play className="w-4 h-4 mr-2" />
                            Watch Demo
                          </Button> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Demo Work
                  <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                      <span className="gradient-text">Featured Work</span>
                      <div className="h-px bg-gradient-primary flex-1" />
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                      {service.demoWork.map((work, workIndex) => (
                        <Card key={workIndex} className="glass-card hover-lift group cursor-pointer">
                          <div className="text-center mb-4">
                            <div className="text-4xl mb-3">{work.image}</div>
                            <h4 className="text-lg font-semibold group-hover:gradient-text transition-all duration-300">
                              {work.title}
                            </h4>
                          </div>

                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {work.description}
                          </p>

                          <div className="glass rounded-lg p-3 mb-4">
                            <p className="text-sm font-medium text-accent">{work.metrics}</p>
                          </div>

                          <Button
                            variant="ghost"
                            className="w-full text-accent hover:bg-accent/10 hover:text-accent group"
                          >
                            View Case Study
                            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-6 hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our proven solutions can drive growth and efficiency for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary text-primary-foreground px-8 py-4 text-lg hover:scale-105 transition-all duration-300 glow-primary">
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                className="glass border-accent/50 text-accent px-8 py-4 text-lg hover:bg-accent/10 transition-all duration-300"
              >
                Download Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;