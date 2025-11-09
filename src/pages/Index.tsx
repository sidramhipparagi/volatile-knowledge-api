import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import apiFeatureImage from "@/assets/api-feature-illustration.jpg";
import heroGradient from "@/assets/hero-gradient.png";
import heroVideo from "@/assets/hero.mp4";
import { useInView } from "@/hooks/use-in-view";

const Index = () => {
  const imageSection = useInView();
  const featuresSection = useInView();
  const ctaSection = useInView();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 flex items-center relative border-b border-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex items-center justify-start mb-8">
            <Button size="lg" className="font-bold rounded-none px-12 h-20 text-base" style={{ backgroundColor: '#f3f2ec', color: '#000000' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f2ec'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f2ec'}>
              Create API
              <MoveUpRight className="h-5 w-5 ml-2" strokeWidth={1.5} stroke="#000000" />
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start text-left max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-6 text-white font-medium">
              Building AI Powered Software
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Transform your ideas into intelligent applications with our powerful API platform
            </p>
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section ref={imageSection.ref} className={`py-20 px-6 transition-all duration-700 border-b border-black ${imageSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              <h2 className="text-4xl font-medium mb-6 text-black">
                Powerful API for Modern Developers
              </h2>
              <p className="text-lg text-black">
                Access crisp knowledge from the web through our powerful API. 
                Built for app developers who need reliable, real-time web data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresSection.ref} className="py-20 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-medium text-center mb-16 text-black transition-all duration-700 ${featuresSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Everything you need to build
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg border border-border bg-card transition-all duration-700 delay-100 ${featuresSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">Fast & Reliable</h3>
              <p className="text-black">
                Get instant responses with 99.9% uptime. Built for production use.
              </p>
            </div>
            <div className={`p-6 rounded-lg border border-border bg-card transition-all duration-700 delay-300 ${featuresSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">Easy Integration</h3>
              <p className="text-black">
                Simple REST API that works with any programming language or framework.
              </p>
            </div>
            <div className={`p-6 rounded-lg border border-border bg-card transition-all duration-700 delay-500 ${featuresSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">AI Powered</h3>
              <p className="text-black">
                Leverage cutting-edge AI technology to power your applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSection.ref} className={`py-32 px-6 transition-all duration-700 ${ctaSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-black">
            Ready to start building?
          </h2>
          <p className="text-xl text-black mb-8">
            Join developers who are already building amazing things
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 font-normal rounded-none px-12 h-14 text-base">
            Get started
            <MoveUpRight className="h-5 w-5 ml-2" strokeWidth={1.5} stroke="#ffffff" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
