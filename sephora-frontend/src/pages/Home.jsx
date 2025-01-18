import React from "react";
import BeautySlider from "../components/BeautySlider";
import ProductSlider from "../components/ProductSlider";
import Newarrivals from "../components/Newarrivals";
import Footer from "../components/Footer";
import BeautyOffersSlider from "../components/BeautyOffersSlider";
import Guidance from "../components/Guidance";
import ProductHighlights from "../components/ProductHighlights";
import TrendingPicks from "../components/TrendingPicks";
import BeautyInsider from "../components/BeautyInsider";
import Red from "../components/Red";

const Home = () => {
  return (
    <>
      <BeautySlider />
      <ProductSlider />
      <Newarrivals />
      <BeautyOffersSlider />
      <ProductHighlights />
      <TrendingPicks />
      <BeautyInsider />
      <Guidance />
      <Red />
    </>
  );
};

export default Home;
