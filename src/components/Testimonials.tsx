import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ishank Jain",
    role: "Co-founder & Director",
    company: "Optimiseres",
    content: "Onesane delivers smart, reliable, and innovative solutions. Optimiseres is impressed by their professionalism and commitment to client success.",
    rating: 5,
    image: "https://optimiseres.com/static/images/team/ishank.PNG "
  },
  {
    name: "Kunal Saini",
    role: "Co-founder & Director",
    company: "Verlux Stands",
    content: "Working with Onesane was an excellent experience. They delivered a professional, fully optimized website with great attention to detail, smooth communication, and timely delivery.",
    rating: 5,
    image: "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/494088693_2239140036489206_2754748894115403650_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=RK4NJGqrqa4Q7kNvwGrCtk7&_nc_oc=AdlmTLJVO606CcfYQAInr7Nfet8CcNnPdujOJ2sMMnVC3i4r-NOgSHQNxBHvO2OXpuY&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=M6yaF6k9k_a91iL-CKntZQ&oh=00_AffDfqOgfnHpgFJvqHR13WypITL26eaDJmnrk2Rj6kxMxw&oe=68EC37EF"
  },
  {
    name: "Aniket Singh",
    role: "Co-founder",
    company: "Horizon Co&So",
    content: "Onesane delivered our website with excellence – professional design, smooth functionality, and timely execution. A reliable partner for end-to-end development and digital solutions.",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRdnT0PAL_AIpCmIrbm_txzYO0sfBuvAxWg&s"
  }
];

const Testimonials = () => {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="gradient-text-accent font-medium">Client Success</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Trusted by</span>
            <br />
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses like yours are achieving remarkable results with our AI solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card hover-lift h-full">
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-glass-border/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="my-12 glass-card p-8 hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">AI Interactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;