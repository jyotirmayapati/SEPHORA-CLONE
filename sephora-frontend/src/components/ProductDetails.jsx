import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ProductDetails.css";
import { useBasket } from "../context/BasketContext";

const ProductDetails = () => {
  const location = useLocation();
  const { addToBasket } = useBasket();
  const product = location.state?.product;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const productImages = [
    product.imageUrl,
    "https://www.sephora.com/productimages/sku/s2748283-av-2-zoom.jpg?imwidth=315 1x, https://www.sephora.com/productimages/sku/s2748283-av-2-zoom.jpg?imwidth=630 2x",
    "https://www.sephora.com/productimages/sku/s2748283-av-7-zoom.jpg?imwidth=315 1x, https://www.sephora.com/productimages/sku/s2748283-av-7-zoom.jpg?imwidth=630 2x",
    "https://www.sephora.com/productimages/sku/s2748283-av-4-zoom.jpg?imwidth=315 1x, https://www.sephora.com/productimages/sku/s2748283-av-4-zoom.jpg?imwidth=630 2x",
    "https://www.sephora.com/productimages/sku/s2748283-av-5-zoom.jpg?imwidth=315 1x, https://www.sephora.com/productimages/sku/s2748283-av-5-zoom.jpg?imwidth=630 2x",
    "https://www.sephora.com/productimages/sku/s2748283-av-6-zoom.jpg?imwidth=315 1x, https://www.sephora.com/productimages/sku/s2748283-av-6-zoom.jpg?imwidth=630 2x",
  ];

  const handleAddToBasket = () => {
    const productDetails = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: productImages[currentImageIndex],
      brand: product.brand,
    };
    addToBasket(productDetails);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-details">
      <div className="container">
        <div className="left-section">
          <div className="image-thumbnails">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={index === currentImageIndex ? "active" : ""}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
          <img
            src={productImages[currentImageIndex]}
            alt={product.title}
            className="main-image"
          />
        </div>

        <div className="right-section">
          <h1>{product.title}</h1>
          <div className="stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`star ${index < product.stars ? "filled" : ""}`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="description">{product.description}</p>
          <p className="price">{product.price}</p>

          <div className="size-dropdown">
            <label htmlFor="size">Size:</label>
            <select id="size">
              <option value="standard">8.45 oz / 250 mL</option>
            </select>
          </div>

          <div className="info-boxes">
            <div className="info-box">Sign in for FREE shipping</div>
            <div className="info-box">Auto-Replenish</div>
            <div className="info-box">Same-Day Delivery</div>
            <div className="info-box">Buy Online & Pick Up</div>
          </div>

          <div className="buttons">
            <button className="add-to-basket" onClick={handleAddToBasket}>
              Add to Basket
            </button>
            <button className="wishlist-button">❤</button>
          </div>
        </div>
      </div>

      <div className="highlights-section">
        <hr></hr>
        <h3>Highlights</h3>
        <div className="highlight-icons">
          <div className="circle">
            <img
              src="https://www.sephora.com/contentimages/highlights/hydrating-color.svg"
              alt="Hydrating"
            />
            <h3>Hydrating</h3>
          </div>
          <div className="circle">
            <img
              src="https://www.sephora.com/contentimages/highlights/good-for-dryness.svg"
              alt="Vegan"
            />
            <h3>Good for Dryness</h3>
          </div>
          <div className="circle">
            <img
              src="https://www.sephora.com/contentimages/highlights/formulated-without.svg"
              alt="Good for Dryness"
            />
            <h3>Without Parabens</h3>
          </div>
          <div className="circle">
            <img
              src="https://www.sephora.com/contentimages/highlights/vegan-2024.svg"
              alt="Without Parabens"
            />
            <h3>Vegan</h3>
          </div>
          <div className="circle">
            <img
              src="https://www.sephora.com/contentimages/highlights/cruelty-free.svg"
              alt="Cruelty-Free"
            />
            <h3>Cruelty-Free</h3>
          </div>
        </div>
      </div>

      <div className="about-product">
        <hr></hr>
        <h3>About the Product</h3>
        <div style={{ display: "flex", gap: "40px" }}>
          <div>
            <p>Item: 2742683</p>
            <p style={{ backgroundColor: "black", color: "white" }}>
              ONLY AT SEPHORA
            </p>
          </div>
          <div>
            <p>
              What it is: A nourishing jelly body wash that hugs skin with notes
              of lemon zest, sweet jasmine, and warm cashmere wood while gently
              buffing for a renewed glow.
            </p>
            <p>Skincare Concerns: Dryness, Dullness, and Uneven Texture</p>
            <p>Fragrance Family: Earthy & Woody</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
