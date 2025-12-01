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
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % heroImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleBookTour = () => {
    window.open(
      "https://wa.me/917875799111?text=Hello!%20I%20want%20to%20book%20a%20tour%20of%20Ekatvam%20Cowork.",
      "_blank"
    );
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND IMAGES WITH FADE TRANSITION */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/65" />
        </div>
      ))}

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {/* MAIN TITLE */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          EKATVAM COWORK
        </h1>

        {/* TAGLINE ON NEW LINE */}
        <span className="block mt-2 mx-auto text-[#D9B42C] font-semibold tracking-wide text-3xl md:text-4xl typing">
          Connect | Create | CoGrow
        </span>

        {/* SUBTITLE */}
      <p className="text-base md:text-lg text-white/95 mt-6 mb-10 max-w-3xl mx-auto font-light">
      Designed for productivity and built for growth.
      </p>


        {/* CTA BUTTON */}
        <Button
          size="lg"
          onClick={handleBookTour}
          className="bg-[#8A8F39] hover:bg-[#27493F] text-white text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all rounded-xl"
        >
          Book a Tour →
        </Button>

      </div>
    </section>
  );
};

export default Hero;
