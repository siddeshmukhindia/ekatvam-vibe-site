import workspace1 from "@/assets/Workspace-1.webp";
import workspace2 from "@/assets/Workspace-2.webp";
import workspace3 from "@/assets/Workspace-3.webp";
import workspace4 from "@/assets/Workspace-4.webp";

const Gallery = () => {
  const images = [
    { src: workspace1, alt: "Executive Area" },
    { src: workspace2, alt: "Meeting room" },
    { src: workspace3, alt: "Open area" },
    { src: workspace4, alt: "Private cabin" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Our Workspace
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-[4/3] group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
