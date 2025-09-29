import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import ProductDetails from "./components/ProductDetails";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        {/* Example static pages for header links */}
        {/* <Route path="/lenses" element={<div className="text-center py-20 text-white">Lenses Page</div>} />
        <Route path="/compact-cameras" element={<div className="text-center py-20 text-white">Compact Cameras Page</div>} />
        <Route path="/accessories" element={<div className="text-center py-20 text-white">Accessories Page</div>} />
        <Route path="/about" element={<div className="text-center py-20 text-white">About Us Page</div>} /> */}
      </Routes>
    </Router> 
  );
};

export default App;
