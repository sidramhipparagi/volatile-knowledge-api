import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MoveUpRight, Check } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const Pricing = () => {
  const pricingSection = useInView();
  const faqSection = useInView();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] pt-32 pb-20 px-6 flex items-center border-b border-black">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-start justify-start text-left max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-6 text-black font-medium">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-black max-w-2xl">
              Choose the plan that fits your needs. All plans include our core features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section ref={pricingSection.ref} className="py-40 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`border border-black p-8 transition-all duration-700 delay-100 ${pricingSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-medium mb-2 text-black">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-medium text-black">$29</span>
                <span className="text-black">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-black">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>10,000 API calls/month</span>
                </li>
                <li className="flex items-start gap-2 text-black">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Basic support</span>
                </li>
                <li className="flex items-start gap-2 text-black">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>99.9% uptime SLA</span>
                </li>
              </ul>
              <Button className="w-full bg-black text-white hover:bg-black/90 rounded-none h-12 gap-2 group">
                Get Started
                <MoveUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} />
              </Button>
            </div>

            <div className={`border-2 border-black p-8 bg-black text-white transition-all duration-700 delay-300 ${pricingSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-medium mb-2">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-medium">$99</span>
                <span>/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>100,000 API calls/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>99.99% uptime SLA</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-12 gap-2 group">
                Get Started
                <MoveUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} stroke="#000000" />
              </Button>
            </div>

            <div className={`border border-black p-8 transition-all duration-700 delay-500 ${pricingSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-medium mb-2 text-black">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-medium text-black">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-black">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Unlimited API calls</span>
                </li>
                <li className="flex items-start gap-2 text-black">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-start gap-2 text-black">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Custom SLA</span>
                </li>
                <li className="flex items-start gap-2 text-black">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>On-premise deployment</span>
                </li>
              </ul>
              <Button className="w-full bg-black text-white hover:bg-black/90 rounded-none h-12 gap-2 group">
                Contact Sales
                <MoveUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[45deg]" strokeWidth={2.5} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqSection.ref} className={`py-40 px-6 transition-all duration-700 ${faqSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-20 text-black" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 700 }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-3 text-black">Can I change plans later?</h3>
              <p className="text-black">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-black">What happens if I exceed my limit?</h3>
              <p className="text-black">
                We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional API calls.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-black">Is there a free trial?</h3>
              <p className="text-black">
                Yes, all new accounts get 1,000 free API calls to test our platform before committing to a plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
