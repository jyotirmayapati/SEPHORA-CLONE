import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductSlider.css";

const TrendingPicks = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      imageUrl:
        "https://www.sephora.com/productimages/sku/s2849776-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2849776-main-zoom.jpg?imwidth=244 2x",
      title: "Rare Beauty by Selena Gomez",
      description: "Find Comfort: Awaken Confidence Body & Hair Mist",
      price: "$28.00",
      stars: 5,
      reviews: "907",
      label: "NEW",
    },
    {
      id: 2,
      imageUrl:
        "https://www.sephora.com/productimages/sku/s2652121-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2652121-main-zoom.jpg?imwidth=244 2x",
      title: "Sol de Janeiro",
      description: "Delicia Drench™ Moisturizing Shower Oil",
      price: "$26.00",
      stars: 4,
      reviews: "246",
      label: "NEW",
    },
    {
      id: 3,
      imageUrl:
        "https://www.sephora.com/productimages/sku/s2830248-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2830248-main-zoom.jpg?imwidth=244 2x",
      title: "HUDA BEAUTY",
      description: "Blush Filter Soft Glow Liquid Blush",
      price: "$23.00",
      stars: 5,
      reviews: "2.6K",
      label: "NEW",
    },
    {
      id: 4,
      imageUrl:
        "https://www.sephora.com/productimages/sku/s2823862-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2823862-main-zoom.jpg?imwidth=244 2x",
      title: "Rare Beauty",
      description: "Find Comfort Hydrating Lotion Pump",
      price: "$3.00",
      stars: 4,
      reviews: "8",
      label: "ONLINE ONLY",
    },
    {
      id: 5,
      imageUrl:
        "https://www.sephora.com/productimages/sku/s2817138-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2817138-main-zoom.jpg?imwidth=244 2x",
      title: "Rare Beauty",
      description: "Find Comfort: Awaken Confidence Bouncy Body Cream",
      price: "$36.00",
      stars: 5,
      reviews: "913",
      label: "NEW",
    },
  ];

  const handleProductClick = (product) => {
    navigate("/product-details", { state: { product } }); // Navigate to product details page with product data
  };

  return (
    <>
      <h2 style={{ fontSize: "16px", fontWeight: "700", marginLeft: "30px" }}>
        Your Trending Picks
      </h2>
      <div className="product-slider-container">
        <div className="product-slider">
          {products.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleProductClick(product)} // Redirect to product details page
            >
              {product.label && (
                <div className="product-label">{product.label}</div>
              )}
              <img src={product.imageUrl} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingPicks;
