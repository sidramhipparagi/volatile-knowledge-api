import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import veLogo from "@/assets/vE_logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-black">
      <div className="w-full h-[79px] flex items-center">
        <div className="flex items-center justify-start h-full pl-12 pr-12 border-r border-black w-[180px]">
          <img src={veLogo} alt="Volatile Engine Logo" className="h-12 w-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-6 flex-1 flex items-center">
        </div>
        <div className="flex items-center h-full">
          <Button size="pill" className="gap-2 group rounded-none h-full px-12 bg-black text-white hover:bg-black/90 w-[180px]">
            <MoveUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} />
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
