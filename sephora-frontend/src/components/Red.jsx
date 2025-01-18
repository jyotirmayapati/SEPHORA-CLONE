import React from "react";
import "../styles/ProductHighlights.css";

const Red = () => {
  const cards = [
    {
      image: "https://www.sephora.com/contentimages/2025-01-29-im-lny-site-rwd-hero-banner-1200x800-gc-image-only-can-en.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2025-01-29-im-lny-site-rwd-hero-banner-1200x800-gc-image-only-can-en.jpg?imwidth=630 2x", 
      title: "Just In from Tatcha",
      description: "Target dullness and dark circles with the Brightening Collection. Clean at Sephora.",
      buttonText: "SHOP NOW",
      bgColor: "rgb(124, 18, 22)",
    },
    {
      image: "https://www.sephora.com/contentimages/2024-06-15-AltPayments-site-desktop-rwd-home-page-marketing-banner-us-image-only.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2024-06-15-AltPayments-site-desktop-rwd-home-page-marketing-banner-us-image-only.jpg?imwidth=630 2x", 
      title: "The Need-to-Know",
      description: "Discover new game-changing picks from top brands.",
      buttonText: "SNAP THEM UP",
      bgColor: "rgb(141, 184, 227)",
    },
    {
      image: "https://www.sephora.com/contentimages/2024-omni-journey-der-a-site-desktop-mobile-app-home-page-rwd-marketing-banner-omni-us-can-final.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2024-omni-journey-der-a-site-desktop-mobile-app-home-page-rwd-marketing-banner-omni-us-can-final.jpg?imwidth=630 2x", 
      title: "New BURBERRY Scent",
      description: "Her Intense: a bold take on the fan-fave fragrance.",
      buttonText: "SHOP NOW",
      bgColor: "rgb(189, 220, 238)", 
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

export default Red;
