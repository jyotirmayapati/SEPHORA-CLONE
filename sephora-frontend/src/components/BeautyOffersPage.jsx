import React from 'react';
import '../styles/BeautyOffersPage.css';
import BeautyOffersSlider from './BeautyOffersSlider'; // Assuming the slider component already exists

const BeautyOffersPage = () => {
  return (
    <div className="beauty-offers-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-content">
          <img
            src="https://www.sephora.com/contentimages/promo/beautyoffers/header-image.png"
            alt="Sephora Credit Card"
          />
          <div className="header-text">
            <h2>Get 25% OFF<sup>1</sup> YOUR FIRST PURCHASE</h2>
            <p>
              When you open and use your Sephora Credit Card at Sephora within
              30 days of account opening. Exclusions/terms apply.
            </p>
            <button>APPLY NOW</button>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <BeautyOffersSlider />

      {/* Products Section */}
      <div className="products-section">
        <h3>Use Your Credit Card on Best-Selling Beauty</h3>
        <div className="products-grid">
          {[
            {
              img: 'https://www.sephora.com/contentimages/product1.png',
              name: 'KVD Good Apple Foundation',
              price: '$40.00',
            },
            {
              img: 'https://www.sephora.com/contentimages/product2.png',
              name: 'Rare Beauty Blush',
              price: '$23.00',
            },
            {
              img: 'https://www.sephora.com/contentimages/product3.png',
              name: 'Olaplex No. 3',
              price: '$30.00',
            },
            {
              img: 'https://www.sephora.com/contentimages/product4.png',
              name: 'Dior Lip Glow',
              price: '$38.00',
            },
          ].map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Credit Card Benefits Section */}
      <div className="benefits-section">
        <h3>Apply for the Sephora Credit Card—start earning more rewards</h3>
        <div className="benefits-grid">
          {[
            {
              img: 'https://www.sephora.com/contentimages/benefit1.png',
              text: 'Become a Sephora Cardmember',
            },
            {
              img: 'https://www.sephora.com/contentimages/benefit2.png',
              text: 'Unlock Your Discount',
            },
            {
              img: 'https://www.sephora.com/contentimages/benefit3.png',
              text: 'Start Earning Rewards',
            },
            {
              img: 'https://www.sephora.com/contentimages/benefit4.png',
              text: 'Enjoy Cardmember Exclusives',
            },
          ].map((benefit, index) => (
            <div key={index} className="benefit-card">
              <img src={benefit.img} alt={`Benefit ${index + 1}`} />
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards Section */}
      <div className="rewards-section">
        <h3>Earn 4% Back</h3>
        <p>
          Get 4% back in Credit Card Rewards and 4% back in Beauty Insider Cash
          when you shop with your Sephora Credit Card at Sephora.
        </p>
        <img
          src="https://www.sephora.com/contentimages/rewards-card.png"
          alt="Rewards Card"
        />
      </div>
    </div>
  );
};

export default BeautyOffersPage;
