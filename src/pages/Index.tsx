import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import apiFeatureImage from "@/assets/api-feature-illustration.jpg";
import heroGradient from "@/assets/hero-gradient.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 flex items-center relative">
        <div className="absolute inset-0 flex items-center">
          <div 
            className="w-[70%] h-[60vh] rounded-3xl"
            style={{
              backgroundImage: `url(${heroGradient})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10 flex items-center justify-between">
          <h1 className="text-4xl font-sans font-bold">
            Building AI Powered Software
          </h1>
          <Button size="pill" className="gap-2 text-lg px-12 py-6 h-auto group">
            <MoveUpRight className="h-7 w-7 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} />
            Create API Key
          </Button>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-full overflow-hidden aspect-video bg-muted h-72">
              <img 
                src={apiFeatureImage} 
                alt="AI-powered API platform with digital network visualization" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-sans font-bold mb-6">
                Powerful API for Modern Developers
              </h2>
              <p className="text-lg text-muted-foreground">
                Access crisp knowledge from the web through our powerful API. 
                Built for app developers who need reliable, real-time web data.
              </p>
            </div>
          </div>
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
