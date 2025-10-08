import { Brain, MessageCircle, Globe, TrendingUp, Palette, Search, Cog, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom"
import { Card } from "@/components/ui/card";


const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Strategic roadmaps for AI integration and digital transformation tailored to your business goals.",
    features: ["AI Readiness Assessment", "Implementation Strategy", "ROI Optimization"]
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Telegram AI Agents",
    description: "Intelligent conversational agents that handle customer support, sales, and engagement 24/7.",
    features: ["Natural Language Processing", "Multi-language Support", "Integration APIs"]
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation solutions that reduce costs and increase efficiency.",
    features: ["Workflow Optimization", "Data Processing", "Smart Integrations"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and applications built with cutting-edge technologies.",
    features: ["React & Next.js", "Cloud Deployment", "Performance Optimization"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven insights and predictive analytics to fuel strategic decision making.",
    features: ["Real-time Dashboards", "Predictive Modeling", "Custom Reports"]
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Compelling brand identities and user experiences that resonate with your target audience.",
    features: ["Brand Strategy", "UI/UX Design", "Visual Identity"]
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility and drive qualified traffic.",
    features: ["Technical SEO", "Content Strategy", "Performance Tracking"]
  },
  {
    icon: TrendingUp,
    title: "Growth Optimization",
    description: "Systematic approach to scaling your business through technology and process improvements.",
    features: ["Conversion Optimization", "A/B Testing", "Growth Analytics"]
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-6">
            <Cog className="w-4 h-4 text-accent" />
            <span className="gradient-text-accent font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Comprehensive AI</span>
            <br />
            <span className="text-foreground">& Business Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to implementation, we provide end-to-end solutions that transform
            how your business operates and connects with customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="glass-card hover-lift group cursor-pointer h-full"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-primary">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 hidden">
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our AI solutions can drive growth and efficiency for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to='/contact' className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 glow-primary">
                Schedule Consultation
              </Link>
              <Link to='/cases' className="glass border border-accent/50 text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300">
                View Case Studies
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;