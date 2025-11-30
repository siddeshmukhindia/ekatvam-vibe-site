import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/1.webp";
import img3 from "@/assets/3.webp";
import img5 from "@/assets/5.webp";
import img7 from "@/assets/7.webp";
import img9 from "@/assets/9.webp";

const heroImages = [img1, img3, img5, img7, img9];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleBookTour = () => {
    window.open("https://wa.me/917875799111?text=Hello!%20I%20want%20to%20book%20a%20tour%20of%20Ekatvam%20Cowork.", "_blank");
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
      
  <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
    EKATVAM COWORK –
    <span className="ml-2 text-[#A6312F] font-semibold tracking-wider text-lg md:text-xl align-middle">
      Connect | Create | CoGrow
    </span>
  </h1>

  <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto font-light tracking-wide">
    Designed for productivity and built for growth.
  </p>

  <Button
    size="lg"
    onClick={handleBookTour}
    className="bg-[#1E3A33] hover:bg-[#27493F] text-white text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all rounded-xl"
  >
    Book a Tour →
  </Button>
</div>

    </section>
  );
};

export default Hero;
