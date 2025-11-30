import Hero from "@/components/Hero";
import WorkspaceCards from "@/components/WorkspaceCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WorkspaceCards />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
