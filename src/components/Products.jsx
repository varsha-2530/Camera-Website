import React, { useEffect } from "react";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Sony α5100 Camera",
    price: "$499",
    rating: 4.5,
    tag: "Best Seller",
    image: "https://i.pinimg.com/736x/d3/14/fd/d314fdf90a466d991bbe00df2a170e0d.jpg",
  },
  {
    id: 2,
    name: "Canon EOS R10",
    price: "$799",
    rating: 4.7,
    tag: "Trending",
    image: "https://i.pinimg.com/1200x/59/65/a9/5965a9cb2709607d5b5c99c674b24ad4.jpg",
  },
  {
    id: 3,
    name: "Fujifilm X-T30 II",
    price: "$699",
    rating: 4.3,
    tag: "New Arrival",
    image: "https://i.pinimg.com/736x/27/f8/04/27f80402ef8e829701db21a28a28c62d.jpg",
  },
];

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-green-800 relative overflow-hidden">
      <div className="absolute inset-0 -skew-y-6 opacity-10 flex">
        <div className="w-1/3 bg-yellow-400"></div>
        <div className="w-1/3 bg-green-900"></div>
        <div className="w-1/3 bg-yellow-400"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 drop-shadow-lg" data-aos="fade-down">
          Trending <span className="text-yellow-400">Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="relative rounded-3xl shadow-xl overflow-hidden group hover:-translate-y-3 hover:shadow-2xl transition duration-500 bg-green-900 block"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <span className="absolute top-4 left-4 bg-yellow-400 text-green-900 px-4 py-1 rounded-full text-sm font-semibold shadow-md z-10">
                {product.tag}
              </span>

              <div className="relative w-full h-72">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>

              <div className="p-6 text-center bg-green-900">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition">{product.name}</h3>
                <div className="flex justify-center items-center gap-1 mt-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-200 ml-1">{product.rating}</span>
                </div>
                <p className="mt-3 text-2xl font-bold text-yellow-400">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
