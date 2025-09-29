import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Lens data
const lenses = [
  {
    id: "sony-50mm",
    name: "Sony 50mm f/1.8",
    desc: "A fast prime lens ideal for portraits and low light conditions.",
    price: "$249",
    img: "https://i.pinimg.com/736x/f0/31/42/f0314211c46335bee02db6d23018fd16.jpg",
  },
  {
    id: "canon-24-105",
    name: "Canon RF 24-105mm",
    desc: "Ultra-wide zoom lens perfect for landscapes and vlogging.",
    price: "$399",
    img: "https://i.pinimg.com/736x/7e/a8/9b/7ea89b259ea52bcb29b0cf52109e9523.jpg",
  },
  {
    id: "sony-18-105",
    name: "Sony 18-105mm f/4 G OSS",
    desc: "Versatile zoom lens with built-in stabilization for video and travel.",
    price: "$549",
    img: "https://i.pinimg.com/736x/b6/4e/4c/b64e4cb48609244abad7436ef7827565.jpg",
  },
];

const LensePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* 🔻 Banner Section */}
     <section
  className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/736x/43/1c/cb/431ccb0b40706af8f4195109476a5036.jpg')",
  }}
>
  {/* Overlay for dark tint */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Title text */}
  <h1
    className="relative z-10 text-4xl md:text-5xl text-yellow-400 font-bold uppercase tracking-wider"
    data-aos="fade-down"
  >
    Our Premium Lenses
  </h1>
</section>


      {/* 🔻 Description Section */}
      <section className="bg-green-900 text-gray-200 text-center py-10 px-4">
        <p className="max-w-2xl mx-auto text-lg md:text-xl" data-aos="fade-up">
          Explore our curated collection of high-performance lenses designed to elevate your photography game. Whether you're shooting portraits, landscapes, or videos — we’ve got the perfect lens for every moment.
        </p>
      </section>

      {/* 🔻 Lenses Grid Section */}
      <section className="bg-green-800 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-yellow-400 font-bold text-center mb-12" data-aos="fade-up">Available Lenses</h2>

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {lenses.map((lens, index) => (
              <div
                key={lens.id}
                className="bg-green-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={lens.img}
                    alt={lens.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-yellow-300 text-2xl font-semibold">{lens.name}</h3>
                  <p className="text-gray-300 text-sm">{lens.desc}</p>
                  <p className="text-white font-bold text-lg">{lens.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LensePage;
