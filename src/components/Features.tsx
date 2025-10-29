import { Card } from "@/components/ui/card";
import { Zap, Shield, Code } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Data",
    description: "Access fresh web knowledge instantly with our optimized API endpoints.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Enterprise-grade infrastructure with 99.9% uptime and encrypted connections.",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Simple integration with comprehensive docs and code examples.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          Why Volatile Engine?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-8 border-border hover:border-primary/50 transition-colors">
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
