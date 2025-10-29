import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight">
          Volatile Engine
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Access crisp knowledge from the web through our powerful API.
          Built for app developers who need reliable, real-time data.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg" className="group">
            Get API Key
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};
