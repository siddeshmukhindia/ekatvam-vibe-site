import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import img1 from "@/assets/1.webp";
import img2 from "@/assets/2.webp";
import img3 from "@/assets/3.webp";
import img4 from "@/assets/4.webp";
import img5 from "@/assets/5.webp";
import img6 from "@/assets/6.webp";
import img7 from "@/assets/7.webp";
import img8 from "@/assets/8.webp";
import img9 from "@/assets/9.webp";
import img10 from "@/assets/10.webp";

const workspaces = [
  {
    title: "Conference Room",
    images: [img1, img2],
    features: [
      "Seats 6–8 people",
      "Large display screen",
      "AC & comfortable seating",
      "Ideal for meetings & presentations"
    ]
  },
  {
    title: "Exclusive Area",
    images: [img3, img4],
    features: [
      "Peaceful focused space",
      "Fast WiFi",
      "AC & power backup",
      "Great for deep work"
    ]
  },
  {
    title: "Private Cabin – Single Seater",
    images: [img5, img6],
    features: [
      "Dedicated personal cabin",
      "Quiet & private",
      "Ergonomic setup",
      "Ideal for founders & freelancers"
    ]
  },
  {
    title: "Private Cabin – Multi Seater",
    images: [img7, img8],
    features: [
      "Great for small teams",
      "Enclosed private space",
      "Spacious & well-lit",
      "24/7 access"
    ]
  },
  {
    title: "Common Area",
    images: [img9, img10],
    features: [
      "Open collaborative area",
      "Vibrant environment",
      "Affordable for freelancers",
      "Fast WiFi & AC"
    ]
  }
];

const WorkspaceCard = ({ workspace }: { workspace: typeof workspaces[0] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % workspace.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [workspace.images.length]);

  const handleBookTour = () => {
    window.open("https://wa.me/917875799111?text=Hello!%20I%20want%20to%20book%20a%20tour%20of%20Ekatvam%20Cowork.", "_blank");
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          {workspace.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${workspace.title} view ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {workspace.title}
          </h3>
          
          <ul className="space-y-3 mb-6">
            {workspace.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            onClick={handleBookTour}
            className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
          >
            Book a Tour →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const WorkspaceCards = () => {
  return (
    <section id="workspaces" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16">
          Choose Your Workspace
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {workspaces.map((workspace, index) => (
            <WorkspaceCard key={index} workspace={workspace} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkspaceCards;
