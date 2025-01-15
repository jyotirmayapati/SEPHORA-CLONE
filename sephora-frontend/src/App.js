import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import BeautySlider from "./components/BeautySlider";
import ProductSlider from "./components/ProductSlider";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer /> */}
      <BeautySlider />
      <ProductSlider />
    </Router>
  );
};

export default App;
