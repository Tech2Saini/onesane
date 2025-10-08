import { Bot, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import logo from '../assets/logo3.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 border-t border-glass-border/30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center glow-primary">
                {/* <Bot className="w-5 h-5 text-primary-foreground" /> */}
                <img src={logo} alt="Onesane Logo" />
              </div>
              <span className="text-xl font-bold gradient-text">Onesane</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses with cutting-edge AI solutions, automation, and strategic consulting. 
              Your partner in digital innovation.
            </p>
            <div className="flex gap-4">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground glow-primary" style={{ display: "none" }}>
                Start AI Journey
                </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">Services</h3>
            <ul className="space-y-3">
              {[
                "AI Strategy & Consulting",
                "WhatsApp AI Agents",
                "Process Automation",
                "Web Development",
                "Analytics & Insights",
                "SEO & Marketing"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span><a href="mailto:contactus@onesane.in">contactus@onesane.in</a></span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span><a href="tel:+919315148848">+91 9315148848</a></span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest insights on AI trends and business automation.
            </p>
            <div className="space-y-3">
              <Input  disabled
                placeholder="Enter your email" 
                className="glass border-glass-border/50 focus:border-accent transition-colors"
              />
              <Button disabled className="w-full bg-gradient-primary text-primary-foreground glow-primary">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Onesane. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-muted-foreground hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;