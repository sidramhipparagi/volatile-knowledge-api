import { Button } from "@/components/ui/button";
import { MoveUpRight, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="font-nova text-xl tracking-wider">VOLATILE ENGINE</div>
        <div className="flex items-center gap-8">
          <Button 
            size="pill" 
            className="gap-2 group relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-5 h-5">
              <MoveUpRight 
                className={`h-5 w-5 absolute transition-all duration-300 ${
                  isHovered ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
                }`}
                strokeWidth={2.5}
              />
              <ArrowRight 
                className={`h-5 w-5 absolute transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                }`}
                strokeWidth={2.5}
              />
            </div>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
