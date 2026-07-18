import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/Hero";
import ServicesSection from "../../components/Services";
import Footer from "../../components/Footer";
import AboutSection from "../../components/About";

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
