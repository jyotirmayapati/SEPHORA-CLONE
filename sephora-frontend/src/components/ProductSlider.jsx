import React, { useState } from "react";
import "../styles/ProductSlider.css";

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      imageUrl: "https://www.sephora.com/productimages/sku/s2817146-main-zoom.jpg?imwidth=244",
      title: "Rare Beauty by Selena Gomez",
      description: "Find Comfort: Awaken Confidence Body & Hair Mist",
      price: "$28.00",
      stars: 5,
      reviews: "907",
      label: "NEW",
    },
    {
      id: 2,
      imageUrl: "https://www.sephora.com/productimages/sku/s2830891-main-zoom.jpg?imwidth=122",
      title: "Sol de Janeiro",
      description: "Delicia Drench™ Moisturizing Shower Oil",
      price: "$10.00 - $26.00",
      stars: 4,
      reviews: "246",
      label: "NEW",
    },
    {
      id: 3,
      imageUrl: "https://www.sephora.com/productimages/sku/s2828911-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2828911-main-zoom.jpg?imwidth=244 2x",
      title: "HUDA BEAUTY",
      description: "Blush Filter Soft Glow Liquid Blush",
      price: "$21.00 - $23.00",
      stars: 5,
      reviews: "2.6K",
      label: "NEW",
    },
    {
      id: 4,
      imageUrl: "https://www.sephora.com/productimages/sku/s2823862-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2823862-main-zoom.jpg?imwidth=244 2x",
      title: "Rare Beauty",
      description: "Find Comfort Hydrating Lotion Pump",
      price: "$3.00",
      stars: 4,
      reviews: "8",
      label: "ONLINE ONLY",
    },
    {
      id: 5,
      imageUrl: "https://www.sephora.com/productimages/sku/s2817138-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2817138-main-zoom.jpg?imwidth=244 2x",
      title: "Rare Beauty",
      description: "Find Comfort: Awaken Confidence Bouncy Body Cream",
      price: "$36.00",
      stars: 5,
      reviews: "913",
      label: "NEW",
    },
    {
      id: 6,
      imageUrl: "https://www.sephora.com/productimages/sku/s2734028-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2734028-main-zoom.jpg?imwidth=244 2x",
      title: "Rare Beauty",
      description: "Find Comfort Niacinamide Hydrating Body Lotion",
      price: "$3.00 - $28.00",
      stars: 5,
      reviews: "1.4K",
    },
    {
      id: 7,
      imageUrl: "https://www.sephora.com/productimages/sku/s2748283-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2748283-main-zoom.jpg?imwidth=244 2x",
      title: "Product 7",
      description: "Another great product.",
      price: "$20.00",
      stars: 3,
      reviews: "123",
    },
    {
      id: 8,
      imageUrl: "https://www.sephora.com/productimages/sku/s2734044-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2734044-main-zoom.jpg?imwidth=244 2x",
      title: "Product 8",
      description: "A wonderful item to own.",
      price: "$18.00",
      stars: 4,
      reviews: "345",
    },
    {
        id: 9,
        imageUrl: "https://www.sephora.com/productimages/sku/s2734044-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2734044-main-zoom.jpg?imwidth=244 2x",
        title: "Product 9",
        description: "A wonderful item to own.",
        price: "$18.00",
        stars: 4,
        reviews: "345",
      },
      {
        id: 10,
        imageUrl: "https://www.sephora.com/productimages/sku/s2734044-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2734044-main-zoom.jpg?imwidth=244 2x",
        title: "Product 10",
        description: "A wonderful item to own.",
        price: "$18.00",
        stars: 4,
        reviews: "345",
      },
      {
        id: 11,
        imageUrl: "https://www.sephora.com/productimages/sku/s2734044-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2734044-main-zoom.jpg?imwidth=244 2x",
        title: "Product 11",
        description: "A wonderful item to own.",
        price: "$18.00",
        stars: 4,
        reviews: "345",
      },
      {
        id: 12,
        imageUrl: "https://www.sephora.com/productimages/sku/s2734044-main-zoom.jpg?imwidth=122 1x, https://www.sephora.com/productimages/sku/s2734044-main-zoom.jpg?imwidth=244 2x",
        title: "Product 12",
        description: "A wonderful item to own.",
        price: "$18.00",
        stars: 4,
        reviews: "345",
      },
  ];

  const itemsPerPage = 6;
  const maxIndex = Math.ceil(products.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const getVisibleItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  };

  const renderStars = (stars) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={`star ${index < stars ? "filled" : ""}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="product-slider-container">
      <button className="slider-btn prev" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="product-slider">
        {getVisibleItems().map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => window.location.href = product.detailsUrl} // Redirect to product details page
          >
            {product.label && <div className="product-label">{product.label}</div>}
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <div className="stars-reviews">
              <div className="stars">{renderStars(product.stars)}</div>
              <span className="reviews">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-btn next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default ProductSlider;
