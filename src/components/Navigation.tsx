import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="font-nova text-xl tracking-wider">VOLATILE ENGINE</div>
        <div className="flex items-center gap-8">
          <Button size="pill" className="gap-2 group">
            <MoveUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:translate-y-[-2px]" strokeWidth={3} />
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
