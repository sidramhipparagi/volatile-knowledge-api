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
            className="w-[70%] h-[75vh] rounded-xl ml-32 mt-32"
            style={{
              backgroundImage: `url(${heroGradient})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex items-start justify-end mb-8 mt-32">
            <div className="flex items-center gap-2 font-bold text-black">
              <span className="text-lg">Create API Key</span>
              <MoveUpRight className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </div>
          <div className="w-[70%] flex items-center justify-center ml-32">
            <h1 className="text-4xl font-sans font-bold text-white">
              Building AI Powered Software
            </h1>
          </div>
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
