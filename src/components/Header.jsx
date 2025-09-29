import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-green-800 shadow-md rounded-md">
      <h1 className="text-xl font-bold text-white">
        <Link to="/">CAMERA</Link>
      </h1>

      <nav className="space-x-6 hidden md:block">
        <Link to="/lenses" className="hover:text-yellow-400">Lenses</Link>
        <Link to="/compact-cameras" className="hover:text-yellow-400">Compact Cameras</Link>
        <Link to="/accessories" className="hover:text-yellow-400">Accessories</Link>
        <Link to="/about" className="hover:text-yellow-400">About us</Link>
      </nav>

      <button className="md:hidden text-white">☰</button>
    </header>
  );
};

export default Header;
