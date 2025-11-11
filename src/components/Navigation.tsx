import { Button } from "@/components/ui/button";
import { MoveUpRight, Plus, Minus } from "lucide-react";
import veLogo from "@/assets/vE_logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface HeroContent {
  title: string;
  description: string;
}

const heroContents: Record<string, HeroContent> = {
  pricing: {
    title: "Simple, Transparent Pricing",
    description: "Choose the plan that fits your needs. All plans include our core features."
  },
  doc: {
    title: "Documentation",
    description: "Everything you need to integrate and build with our API platform"
  },
  newsroom: {
    title: "Newsroom",
    description: "Insights, updates, and best practices from our team"
  },
  about: {
    title: "About",
    description: "Learn more about our mission and the team building Volatile Engine."
  }
};

const NavButton = ({ 
  label, 
  to, 
  onHover 
}: { 
  label: string; 
  to: string; 
  onHover: (content: HeroContent | null) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const pageKey = to.replace('/', '');

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (heroContents[pageKey]) {
      onHover(heroContents[pageKey]);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(null);
  };

  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-4 py-2 text-base font-normal transition-all relative z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
      {isHovered ? (
        <Minus className="h-4 w-4" strokeWidth={2} />
      ) : (
        <Plus className="h-4 w-4" strokeWidth={2} />
      )}
    </Link>
  );
};

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredContent, setHoveredContent] = useState<HeroContent | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show nav at top of page
          if (currentScrollY < 10) {
            setIsVisible(true);
          } 
          // Hide when scrolling down, show when scrolling up
          else if (currentScrollY > lastScrollY) {
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show nav when cursor moves to top 100px of viewport
      if (e.clientY <= 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${hoveredContent ? "bg-black border-b border-white" : "bg-background border-b border-black"}`}
      >
        <div className="w-full h-[79px] flex items-center">
          <div className={`flex items-center justify-start h-full pl-16 pr-12 min-w-[180px] ${
            hoveredContent ? "border-r border-white" : "border-r border-black"
          }`}>
            <Link to="/">
              <img 
                src={veLogo} 
                alt="Volatile Engine Logo - Home" 
                className={`h-12 w-auto cursor-pointer hover:opacity-80 transition-all duration-300 ${
                  hoveredContent ? "brightness-0 invert" : ""
                }`}
              />
            </Link>
          </div>
          <div className={`max-w-7xl mx-auto px-6 flex-1 flex items-center justify-center gap-8 ${
            hoveredContent ? "text-white" : "text-black"
          }`}>
            <NavButton label="Pricing" to="/pricing" onHover={setHoveredContent} />
            <NavButton label="Doc" to="/doc" onHover={setHoveredContent} />
            <NavButton label="Newsroom" to="/newsroom" onHover={setHoveredContent} />
            <NavButton label="About" to="/about" onHover={setHoveredContent} />
          </div>
          <div className={`flex items-center h-full ${
            hoveredContent ? "border-l border-white" : "border-l border-black"
          }`}>
            <Link to="/get-started" className="h-full">
              <Button size="pill" className="gap-2 group rounded-none h-full px-8 bg-black text-white hover:bg-black/90 whitespace-nowrap">
                <MoveUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} />
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Preview Section */}
      <div 
        className={`fixed top-[79px] left-0 right-0 z-40 bg-black border-b border-white transition-all duration-300 ease-in-out ${
          hoveredContent 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ height: hoveredContent ? "60vh" : "0" }}
      >
        <section className="min-h-[60vh] px-6 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-start justify-start text-left max-w-4xl">
              <h1 className="text-5xl md:text-6xl mb-6 text-white font-medium">
                {hoveredContent?.title}
              </h1>
              <p className="text-xl text-white max-w-2xl">
                {hoveredContent?.description}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
