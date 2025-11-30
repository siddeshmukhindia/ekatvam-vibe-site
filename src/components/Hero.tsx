import { Button } from "@/components/ui/button";
import workspace1 from "@/assets/1.webp";

const Hero = () => {
  const handleBookTour = () => {
    window.open("https://wa.me/917875799111?text=Hello!%20I%20want%20to%20book%20a%20tour%20of%20Ekatvam%20Cowork.", "_blank");
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${workspace1})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Flexible Coworking Spaces in Pune
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          Private Cabins, Conference Rooms & Shared Workspaces designed for productivity.
        </p>
        <Button 
          size="lg" 
          onClick={handleBookTour}
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
        >
          Book a Tour →
        </Button>
      </div>
    </section>
  );
};

export default Hero;
