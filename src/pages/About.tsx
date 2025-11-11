import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section (reused from Pricing) */}
      <section className="min-h-[60vh] pt-32 pb-20 px-6 flex items-center border-b border-black">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-start justify-start text-left max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-6 text-black font-medium">
              About
            </h1>
            <p className="text-xl text-black max-w-2xl">
              Learn more about our mission and the team building Volatile Engine.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-black">Our mission</h2>
            <p className="text-black">
              We are building a reliable web knowledge API that developers love.
              Our focus is simple: performance, clarity, and developer experience.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-4 text-black">What we value</h2>
            <p className="text-black">
              Simplicity in interfaces, transparency in pricing, and a relentless
              focus on uptime and correctness.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;


