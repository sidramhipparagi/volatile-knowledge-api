import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import apiFeatureImage from "@/assets/api-feature-illustration.jpg";
import heroGradient from "@/assets/hero-gradient.png";
import heroVideo from "@/assets/hero.mp4";
import { useInView } from "@/hooks/use-in-view";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllBlogPosts } from "@/data/blogs";

const Index = () => {
  const imageSection = useInView();
  const featuresSection1 = useInView();
  const featuresSection2 = useInView();
  const featuresSection3 = useInView();
  const ctaSection = useInView();
  const blogSection = useInView();

  const location = useLocation();

  // Get all blog posts
  const blogs = getAllBlogPosts();

  useEffect(() => {
    if (location.hash === "#blog") {
      blogSection.ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

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
            <Link to="/get-started">
              <Button size="lg" className="font-bold rounded-none px-12 h-20 text-base gap-2 group" style={{ backgroundColor: '#f3f2ec', color: '#000000' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f2ec'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f2ec'}>
                Create API
                <MoveUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} stroke="#000000" />
              </Button>
            </Link>
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

      {/* Features Section 1 */}
      <section ref={featuresSection1.ref} className="py-60 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-medium text-center mb-20 text-black transition-all duration-700 ${featuresSection1.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Everything you need to build
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 transition-all duration-700 delay-100 ${featuresSection1.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">Fast & Reliable</h3>
              <p className="text-black">
                Get instant responses with 99.9% uptime. Built for production use.
              </p>
            </div>
            <div className={`p-6 transition-all duration-700 delay-300 ${featuresSection1.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">Easy Integration</h3>
              <p className="text-black">
                Simple REST API that works with any programming language or framework.
              </p>
            </div>
            <div className={`p-6 transition-all duration-700 delay-500 ${featuresSection1.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">AI Powered</h3>
              <p className="text-black">
                Leverage cutting-edge AI technology to power your applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section ref={imageSection.ref} className={`py-44 px-6 transition-all duration-700 border-b border-white bg-black ${imageSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-32 items-center">
            <div className="overflow-hidden aspect-video bg-muted h-96">
              <img 
                src={apiFeatureImage} 
                alt="AI-powered API platform with digital network visualization" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-medium mb-6 text-white">
                Powerful API for Modern Developers
              </h2>
              <p className="text-lg text-white">
                Access crisp knowledge from the web through our powerful API. 
                Built for app developers who need reliable, real-time web data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 2*/}
      <section ref={featuresSection2.ref} className="py-40 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-medium text-center mb-20 text-black transition-all duration-700 ${featuresSection2.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Everything you need to build
          </h2>
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

      {/* CTA Section */}
      <section ref={ctaSection.ref} className={`py-60 px-6 transition-all duration-700 border-b border-black ${ctaSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-black">
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

      {/* Features Section 3 */}
      <section ref={featuresSection3.ref} className="py-40 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-medium text-center mb-20 text-black transition-all duration-700 ${featuresSection3.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Everything you need to build
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 transition-all duration-700 delay-100 ${featuresSection3.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">Fast & Reliable</h3>
              <p className="text-black">
                Get instant responses with 99.9% uptime. Built for production use.
              </p>
            </div>
            <div className={`p-6 transition-all duration-700 delay-300 ${featuresSection3.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">Easy Integration</h3>
              <p className="text-black">
                Simple REST API that works with any programming language or framework.
              </p>
            </div>
            <div className={`p-6 transition-all duration-700 delay-500 ${featuresSection3.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-3 text-black">AI Powered</h3>
              <p className="text-black">
                Leverage cutting-edge AI technology to power your applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-40 px-6 border-b border-black bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium text-center mb-12 text-white">
            See It In Action
          </h2>
          <div className="aspect-video bg-muted overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
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

      {/* Blog Section */}
      <section id="blog" ref={blogSection.ref} className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-medium text-center mb-12 text-black transition-all duration-700 ${blogSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

      <Footer />
    </div>
  );
};

export default Index;
