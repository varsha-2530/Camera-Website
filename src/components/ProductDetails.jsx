import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";

const products = [
  {
    id: 1,
    name: "Sony α5100 Camera",
    price: "$499",
    rating: 4.5,
    tag: "Best Seller",
    description:
      "Capture the crucial moment with ultra-fast autofocus (179 AF points, 6 fps). Lightweight yet powerful — 24.3MP of detail even in low light.",
    images: [
      "https://i.pinimg.com/736x/d3/14/fd/d314fdf90a466d991bbe00df2a170e0d.jpg",
      "https://i.pinimg.com/736x/8f/1a/65/8f1a65cf7d263d520ac3ac73091b629d.jpg",
      "https://i.pinimg.com/736x/3c/a9/df/3ca9dfc24bee061a5367138bfab08376.jpg",
      "https://i.pinimg.com/736x/6f/6f/04/6f6f041b1f46900a9708cfc826a64f09.jpg",
    ],
  },
  {
    id: 2,
    name: "Canon EOS R10",
    price: "$799",
    rating: 4.7,
    tag: "Trending",
    description:
      "Canon EOS R10 with advanced autofocus and high-speed continuous shooting. Perfect for both photography and videography.",
    images: [
      "https://i.pinimg.com/1200x/59/65/a9/5965a9cb2709607d5b5c99c674b24ad4.jpg",
      "https://i.pinimg.com/1200x/af/12/b3/af12b3123456.jpg",
      "https://i.pinimg.com/1200x/5c/ab/78/5cab78aabbcc.jpg",
    ],
  },
  {
    id: 3,
    name: "Fujifilm X-T30 II",
    price: "$699",
    rating: 4.3,
    tag: "New Arrival",
    description:
      "Fujifilm X-T30 II compact mirrorless camera with exceptional image quality and film simulation modes.",
    images: [
      "https://i.pinimg.com/736x/27/f8/04/27f80402ef8e829701db21a28a28c62d.jpg",
      "https://i.pinimg.com/736x/11/22/33/112233445566.jpg",
      "https://i.pinimg.com/736x/77/88/99/778899aabbcc.jpg",
    ],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.images[0]);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  if (!product) return <p className="text-center mt-20 text-white">Product not found.</p>;

  return (
    <div>
     

      <section className="py-20 bg-green-800 min-h-screen relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12 items-start">
          {/* Left Side: Main Image + Thumbnails */}
          <div className="flex-1 w-full">
            <div className="w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-6" data-aos="zoom-in">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 justify-center md:justify-start">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name}-${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                    mainImage === img ? "border-yellow-400" : "border-transparent"
                  } hover:border-yellow-400 transition`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Product Info */}
          <div className="flex-1 text-center md:text-left" data-aos="fade-left">
            <span className="inline-block bg-yellow-400 text-green-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {product.tag}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                />
              ))}
              <span className="text-gray-200 ml-2">{product.rating}</span>
            </div>

            <p className="text-gray-200 mb-6">{product.description}</p>
            <p className="text-3xl font-bold text-yellow-400 mb-6">{product.price}</p>

            <div className="flex gap-4 justify-center md:justify-start">
              <button className="bg-yellow-400 text-green-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition shadow-lg">
                Add to Cart
              </button>
              <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-green-900 transition">
                Buy Now
              </button>
            </div>

            <Link to="/" className="inline-block mt-8 text-yellow-400 hover:underline">
              ← Back to Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
