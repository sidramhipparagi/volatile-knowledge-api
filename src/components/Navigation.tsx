import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import veLogo from "@/assets/vE_logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-black">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <img src={veLogo} alt="Volatile Engine Logo" className="h-8 w-auto" />
        <div className="flex items-center gap-8 h-full">
          <Button size="pill" className="gap-2 group rounded-none h-full px-8">
            <MoveUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} />
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
