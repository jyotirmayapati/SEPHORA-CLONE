import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BeautyOffersSlider.css';

const BeautyOffersSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4; // Number of visible cards
  const navigate = useNavigate();

  const offers = [
    {
      tag: 'IN STORE ONLY',
      img: 'https://www.sephora.com/contentimages/promo/beautyoffers/2025/January/2025-01-15-gwa-always-on-program-bundle-a-site-desktop-mobile-app-beauty-offers-page-banner-amika-us-final.jpg?imwidth=240 1x, https://www.sephora.com/contentimages/promo/beautyoffers/2025/January/2025-01-15-gwa-always-on-program-bundle-a-site-desktop-mobile-app-beauty-offers-page-banner-amika-us-final.jpg?imwidth=480 2x',
      title: 'Get a FREE amika Gift$$$',
      description: 'by applying for the Sephora Credit Card in store through 6/30/25.',
      footer: 'In store only • Ends 6/30/2025 • While supplies last.',
      buttonText: 'Learn More',
    },
    {
      tag: 'LAST DAY',
      img: 'https://www.sephora.com/contentimages/promo/beautyoffers/2025/January/2025-january-skincare-daily-deals-site-dektop-mobile-app-beauty-offers-page-banner-generic-1000x750-us-can-2821.jpg?imwidth=240 1x, https://www.sephora.com/contentimages/promo/beautyoffers/2025/January/2025-january-skincare-daily-deals-site-dektop-mobile-app-beauty-offers-page-banner-generic-1000x750-us-can-2821.jpg?imwidth=480 2x',
      title: 'Get 50% off(a) Top Skincare',
      description: 'New deals every day through 1/17.',
      footer: 'In store & online • Ends 1/17/2025.',
      buttonText: 'Shop Now',
    },
    {
      tag: '5 DAYS LEFT',
      img: 'https://www.sephora.com/contentimages/promo/bpme/2025/January/2025-jan-skin-story-site-desktop-mobile-app-beauty-offers-page-banner-4x-points-1000x750-us-2821.jpg?imwidth=240 1x, https://www.sephora.com/contentimages/promo/bpme/2025/January/2025-jan-skin-story-site-desktop-mobile-app-beauty-offers-page-banner-4x-points-1000x750-us-2821.jpg?imwidth=480 2x',
      title: 'Get 4X Points† on Skincare!',
      description: 'Now through January 22. Use code SKINCARE4X.',
      footer: 'Beauty Insider members only.',
      buttonText: 'Apply',
    },
    {
      tag: 'VIB+ROUGE',
      img: 'https://www.sephora.com/contentimages/promo/beautyoffers/2025/January/2025-1-14-vib-r-gifts-site-desktop-mobile-app-beauty-offers-page-banner-olaplex-en-us-can.jpg?imwidth=240 1x, https://www.sephora.com/contentimages/promo/beautyoffers/2025/January/2025-1-14-vib-r-gifts-site-desktop-mobile-app-beauty-offers-page-banner-olaplex-en-us-can.jpg?imwidth=480 2x',
      title: 'Complimentary Olaplex',
      description: 'Get visibly stronger and healthier strands with this hair-care set.',
      footer: 'Online only. Exclusions/terms apply.',
      buttonText: 'Apply',
    },
    {
      tag: 'NEW',
      img: 'https://www.sephora.com/contentimages/promo/beautyoffers/2025/January/2025-jan-skin-story-site-desktop-mobile-app-beauty-offers-page-banner-sample-bag-1000x750-us-3110.jpg?imwidth=240 1x, https://www.sephora.com/contentimages/promo/beautyoffers/2025/January/2025-jan-skin-story-site-desktop-mobile-app-beauty-offers-page-banner-sample-bag-1000x750-us-3110.jpg?imwidth=480 2x',
      title: 'Free Skincare Sample Set',
      description: 'Featuring routine essentials from Glow Recipe, Summer Fridays & more.',
      footer: 'In store & online. Exclusions/terms apply.',
      buttonText: 'See details',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? offers.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCards) % offers.length);
  };

  const handleCardClick = (offer) => {
    navigate('/productbeauty-details', { state: { offer } }); // Navigate with offer details
  };

  // Get the visible offers
  const visibleOffers = [
    ...offers.slice(currentIndex, currentIndex + visibleCards),
    ...offers.slice(0, Math.max(0, (currentIndex + visibleCards) - offers.length)),
  ];

  return (
    <div className="offers-container">
      <h2>Beauty Offers ({offers.length})</h2>
      <div className="slider-wrapper">
        <button
          className="prev-button"
          onClick={handlePrev}
          aria-label="Previous offer"
        >
          &lt;
        </button>
        <div className="slider">
          {visibleOffers.map((offer, index) => (
            <div
              key={index}
              className="card active"
              onClick={() => handleCardClick(offer)} // Navigate on card click
            >
              <div className={`offer-tag ${offer.tag.toLowerCase().replace(/[\s+]/g, '-')}`}>
                {offer.tag}
              </div>
              <img src={offer.img} alt={`Offer ${index + 1}`} />
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <p>{offer.footer}</p>
              <button>{offer.buttonText}</button>
            </div>
          ))}
        </div>
        <button
          className="next-button"
          onClick={handleNext}
          aria-label="Next offer"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BeautyOffersSlider;
