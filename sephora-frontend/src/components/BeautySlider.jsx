import React, { useState } from "react";
import "../styles/BeautySlider.css";

const BeautySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      imageUrl: "https://www.sephora.com/contentimages/2025-01-03-slotting-value-size-standard-site-rwd-home-page-hero-banner-HERRERA-US-handoff_01.jpg?imwidth=315",
      title: "Big in Beauty",
      description: "Stock up on bestselling value sizes.",
    },
    {
      id: 2,
      imageUrl: "https://www.sephora.com/contentimages/2025-jan-makeup-mbc-site-home-page-RWD-hero-banner-us-release-image-only.jpg?imwidth=315",
      title: "That New Makeup Feeling",
      description: "Okay, 2025, let's get into it.",
    },
    {
      id: 3,
      imageUrl: "https://www.sephora.com/contentimages/homepage/050124/2025-jan-skin-story-site-home-page-hero-banner-image-only-us-2833-handoff-2000x2000.jpeg?imwidth=315",
      title: "The Skin You Want in 4 Steps",
      description: "Cleanse, treat, hydrate, and protect.",
    },
    {
      id: 4,
      imageUrl: "https://www.sephora.com/contentimages/2025-1-4-dae-desert-detox-shampoo-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=315",
      title: "Glow Up",
      description: "Discover the glowiest products.",
    },
    {
      id: 5,
      imageUrl: "https://www.sephora.com/contentimages/2025-1-4-dior-lip-glow-balm-relaunch-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=3155",
      title: "Ultimate Care",
      description: "Treat yourself with care.",
    },
    {
      id: 6,
      imageUrl: "https://www.sephora.com/contentimages/2025-01-02-sol-de-janeiro-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=315",
      title: "Skin Perfection",
      description: "Achieve the perfect skin.",
    },
  ];
  const itemsPerPage = 3;
  const maxIndex = Math.ceil(items.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const getVisibleItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div
      className="slider-container"
    >
      <button className="slider-btn prev" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="slider">
        {getVisibleItems().map((item) => (
          <div className="slider-item" key={item.id}>
            <img src={item.imageUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href="#" className="shop-now">
              SHOP NOW &gt;
            </a>
          </div>
        ))}
      </div>
      <button className="slider-btn next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default BeautySlider;