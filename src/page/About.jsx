import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative w-full py-20 bg-green-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-900 to-black opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <h2
          className="text-yellow-400 text-4xl md:text-5xl font-bold uppercase text-center mb-8"
          data-aos="fade-down"
        >
          About the α5100
        </h2>
        <p
          className="text-gray-200 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The α5100 E-Mount camera is designed for creators who never want to miss a moment. With its ultra-fast 179-point autofocus, 24.3MP APS-C sensor, and lightweight form factor, it’s the perfect companion for everyday photography, travel, or vlogging.
        </p>

        <div
          className="mt-12 grid md:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-green-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-yellow-300 font-semibold text-xl mb-3">High-Speed Autofocus</h3>
            <p className="text-gray-300">
              Capture moving subjects with precision using 179 phase-detection points and 6fps burst shooting.
            </p>
          </div>
          <div className="bg-green-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-yellow-300 font-semibold text-xl mb-3">Compact & Lightweight</h3>
            <p className="text-gray-300">
              Weighing just under 300g, it's perfect for on-the-go creators who value both performance and portability.
            </p>
          </div>
          <div className="bg-green-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-yellow-300 font-semibold text-xl mb-3">Exceptional Image Quality</h3>
            <p className="text-gray-300">
              Shoot in low light and get stunning detail thanks to the 24.3MP APS-C sensor and advanced image processor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
