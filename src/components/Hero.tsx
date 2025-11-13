import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cowork.jpg";

const Hero = () => {
  const handleBookTour = () => {
    window.open("https://wa.me/?text=Hi%20I%20want%20to%20book%20a%20tour%20of%20Ekatvam%20Cowork", "_blank");
  };

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
          Connect. Create. CoGrow.
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
          Your workspace for collaboration and innovation
        </p>
        <Button 
          size="lg" 
          onClick={handleBookTour}
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
        >
          Book a Tour
        </Button>
      </div>
    </section>
  );
};

export default Hero;
