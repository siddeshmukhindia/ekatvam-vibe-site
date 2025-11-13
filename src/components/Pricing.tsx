import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Hot Desk",
      price: "Contact for pricing",
      description: "Flexible seating for the dynamic professional",
      features: [
        "Access to open workspace",
        "High-speed WiFi",
        "Pantry access",
        "Community events",
      ],
    },
    {
      name: "Dedicated Desk",
      price: "Contact for pricing",
      description: "Your own desk, always ready for you",
      features: [
        "Fixed personal desk",
        "Storage locker",
        "High-speed WiFi",
        "Pantry access",
        "Meeting room access",
        "Community events",
      ],
      popular: true,
    },
    {
      name: "Private Cabin",
      price: "Contact for pricing",
      description: "Complete privacy for your team",
      features: [
        "Fully furnished cabin",
        "Lockable door",
        "Custom branding option",
        "Priority meeting room",
        "Dedicated storage",
        "All amenities included",
      ],
    },
  ];

  const handleBookTour = () => {
    window.open("https://wa.me/?text=Hi%20I%20want%20to%20book%20a%20tour%20of%20Ekatvam%20Cowork", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Choose Your Workspace
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Flexible options to suit your working style
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "border-accent shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-foreground">{plan.price}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={handleBookTour}
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Book a Tour
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
