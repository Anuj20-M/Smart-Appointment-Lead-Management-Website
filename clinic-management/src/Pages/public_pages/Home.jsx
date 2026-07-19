import Navbar from "../../components/public/Navbar";
import HeroSection from "../../components/public/Hero";
import ServicesSection from "../../components/public/Services";
import Footer from "../../components/public/Footer";
import AboutSection from "../../components/public/About";

const Home = () => {
  return (
    <div className="max-w-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
