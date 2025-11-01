import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-nova mb-12">
            Building AI Powered Software
          </h1>
          <Button size="pill" className="gap-2 text-lg px-12 py-6 h-auto">
            <MoveUpRight className="h-5 w-5" />
            Create API Key
          </Button>
        </div>
      </section>

      {/* Features Section - Empty placeholder */}
      <section className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Content will be added here */}
        </div>
      </section>

      {/* Additional Section - Empty placeholder */}
      <section className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Content will be added here */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
