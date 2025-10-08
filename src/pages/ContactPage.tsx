import Footer from "@/components/Footer";
import { Bot, Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useRef, useContext } from "react";
import authContact from "@/Contexts/AuthContact";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contactus@onesane.in",
      description: "Drop us a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9315148848",
      description: "Mon-Sat from 8am to 7pm"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 1 hours",
      description: "We're lightning fast"
    }
  ];

  const services = [
    "AI Strategy Consulting",
    "WhatsApp/Telegram Bots",
    "Process Automation",
    "Web Development",
    "Data Analytics",
    "Digital Marketing & SEO",
    "Brand Development",
    "Other"
  ];

  const [contactFields, setContactFields] = useState({ firstName: "", lastName: "", email: "", message: "", service: "", company: "" });
  const [submitRef, setSubmitRef] = useState(false);
  const { saveContact } = useContext(authContact);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitRef(true);
    // Handle form submission
    const response = await saveContact(contactFields);

    if (response.success) {
      toast({ title: "Your message has been sent", description: response.message, variant: "default" });
      setContactFields({ firstName: "", lastName: "", email: "", message: "", service: "", company: "" });
    } else {
      toast({ title: "Failed to save contact", description: response.message, variant: "destructive" });
    }
    setSubmitRef(false);
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-glass border border-glass-border rounded-full px-6 py-3 mb-6 glow-subtle">
              <MessageSquare className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Let's Connect</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              Ready to Start Your
              <span className="block text-accent">AI Journey?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get in touch with our team of experts. We're here to answer your questions and help you transform your business with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass border border-glass-border rounded-2xl p-6 text-center hover:glow-primary transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 glow-primary">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{info.title}</h3>
                <p className="text-accent font-medium mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="glass border border-glass-border rounded-3xl p-8 glow-subtle">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 gradient-text">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={contactFields.firstName}
                      onChange={(e) => setContactFields({ ...contactFields, firstName: e.target.value })}
                      className="bg-glass border-glass-border focus:border-accent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={contactFields.lastName}
                      onChange={(e) => setContactFields({ ...contactFields, lastName: e.target.value })}
                      className="bg-glass border-glass-border focus:border-accent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={contactFields.email}
                    onChange={(e) => setContactFields({ ...contactFields, email: e.target.value })}
                    className="bg-glass border-glass-border focus:border-accent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    value={contactFields.company}
                    onChange={(e) => setContactFields({ ...contactFields, company: e.target.value })}
                    className="bg-glass border-glass-border focus:border-accent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select onValueChange={(value) => setContactFields({ ...contactFields, service: value })} required>
                    <SelectTrigger className="bg-glass border-glass-border focus:border-accent">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, goals, and how we can help..."
                    rows={5}
                    value={contactFields.message}
                    onChange={(e) => setContactFields({ ...contactFields, message: e.target.value })}
                    className="bg-glass border-glass-border focus:border-accent resize-none"
                    required
                  />
                </div>

                <Button className="w-full bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 glow-primary group">
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  {submitRef ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Info & FAQ */}
            <div className="space-y-8">
              <div className="glass border border-glass-border rounded-2xl p-8" style={{ display: "none" }}>
                <h3 className="text-2xl font-bold mb-6 gradient-text">Why Choose Onesane?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Expert Team</p>
                      <p className="text-sm text-muted-foreground">5+ years of combined experience in AI and automation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Proven Results</p>
                      <p className="text-sm text-muted-foreground">500+ successful projects with 98% client satisfaction</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">24/7 Support</p>
                      <p className="text-sm text-muted-foreground">Ongoing support and maintenance for all projects</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Custom Solutions</p>
                      <p className="text-sm text-muted-foreground">Tailored AI strategies for your specific business needs</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass border border-glass-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Quick Answers</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground mb-2">How quickly can you start?</p>
                    <p className="text-sm text-muted-foreground">Most projects can begin within first week after initial consultation.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-2">Do you offer custom development?</p>
                    <p className="text-sm text-muted-foreground">Yes, we specialize in custom AI solutions tailored to your business.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-2">What's included in ongoing support?</p>
                    <p className="text-sm text-muted-foreground">Updates, monitoring, optimization, and technical assistance.</p>
                  </div>
                </div>
              </div>

              <div className="glass border border-glass-border rounded-2xl p-8 text-center" style={{ display: "none" }}>
                <Bot className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Prefer to Chat?</h3>
                <p className="text-muted-foreground mb-4">
                  Try our AI assistant for instant answers to common questions.
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Start AI Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;