import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Vehicles from "@/components/Vehicles";
import Pricing from "@/components/Pricing";
import Destinations from "@/components/Destinations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Vehicles />
      <Pricing />
      <Destinations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
