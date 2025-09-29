import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages/Components
import HomePage from "./page/HomePage";
import ProductDetails from "./components/ProductDetails";
import About from "./page/About";
import Header from "./components/Header";

import CompactCameras from "./components/CompactCameras";
import Accessories from "./components/Accessories";
import LensePage from "./components/LensePage";


const App = () => {
  return (
    <Router>
      {/* ✅ Global Header */}
      <Header />

      <Routes>
        {/* 🏠 Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* 🔍 Product Details */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* 📷 Lenses Page */}
        <Route path="/lenses" element={<LensePage />} />

        {/* 📸 Compact Cameras */}
        <Route
          path="/compact-cameras"
          element={<CompactCameras />}
        />

        {/* 🧰 Accessories */}
        <Route
          path="/accessories"
          element={<Accessories />}
        />

       
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </Router>
  );
};

export default App;
