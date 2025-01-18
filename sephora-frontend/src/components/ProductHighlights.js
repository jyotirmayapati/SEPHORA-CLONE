import React from "react";
import "../styles/ProductHighlights.css";

const ProductHighlights = () => {
  const cards = [
    {
      image: "https://www.sephora.com/contentimages/2025-1-15-tatcha-brightening-vitamin-c-serum-and-vitamin-c-eye-cream-site-app-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2025-1-15-tatcha-brightening-vitamin-c-serum-and-vitamin-c-eye-cream-site-app-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=630 2x", // Replace with actual image URL
      title: "Just In from Tatcha",
      description: "Target dullness and dark circles with the Brightening Collection. Clean at Sephora.",
      buttonText: "SHOP NOW",
      bgColor: "rgb(105, 68, 164)",
    },
    {
      image: "https://www.sephora.com/contentimages/2025-1-17-black-owned-brands-site-desktop-mobile-app-home-page-rwd-marketing-banner-800x534-en-us.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2025-1-17-black-owned-brands-site-desktop-mobile-app-home-page-rwd-marketing-banner-800x534-en-us.jpg?imwidth=630 2x", // Replace with actual image URL
      title: "The Need-to-Know",
      description: "Discover new game-changing picks from top brands.",
      buttonText: "SNAP THEM UP",
      bgColor: "#91b5a0",
    },
    {
      image: "https://www.sephora.com/contentimages/2025-1-4-dae-desert-detox-shampoo-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2025-1-4-dae-desert-detox-shampoo-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=630 2x", // Replace with actual image URL
      title: "New BURBERRY Scent",
      description: "Her Intense: a bold take on the fan-fave fragrance.",
      buttonText: "SHOP NOW",
      bgColor: "#e9c7c5", 
    },
  ];

  return (
    <div className="product-highlights-container">
      <div className="product-cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="product-card"
            style={{ backgroundColor: card.bgColor }}
          >
            <img src={card.image} alt={card.title} className="product-image"  style={{width: "100%", objectFit: "cover", display: "block"}}/>
            <div className="product-card-content" style={{ backgroundColor: card.bgColor }}>
              <h3 className="product-title">{card.title}</h3>
              <p className="product-description" style={{color: "black"}}>{card.description}</p>
              <button className="product-button">{card.buttonText} &#x25BA;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHighlights;
