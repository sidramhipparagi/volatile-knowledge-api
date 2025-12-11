import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[60vh] pt-32 pb-20 px-6 flex items-center border-b border-black">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-start justify-start text-left max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-6 text-black font-medium">
              About Us
            </h1>
            <p className="text-xl text-black max-w-2xl">
              Building the world's most efficient AI voice engine for customer service from India.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-black">Our Mission</h2>
            <p className="text-black">
              We are building an AI-driven voice customer service platform designed for modern businesses. 
              Our mission is simple yet transformative: to replace traditional, slow, multi-channel customer 
              support with a single, intelligent AI voice system that interacts directly with customers 
              through voice and email.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-4 text-black">Our Vision</h2>
            <p className="text-black">
              To build the world's most efficient AI voice engine for customer service—one that eliminates 
              bottlenecks and creates real productivity for businesses. With volatileengine.com as our 
              digital home, we are committed to building globally competitive AI technology from India.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-black">Our Solution</h2>
            <p className="text-black">
              Volatile Engine provides AI-powered voice assistants that handle complete customer 
              interactions—answering questions, guiding actions, resolving issues, and escalating 
              only when needed. Instead of navigating menus or chatbots, users simply speak. Our 
              system connects each business's data to our backend, enabling deeply tailored voice assistants.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-4 text-black">Our Advantage</h2>
            <p className="text-black">
              Our voice-first SaaS platform stands out by offering simplicity, scalability, and deep 
              personalization. The combination of our data-driven backend, custom voice agents, and 
              India-based development gives us agility, cost-efficiency, and rapid iteration capabilities.
            </p>
          </div>
        </div>

        <div className="border-t border-black pt-16">
          <h2 className="text-3xl font-medium mb-4 text-black">Leadership</h2>
          <p className="text-black mb-4">
            <strong>Sidram Hipparagi</strong> — Founder & CEO
          </p>
          <p className="text-black">
            Leading product direction, architecture, and business strategy to redefine how companies 
            communicate with their customers by leveraging deep automation, clarity, and efficiency at scale.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;


