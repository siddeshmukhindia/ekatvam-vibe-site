import { Wifi, Users, Coffee, Zap, Sparkles, CalendarDays } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "High Speed Internet",
      description: "Lightning-fast connectivity for seamless work",
    },
    {
      icon: Users,
      title: "Ergonomic Seating",
      description: "Comfortable chairs for all-day productivity",
    },
    {
      icon: Coffee,
      title: "Spacious Desks",
      description: "Ample workspace for all your needs",
    },
    {
      icon: Zap,
      title: "6 Seater Conference",
      description: "Professional meeting room for your team",
    },
    {
      icon: Sparkles,
      title: "Easy Metro Connectivity",
      description: "Conveniently located near metro stations",
    },
    {
      icon: CalendarDays,
      title: "Affordable Prices",
      description: "Flexible plans that fit your budget",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
