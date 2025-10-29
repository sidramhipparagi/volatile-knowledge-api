import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    requests: "100K",
    features: ["100K requests/month", "Email support", "Basic analytics", "99.9% uptime SLA"],
  },
  {
    name: "Pro",
    price: "199",
    requests: "500K",
    features: ["500K requests/month", "Priority support", "Advanced analytics", "99.95% uptime SLA"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    requests: "Unlimited",
    features: ["Unlimited requests", "Dedicated support", "Custom solutions", "99.99% uptime SLA"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Start free, scale as you grow
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`p-8 ${plan.highlighted ? 'border-primary shadow-lg scale-105' : 'border-border'}`}
            >
              <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
              </div>
              <p className="text-muted-foreground mb-6">{plan.requests} requests</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
