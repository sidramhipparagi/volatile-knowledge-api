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
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-center mb-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-12 h-14 text-base">
              Create API
              <MoveUpRight className="h-5 w-5 ml-2" strokeWidth={1.5} />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-sans font-bold mb-6">
              Building AI Powered Software
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Transform your ideas into intelligent applications with our powerful API platform
            </p>
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

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-sans font-bold text-center mb-16">
            Everything you need to build
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="text-xl font-bold mb-3">Fast & Reliable</h3>
              <p className="text-muted-foreground">
                Get instant responses with 99.9% uptime. Built for production use.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="text-xl font-bold mb-3">Easy Integration</h3>
              <p className="text-muted-foreground">
                Simple REST API that works with any programming language or framework.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="text-xl font-bold mb-3">AI Powered</h3>
              <p className="text-muted-foreground">
                Leverage cutting-edge AI technology to power your applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">
            Ready to start building?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join developers who are already building amazing things
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-12 h-14 text-base">
            Get started
            <MoveUpRight className="h-5 w-5 ml-2" strokeWidth={1.5} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
