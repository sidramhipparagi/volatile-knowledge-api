import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MoveUpRight, BookOpen, Code2, Wrench, Shield } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const Doc = () => {
  const quickStartSection = useInView();
  const resourcesSection = useInView();

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
            <p className="text-xl text-black max-w-2xl mb-8">
              Everything you need to integrate and build with our API platform
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-black/90 font-normal rounded-none px-12 h-14 text-base gap-2 group">
              View API Reference
              <MoveUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section ref={quickStartSection.ref} className="py-40 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-medium text-center mb-20 text-black transition-all duration-700 ${quickStartSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Quick Start Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`transition-all duration-700 delay-100 ${quickStartSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-4 text-black">Authentication</h3>
              <div className="bg-black text-white p-6 rounded-none font-mono text-sm mb-4">
                <pre className="overflow-x-auto">
                  <code>{`headers: {
  'Authorization': 'Bearer YOUR_API_KEY'
}`}</code>
                </pre>
              </div>
              <p className="text-black">
                Include your API key in the Authorization header of every request.
              </p>
            </div>
            <div className={`transition-all duration-700 delay-300 ${quickStartSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-medium mb-4 text-black">Making Requests</h3>
              <div className="bg-black text-white p-6 rounded-none font-mono text-sm mb-4">
                <pre className="overflow-x-auto">
                  <code>{`POST /v1/generate
{
  "prompt": "text",
  "model": "latest"
}`}</code>
                </pre>
              </div>
              <p className="text-black">
                Send POST requests to our endpoints with your parameters in JSON format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section ref={resourcesSection.ref} className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-medium text-center mb-20 text-black transition-all duration-700 ${resourcesSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Documentation Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`border border-black p-6 transition-all duration-700 delay-100 ${resourcesSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <BookOpen className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-medium mb-3 text-black">API Reference</h3>
              <p className="text-black mb-4">
                Complete API documentation with all endpoints and parameters
              </p>
              <Button variant="outline" className="w-full rounded-none border-black text-black hover:bg-black hover:text-white">
                View Docs
              </Button>
            </div>
            <div className={`border border-black p-6 transition-all duration-700 delay-300 ${resourcesSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Code2 className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-medium mb-3 text-black">Code Examples</h3>
              <p className="text-black mb-4">
                Sample code in multiple programming languages
              </p>
              <Button variant="outline" className="w-full rounded-none border-black text-black hover:bg-black hover:text-white">
                View Examples
              </Button>
            </div>
            <div className={`border border-black p-6 transition-all duration-700 delay-500 ${resourcesSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Wrench className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-medium mb-3 text-black">SDKs & Tools</h3>
              <p className="text-black mb-4">
                Official SDKs and development tools for faster integration
              </p>
              <Button variant="outline" className="w-full rounded-none border-black text-black hover:bg-black hover:text-white">
                Download SDKs
              </Button>
            </div>
            <div className={`border border-black p-6 transition-all duration-700 delay-700 ${resourcesSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Shield className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-medium mb-3 text-black">Security Guide</h3>
              <p className="text-black mb-4">
                Best practices for securing your API integration
              </p>
              <Button variant="outline" className="w-full rounded-none border-black text-black hover:bg-black hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doc;
