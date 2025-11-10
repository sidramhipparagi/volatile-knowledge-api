import { Button } from "@/components/ui/button";
import { MoveUpRight, Plus, Minus } from "lucide-react";
import veLogo from "@/assets/vE_logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavButton = ({ label, to }: { label: string; to: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-4 py-2 text-base text-black font-normal transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-black transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="w-full h-[79px] flex items-center">
        <div className="flex items-center justify-start h-full pl-12 pr-12 border-r border-black min-w-[180px]">
          <Link to="/">
            <img src={veLogo} alt="Volatile Engine Logo - Home" className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex-1 flex items-center justify-center gap-8">
          <NavButton label="Pricing" to="/pricing" />
          <NavButton label="Doc" to="/doc" />
          <NavButton label="Contact" to="/" />
        </div>
        <div className="flex items-center h-full border-l border-black">
          <Link to="/get-started" className="h-full">
            <Button size="pill" className="gap-2 group rounded-none h-full px-8 bg-black text-white hover:bg-black/90 whitespace-nowrap">
              <MoveUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} />
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
