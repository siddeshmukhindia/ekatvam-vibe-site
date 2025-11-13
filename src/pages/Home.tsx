import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Pricing />
    </div>
  );
};

export default Home;
