import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Connect | Create | CoGrow";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1;
      const currentText = fullText;

      if (!isDeleting) {
        setTypedText(currentText.substring(0, typedText.length + 1));
        setTypingSpeed(150);

        if (typedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentText.substring(0, typedText.length - 1));
        setTypingSpeed(100);

        if (typedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const handleBookTour = () => {
    window.open("https://wa.me/917447726161?text=Hi%20I%20want%20to%20book%20a%20tour%20of%20Ekatvam%20Cowork", "_blank");
  };

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          EKATVAM COWORK
        </h1>
        <div className="h-16 md:h-20 mb-8">
          <p className="text-2xl md:text-4xl font-semibold text-accent">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
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
