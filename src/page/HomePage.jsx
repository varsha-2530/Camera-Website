import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";

import Products from "../components/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import LenseMainPage from "./Lenses/LenseMainPage";

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
    

      <main>
        <div data-aos="fade-down">
          <HeroSection />
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Products />
        </div>
        <div>
          <About />
        </div>
        <div>
          <LenseMainPage />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
