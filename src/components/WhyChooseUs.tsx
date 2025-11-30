import { MapPin, Wifi, Zap, Armchair, Calendar, Car, Volume2, Users } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Prime Location in Pune",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
  },
  {
    icon: Zap,
    title: "Full Power Backup",
  },
  {
    icon: Armchair,
    title: "Comfortable Seating",
  },
  {
    icon: Calendar,
    title: "Flexible Plans",
  },
  {
    icon: Car,
    title: "Parking Availability",
  },
  {
    icon: Volume2,
    title: "Quiet & Productive",
  },
  {
    icon: Users,
    title: "Supportive Staff",
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
