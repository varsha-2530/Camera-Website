import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Lens data
const lenses = [
  {
    name: "Sony 50mm f/1.8",
    desc: "A fast prime lens ideal for portraits and low light conditions.",
    img: "https://i.pinimg.com/736x/f0/31/42/f0314211c46335bee02db6d23018fd16.jpg",
  },
  {
    name: "Canon RF 24-105mm",
    desc: "Ultra-wide zoom lens perfect for landscapes and vlogging.",
    img: "https://i.pinimg.com/736x/7e/a8/9b/7ea89b259ea52bcb29b0cf52109e9523.jpg",
  },
  {
    name: "Sony 18-105mm f/4 G OSS",
    desc: "Versatile zoom lens with built-in stabilization for video and travel.",
    img: "https://i.pinimg.com/736x/b6/4e/4c/b64e4cb48609244abad7436ef7827565.jpg",
  },
];

const LensesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative w-full py-20 bg-green-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-black opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="text-yellow-400 text-4xl md:text-5xl font-bold uppercase text-center mb-12"
          data-aos="fade-down"
        >
          Compatible Lenses
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {lenses.map((lens, index) => (
            <div
              key={index}
              className="bg-green-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              {/* Image with fixed aspect ratio */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={lens.img}
                  alt={lens.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Text content */}
              <div className="p-6">
                <h3 className="text-yellow-300 text-2xl font-semibold mb-2">
                  {lens.name}
                </h3>
                <p className="text-gray-300 text-sm">{lens.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LensesSection;
