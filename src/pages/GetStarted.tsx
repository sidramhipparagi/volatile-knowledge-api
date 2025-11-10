import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MoveUpRight, Code, Zap, BookOpen } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const GetStarted = () => {
  const stepsSection = useInView();
  const codeSection = useInView();
  const ctaSection = useInView();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] pt-32 pb-20 px-6 flex items-center border-b border-black">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-start justify-start text-left max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-6 text-black font-medium">
              Get Started in Minutes
            </h1>
            <p className="text-xl text-black max-w-2xl mb-8">
              Start building AI-powered applications with our simple API. No complex setup required.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-black/90 font-normal rounded-none px-12 h-14 text-base gap-2 group">
              Create API Key
              <MoveUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section ref={stepsSection.ref} className="py-40 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-medium text-center mb-20 text-black transition-all duration-700 ${stepsSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Three Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className={`transition-all duration-700 delay-100 ${stepsSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-none flex items-center justify-center text-xl font-medium">
                  1
                </div>
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Sign Up & Get API Key</h3>
              <p className="text-black">
                Create your account and instantly receive your API key. No credit card required to start.
              </p>
            </div>
            <div className={`transition-all duration-700 delay-300 ${stepsSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-none flex items-center justify-center text-xl font-medium">
                  2
                </div>
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Make Your First Request</h3>
              <p className="text-black">
                Use our simple REST API to make your first call. Get results in seconds.
              </p>
            </div>
            <div className={`transition-all duration-700 delay-500 ${stepsSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-none flex items-center justify-center text-xl font-medium">
                  3
                </div>
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Build & Scale</h3>
              <p className="text-black">
                Integrate our API into your application and scale as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section ref={codeSection.ref} className={`py-40 px-6 border-b border-black transition-all duration-700 ${codeSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium text-center mb-12 text-black">
            Simple Integration
          </h2>
          <div className="bg-black text-white p-8 rounded-none font-mono text-sm">
            <pre className="overflow-x-auto">
              <code>{`// Example API Request
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
.then(data => console.log(data));`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSection.ref} className={`py-60 px-6 transition-all duration-700 ${ctaSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-black">
            Ready to build?
          </h2>
          <p className="text-xl text-black mb-8">
            Start creating amazing AI-powered applications today
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-black/90 font-normal rounded-none px-12 h-14 text-base gap-2 group">
            Create Your Account
            <MoveUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;
