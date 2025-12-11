import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MoveUpRight, ArrowUp, Play, Pause } from "lucide-react";
import apiFeatureImage from "@/assets/run.png";
import logoWhite from "@/assets/logo_white.png";
import { useInView } from "@/hooks/use-in-view";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAllBlogPosts } from "@/data/blogs";

const Index = () => {
  const imageSection = useInView();
  const featuresSection1 = useInView();
  const featuresSection2 = useInView();
  const featuresSection3 = useInView();
  const ctaSection = useInView();
  const blogSection = useInView();
  const videoSection = useInView();

  const location = useLocation();
  const navigate = useNavigate();
  const hasScrolledRef = useRef(false);
  const heroSectionRef = useRef<HTMLElement>(null);
  const typingIndexRef = useRef(0);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [animatedCode, setAnimatedCode] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  // Get top 3 blog posts
  const blogs = getAllBlogPosts().slice(0, 3);

  const scrollToTop = () => {
    heroSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (location.hash === "#blog" && !hasScrolledRef.current) {
      hasScrolledRef.current = true;
      blogSection.ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Remove the hash from URL after scrolling
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    }
  }, [location.hash, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroSectionRef.current;
      if (!hero) {
        setShowScrollTop(false);
        return;
      }

      const rect = hero.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      setShowScrollTop(!isInView);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Animated code typing effect - loops continuously
  useEffect(() => {
    if (!videoSection.isInView) {
      setAnimatedCode("");
      typingIndexRef.current = 0;
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = null;
      }
      return;
    }

    if (isPaused) {
      // Clear any pending timeouts when paused
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = null;
      }
      return;
    }

    const fullCode = `// Example API Request

fetch('https://api.volatileengine.com/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Your prompt here',
    model: 'latest'
  })
})
.then(response => response.json())
.then(data => console.log(data));`;

    const typingSpeed = 30; // milliseconds per character
    const pauseAfterComplete = 2000; // pause 2 seconds before restarting

    const typeCode = () => {
      if (isPaused || !videoSection.isInView) {
        return;
      }
      
      if (typingIndexRef.current < fullCode.length) {
        setAnimatedCode(fullCode.slice(0, typingIndexRef.current + 1));
        typingIndexRef.current++;
        typingTimeoutRef.current = setTimeout(typeCode, typingSpeed);
      } else {
        // Code is complete, wait then restart
        typingTimeoutRef.current = setTimeout(() => {
          if (!isPaused && videoSection.isInView) {
            typingIndexRef.current = 0;
            setAnimatedCode("");
            typeCode();
          }
        }, pauseAfterComplete);
      }
    };

    // Start typing after a short delay
    typingTimeoutRef.current = setTimeout(typeCode, 500);

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = null;
      }
    };
  }, [videoSection.isInView, isPaused]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section
        ref={heroSectionRef}
        className="min-h-screen pt-32 pb-20 px-6 flex items-center relative border-b border-black overflow-hidden bg-black"
      >
        <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <div className="border border-white w-full px-10 py-14 flex flex-col items-center text-center gap-10 bg-transparent">
            <div className="space-y-6">
              <h1
                className="text-3xl text-white"
                style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 500 }}
              >
                Volatile Engine
              </h1>
              <h2
                className="text-4xl md:text-5xl text-white"
                style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}
              >
                AI-Powered Voice Customer Service
              </h2>
              <p className="text-xl text-white/90">
                Replace traditional support with intelligent AI voice assistants that interact directly with your customers
              </p>
            </div>
            <Link to="/get-started" className="inline-flex">
              <Button
                size="lg"
                className="font-bold rounded-none px-12 h-20 text-base gap-2 group border border-white"
                style={{ backgroundColor: "#f3f2ec", color: "#000000" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f3f2ec")}
              >
                Get Started
                <MoveUpRight
                  className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]"
                  strokeWidth={2.5}
                  stroke="#000000"
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section ref={featuresSection1.ref} className="pt-32 pb-60 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-16 items-start transition-all duration-700 ${featuresSection1.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Side */}
            <div>
              <h2 className="text-3xl mb-6 text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 500 }}>
                Our Mission
              </h2>
              <h3 className="text-4xl md:text-5xl text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}>
                Redefining Customer Communication with AI Voice
              </h3>
            </div>
            
            {/* Right Side */}
            <div>
              <p className="text-lg text-black mb-6 leading-relaxed">
                We are building an AI-driven voice customer service platform designed for modern businesses. Our mission is simple yet transformative: to replace traditional, slow, multi-channel customer support with a single, intelligent AI voice system that interacts directly with customers through voice and email. Operating from India, we aim to redefine how companies communicate with their customers by leveraging deep automation, clarity, and efficiency at scale.
              </p>
              <Link to="/about" className="text-xl text-black underline inline-flex items-center gap-2 group mt-8" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 500 }}>
                <span>Learn more</span>
                <MoveUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section ref={imageSection.ref} className={`px-6 transition-all duration-700 border-b border-white bg-black ${imageSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto py-36">
          <div className="grid md:grid-cols-2 gap-32 items-center">
            <div className="relative overflow-hidden bg-muted flex justify-center">
              <img
                src={logoWhite}
                alt="Volatile Engine logo"
                className="absolute bottom-16 right-6 h-20 w-64 object-contain pointer-events-none select-none"
                aria-hidden
              />
              <img
                src={apiFeatureImage}
                alt="AI-powered API platform with digital network visualization"
                className="h-[720px] w-auto object-cover"
              />
            </div>
            <div className="flex h-[720px] flex-col justify-center space-y-6">
              <h2
                className="text-3xl text-white"
                style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 500 }}
              >
                Our Solution
              </h2>
              <h3
                className="text-4xl md:text-5xl font-medium text-white"
                style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}
              >
                Voice-First AI Assistants
              </h3>
              <p className="text-lg text-white">
                AI-powered voice assistants that handle complete customer interactions—answering questions, guiding actions, resolving issues, and escalating only when needed. Instead of navigating menus or chatbots, users simply speak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 2*/}
      <section ref={featuresSection2.ref} className="py-40 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-6 text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 500 }}>
                Platform Features
              </h2>
          <h3 className="text-4xl md:text-5xl font-medium mb-20 text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}>
            Technology & Integration
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 transition-all duration-700 delay-100 ${featuresSection2.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">High-Fidelity Voice</h3>
              <p className="text-black">
                Real-time voice interactions powered by ElevenLabs Voice API, ensuring natural conversational quality and responsiveness.
              </p>
            </div>
            <div className={`p-6 transition-all duration-700 delay-300 ${featuresSection2.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">Deep Integration</h3>
              <p className="text-black">
                Securely connects with your business databases, tools, and workflows to provide accurate, context-aware responses.
              </p>
            </div>
            <div className={`p-6 transition-all duration-700 delay-500 ${featuresSection2.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">Custom Voice Agents</h3>
              <p className="text-black">
                Each assistant becomes a specialized asset—capable of understanding business logic and reducing support workloads drastically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section ref={videoSection.ref} className="py-40 px-6 border-b border-black bg-black">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-6 text-white" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 500 }}>
                Demo
              </h2>
          <h3 className="text-4xl md:text-5xl font-medium mb-12 text-white" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}>
            See It In Action
          </h3>
          <div className="bg-black border border-white p-8 rounded-none font-mono text-sm text-white overflow-hidden h-96 w-full relative">
            <pre className="whitespace-pre-wrap h-full overflow-y-auto">
              <code>
                {animatedCode}
                {videoSection.isInView && (
                  <span className="animate-pulse">|</span>
                )}
              </code>
            </pre>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-black border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 z-10"
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? (
                <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
              ) : (
                <Pause className="h-5 w-5" fill="currentColor" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-40 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-medium mb-3 text-black">Voice-First</div>
              <p className="text-xl text-black">SaaS Platform</p>
            </div>
            <div>
              <div className="text-5xl font-medium mb-3 text-black">24/7</div>
              <p className="text-xl text-black">AI Support Available</p>
            </div>
            <div>
              <div className="text-5xl font-medium mb-3 text-black">Scalable</div>
              <p className="text-xl text-black">From Startup to Enterprise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Opportunity Section */}
      <section className="py-40 px-6 border-b border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 500 }}>
            The Problem We Solve
          </h2>
          <blockquote className="text-2xl font-medium mb-6 text-black">
            "Today's customer service landscape is expensive, inconsistent, and fragmented across phone calls, forms, chats, and ticketing systems. Customers struggle to reach the right support, and businesses spend heavily on teams and tools that still fail to deliver seamless experiences."
          </blockquote>
          <p className="text-lg text-black">
            The global shift toward automation has created a massive opportunity for a unified voice-first solution that works quickly, reliably, and integrates deeply with business data.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSection.ref} className={`py-60 px-6 transition-all duration-700 border-b border-black ${ctaSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}>
            Ready to transform your customer service?
          </h2>
          <p className="text-xl text-black mb-8">
            Join businesses already using AI voice assistants to deliver exceptional customer experiences
          </p>
          <Link to="/get-started">
            <Button size="lg" className="bg-black text-white hover:bg-black/90 font-normal rounded-none px-12 h-14 text-base gap-2 group">
              Get started
              <MoveUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} stroke="#ffffff" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" ref={blogSection.ref} className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-12 text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}>
            Latest from our blog
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => {
              const delays = ['delay-100', 'delay-300', 'delay-500'];
              const delay = delays[index % delays.length];
              
              return (
                <Link 
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className={`group transition-all duration-700 ${delay} ${blogSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="aspect-video overflow-hidden bg-muted mb-4">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-black group-hover:underline">
                    {blog.title}
                  </h3>
                  <p className="text-black mb-3">
                    {blog.excerpt}
                  </p>
                  <span className="text-black text-sm">{blog.date}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full border border-black bg-background text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center group shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={2.5} />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Index;
