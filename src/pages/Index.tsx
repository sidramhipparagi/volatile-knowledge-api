import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MoveUpRight, ArrowUp, Play, Pause } from "lucide-react";
import apiFeatureImage from "@/assets/run.png";
import logoWhite from "@/assets/logo_white.png";
import heroGradient from "@/assets/hero-gradient.png";
import heroVideo from "@/assets/hero.mp4";
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
      <section ref={heroSectionRef} className="min-h-screen pt-32 pb-20 px-6 flex items-center relative border-b border-black overflow-hidden">
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
            <Link to="/get-started">
              <Button size="lg" className="font-bold rounded-none px-12 h-20 text-base gap-2 group" style={{ backgroundColor: '#f3f2ec', color: '#000000' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f2ec'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f2ec'}>
                Create API
                <MoveUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} stroke="#000000" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-start justify-start text-left max-w-4xl">
          <h1 className="text-3xl mb-6 text-white" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 500 }}>
                Volatile Engine
              </h1>
            <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}>
              Building AI Powered Software
            </h2>
            <p className="text-xl text-white/90 max-w-2xl">
              Transform your ideas into intelligent applications with our powerful API platform
            </p>
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
                Best web knowledge for all AI powered apps
              </h3>
            </div>
            
            {/* Right Side */}
            <div>
              <p className="text-lg text-black mb-6 leading-relaxed">
                We are building a reliable web knowledge API that developers love. Our focus is simple: performance, clarity, and developer experience. We provide access to crisp knowledge from the web through our powerful API, built for app developers who need reliable, real-time web data. Our platform enables AI-powered applications to access the most up-to-date information from across the web, ensuring your applications stay current and accurate.
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
            <div className="flex h-[720px] flex-col justify-center">
            <h2 className="text-3xl mb-6 text-white" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 500 }}>
                Think Different
              </h2>
              <h3 className="text-4xl md:text-5xl font-medium mb-6 text-white" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}>
                Be Volatile While You Build
              </h3>
              <p className="text-lg text-white">
                Access crisp knowledge from the web through our powerful API. 
                Built for app developers who need reliable, ever changing real-time web data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 2*/}
      <section ref={featuresSection2.ref} className="py-40 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-6 text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 500 }}>
                API Features
              </h2>
          <h3 className="text-4xl md:text-5xl font-medium mb-20 text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}>
            Everything you need to build
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 transition-all duration-700 delay-100 ${featuresSection2.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">Fast & Reliable</h3>
              <p className="text-black">
                Get instant responses with 99.9% uptime. Built for production use.
              </p>
            </div>
            <div className={`p-6 transition-all duration-700 delay-300 ${featuresSection2.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">Easy Integration</h3>
              <p className="text-black">
                Simple REST API that works with any programming language or framework.
              </p>
            </div>
            <div className={`p-6 transition-all duration-700 delay-500 ${featuresSection2.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">AI Powered</h3>
              <p className="text-black">
                Leverage cutting-edge AI technology to power your applications.
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
              <div className="text-5xl font-medium mb-3 text-black">99.9%</div>
              <p className="text-xl text-black">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-5xl font-medium mb-3 text-black">10M+</div>
              <p className="text-xl text-black">API Calls Daily</p>
            </div>
            <div>
              <div className="text-5xl font-medium mb-3 text-black">50ms</div>
              <p className="text-xl text-black">Average Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-40 px-6 border-b border-black">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl font-medium mb-6 text-black">
            "Volatile Engine's API transformed how we build AI features. The integration was seamless and the performance is outstanding."
          </blockquote>
          <div className="text-black">
            <p className="font-medium">Sarah Chen</p>
            <p>CTO, TechCorp</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSection.ref} className={`py-60 px-6 transition-all duration-700 border-b border-black ${ctaSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}>
            Ready to start building?
          </h2>
          <p className="text-xl text-black mb-8">
            Join developers who are already building amazing things
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
