import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Products from "../components/Products";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen bg-green-900 text-white">
      <Header />

      <main>
        <div data-aos="fade-down">
          <HeroSection />
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Products />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
