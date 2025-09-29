import React, { useEffect } from "react";
import Camera from "../assets/camera.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-green-800 overflow-hidden flex items-center">
      {/* Background stripes */}
      <div className="absolute inset-0 -skew-y-6 opacity-15 flex">
        <div className="w-1/3 bg-yellow-400"></div>
        <div className="w-1/3 bg-green-800"></div>
        <div className="w-1/3 bg-yellow-400"></div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/70 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold tracking-wide uppercase" data-aos="fade-right">
            α5100 <span className="text-white">E-MOUNT</span>
          </h2>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mt-4 text-white leading-tight drop-shadow-lg" data-aos="fade-right" data-aos-delay="200">
            CAMERA
          </h1>
          <p className="mt-6 text-gray-200 max-w-xl leading-relaxed mx-auto md:mx-0" data-aos="fade-right" data-aos-delay="400">
            Capture the crucial moment with ultra-fast autofocus (179 AF points, 6 fps). Lightweight yet powerful — 24.3MP of detail even in low light.
          </p>

          <button className="mt-8 bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-xl" data-aos="fade-up" data-aos-delay="600">
            Read More
          </button>

          <div className="mt-12 flex flex-col md:flex-row gap-10 text-sm justify-center md:justify-start" data-aos="fade-up" data-aos-delay="800">
            <div>
              <p className="text-gray-400">Designer</p>
              <p className="font-semibold text-white">Kester Vo</p>
            </div>
            <div>
              <p className="text-gray-400">Hotline</p>
              <p className="font-semibold text-white">0393332157</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center md:justify-end relative" data-aos="zoom-in" data-aos-delay="500">
          <img src={Camera} alt="Camera" className="w-[900px] md:w-[500px] lg:w-[1000px] drop-shadow-2xl transform hover:scale-105 transition duration-500" />
          <div className="absolute -bottom-10 -z-10 w-[500px] h-[500px] bg-yellow-400/30 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
