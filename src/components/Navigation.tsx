import { useEffect, useRef, useState } from "react";
import { Menu, X, Bot, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"
import AIJourneyModal from "./AIJourneyModal";
import AIDemoModal from "./AIDemoModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [overflowItems, setOverflowItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const navRef = useRef(null);
  const containerRef = useRef(null);
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);


  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    // { label: "Case Studies", href: "/cases" },
    // { label: "Testimonials", href: "/testimonials" },
    { label: "Blogs", href: "/blogs" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    // { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  // Calculate which items fit and which overflow
  const calculateOverflow = () => {
    const container = containerRef.current;
    const nav = navRef.current;
    if (!container || !nav) return;

    // Get container width minus logo space and dropdown space
    const containerWidth = container.offsetWidth;
    const logoWidth = 150; // Approximate logo width
    const dropdownWidth = 50; // Space for "More" button
    const availableWidth = containerWidth - logoWidth - dropdownWidth - 40; // Extra padding

    // Create temporary element to measure text widths
    const tempDiv = document.createElement("div");
    tempDiv.style.position = "absolute";
    tempDiv.style.visibility = "hidden";
    tempDiv.style.fontSize = "16px";
    tempDiv.style.fontWeight = "500";
    tempDiv.style.padding = "0 16px";
    document.body.appendChild(tempDiv);

    let totalWidth = 0;
    const visible = [];
    const overflow = [];

    navItems.forEach((item, index) => {
      tempDiv.textContent = item.label;
      const itemWidth = tempDiv.offsetWidth + 3; // Add padding

      if (totalWidth + itemWidth <= availableWidth || index === 0) {
        // Always show at least the first item
        visible.push(item);
        totalWidth += itemWidth;
      } else {
        overflow.push(item);
      }
    });

    document.body.removeChild(tempDiv);
    setVisibleItems(visible);
    setOverflowItems(overflow);
  };

  // Debounced resize handler
  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculateOverflow, 100);
    };

    calculateOverflow(); // Initial calculation
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-glass border-b border-glass-border/30">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to='/'>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center glow-primary">
                {/* <Bot className="w-5 h-5 text-primary-foreground" /> */}
                <img src="src/assets/logo3.png" alt="Onesane Logo" />
              </div>
              <span className="text-xl font-bold gradient-text">Onesane</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div ref={navRef} className="hidden md:flex items-center space-x-2 flex-1 justify-end" >
            {visibleItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground m-3 p-3 hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Overflow Dropdown */}
            {overflowItems.length > 0 && (
              <div className="relative group">
                <button className="flex items-center text-foreground hover:text-accent">
                  <ChevronDown className="w-5 h-5" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 glass backdrop-glass border-b border-glass-border/30 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  <div className="py-1">
                    {overflowItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-2 hover:text-accent text-medium hover:bg-transparent"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA Button (Desktop) - Removed */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-glass-border/30">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-foreground hover:text-accent font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>


      {/* Modals */}
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

    </nav>
  );
};

export default Navigation;