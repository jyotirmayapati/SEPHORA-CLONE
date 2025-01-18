import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ProductBeautyDetails.css';

const ProductBeautyDetails = () => {
  const location = useLocation();
  const offer = location.state?.offer;

  if (!offer) {
    return <p>No offer selected. Please go back to the offers page.</p>;
  }

  return (
    <div className="product-details-page">
      {/* Header Section */}
      <div className="details-header">
        <div className="details-header-left">
          <img src={offer.img} alt={offer.title} className="offer-image" />
        </div>
        <div className="details-header-right">
          <h1 className="offer-title">{offer.title}</h1>
          <p className="offer-description">{offer.description}</p>
          <p className="offer-footer">{offer.footer}</p>
          <button className="cta-button">{offer.buttonText}</button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <h2>Apply for the Sephora Credit Card—start earning more rewards</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <img
              src="https://www.sephora.com/contentimages/benefit1.png"
              alt="Benefit 1"
            />
            <p>Become a Sephora Cardmember</p>
          </div>
          <div className="benefit-item">
            <img
              src="https://www.sephora.com/contentimages/benefit2.png"
              alt="Benefit 2"
            />
            <p>Unlock Your Discount</p>
          </div>
          <div className="benefit-item">
            <img
              src="https://www.sephora.com/contentimages/benefit3.png"
              alt="Benefit 3"
            />
            <p>Start Earning Rewards</p>
          </div>
          <div className="benefit-item">
            <img
              src="https://www.sephora.com/contentimages/benefit4.png"
              alt="Benefit 4"
            />
            <p>Enjoy Cardmember Exclusives</p>
          </div>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="rewards-section">
        <h2>Earn 4% Back</h2>
        <p>
          Get 4% back in Credit Card Rewards and 4% back in Beauty Insider Cash
          when you shop with your Sephora Credit Card at Sephora.
        </p>
        <img
          src="https://www.sephora.com/contentimages/rewards-card.png"
          alt="Rewards Card"
          className="rewards-image"
        />
      </div>
    </div>
  );
};

export default ProductBeautyDetails;
