import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Doc = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] pt-32 pb-20 px-6 flex items-center border-b border-black">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-start justify-start text-left max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-6 text-black font-medium">
              Documentation
            </h1>
            <p className="text-xl text-black max-w-2xl">
              Everything you need to integrate and build with our platform
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}>
            Updating These Details Soon
          </h2>
          <p className="text-xl text-black">
            We are working on comprehensive documentation for our AI voice platform. 
            Check back soon for detailed guides, API references, and integration examples.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doc;
