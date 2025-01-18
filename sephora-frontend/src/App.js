import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import { BasketProvider } from "./context/BasketContext";
import CartPage from "./pages/CartPage";
import ProductBeautyDetails from "./components/ProductBeautyDetails";
import Footer from "./components/Footer";
import SecondNavbar from "./components/SecondNavbar";

const App = () => {
  return (
    <BasketProvider>
      <Router>
        <Navbar />
        <SecondNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route
            path="/productbeauty-details"
            element={<ProductBeautyDetails />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </BasketProvider>
  );
};

export default App;
