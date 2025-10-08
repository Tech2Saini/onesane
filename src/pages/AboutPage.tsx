import { Bot, Users, Target, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumawat",
      role: "App Developer",
      image: "src/assets/rajesh.jpg",
      bio: "3 years in tech strategy and AI implementation"
    },
    {
      name: "Shubham Sharma",
      role: "CTO & Automation Expert",
      image: "src/assets/shubham.jpg",
      bio: "Former AWS/S3 engineer specializing in automatio"
    },
    {
      name: "Shubham Singh Yadav",
      role: "Lead Developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4yJvLAJtXjg8MYgVhvq60Doh_IuKVSmP8A&s",
      bio: "Full-stack expert with 4+ years experience"
    },
    {
      name: "Vaibhav Raj",
      role: "Analytics Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Data scientist with expertise in business intelligence"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay ahead of the curve, leveraging cutting-edge AI technologies to solve complex business challenges."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our mission. We build lasting partnerships through exceptional service and results."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver premium solutions with meticulous attention to detail and unwavering quality standards."
    }
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-glass border border-glass-border rounded-full px-6 py-3 mb-6 glow-subtle">
              <Bot className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">About Onesane</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              Pioneering the Future of
              <span className="block text-accent">Business Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're a team of visionaries, technologists, and strategists dedicated to transforming businesses through AI-powered solutions and cutting-edge automation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2020, Onesane emerged from a simple belief: every business deserves access to enterprise-level AI solutions. We started as a small team of AI enthusiasts and have grown into a trusted partner for companies worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we've helped over 500+ businesses automate their processes, implement intelligent chatbots, and harness the power of data analytics to drive unprecedented growth.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-primary/20 backdrop-blur-sm border border-glass-border overflow-hidden glow-primary">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Our team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass border border-glass-border rounded-2xl p-8 hover:glow-primary transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 glow-primary">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The brilliant minds behind Onesane's innovative solutions and exceptional service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass border border-glass-border rounded-2xl p-6 text-center hover:glow-subtle transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-accent">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass border border-glass-border rounded-3xl p-12 glow-subtle">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our AI solutions can drive your company's growth and efficiency.
            </p>
            <Button className="bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 glow-primary group">
              <Link to="/contact">Get Started Today</Link>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;