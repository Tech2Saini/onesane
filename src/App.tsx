import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Newsletter from "./pages/Newsletter";
import Resources from "./pages/Resources";
import CookiePolicy from "./pages/CookiePolicy";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogProvider from "@/Contexts/BlogProvider";
import ContactProvider from "@/Contexts/ContactProvider";
import AuthProvider from '@/Contexts/AuthProvider'; // ✅ Correct path
import BlogPost from "@/pages/SingleBlog";
import ScrollTop from "./components/ScrollTop";
const queryClient = new QueryClient();
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";



const App = () => (

  <GoogleReCaptchaProvider reCaptchaKey="6LcovOgrAAAAAKVtEz-WK8OLpxCruGR2aWgFKVVY">


  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BlogProvider>
        <ContactProvider>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Navigation />
              <ScrollTop>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  {/* <Route path="/cases" element={<CaseStudies />} /> */}
                  {/* <Route path="/case-study/:id" element={<CaseStudyDetail />} /> */}
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  {/* <Route path="/newsletter" element={<Newsletter />} /> */}
                  {/* <Route path="/resources" element={<Resources />} /> */}
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/pricing" element={<Pricing />} />
                  {/* <Route path="/testimonials" element={<Testimonials />} /> */}
                  <Route path="/blogs" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  {/* <Route path="/faq" element={<FAQ />} /> */}
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ScrollTop>
              <Footer />
            </BrowserRouter>
          </AuthProvider>
        </ContactProvider>
      </BlogProvider>
    </TooltipProvider>
  </QueryClientProvider>
  </GoogleReCaptchaProvider>
);

export default App;
