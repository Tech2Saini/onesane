import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Services />
        <Testimonials />
      </main>
    </div>
  );
};

export default Index;
