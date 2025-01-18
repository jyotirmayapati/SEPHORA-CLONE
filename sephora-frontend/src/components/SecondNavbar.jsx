import React, { useState, useRef } from "react";
import "../styles/SecondNavbar.css";

const SecondNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownAlign, setDropdownAlign] = useState(""); // Store alignment class
  const navbarRef = useRef(null);

  const handleMouseEnter = (item, event) => {
    setActiveDropdown(item);

    // Calculate dropdown position
    const navbarBounds = navbarRef.current.getBoundingClientRect();
    const dropdownBounds = event.target.getBoundingClientRect();

    if (dropdownBounds.left < navbarBounds.left + 50) {
      setDropdownAlign("left-align");
    } else if (dropdownBounds.right > navbarBounds.right - 50) {
      setDropdownAlign("right-align");
    } else {
      setDropdownAlign("");
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setDropdownAlign("");
  };

  return (
    <div className="second-navbar-container">
      <div className="second-navbar" ref={navbarRef}>
        {[
          "New",
          "Brands",
          "Makeup",
          "Skincare",
          "Hair",
          "Fragrance",
          "Tools & Brushes",
          "Bath & Body",
          "Mini Size",
          "Beauty Under $20",
          "Gifts & Gift Cards",
          "Sale & Offers",
        ].map((item, index) => (
          <span
            key={index}
            className="second-navbar-item"
            onMouseEnter={(e) => handleMouseEnter(item, e)}
            onMouseLeave={handleMouseLeave}
          >
            {item}
            {activeDropdown === item && (
              <div className={`dropdown-content ${dropdownAlign}`}>
                <div className="dropdown-column">
                  <span>All New</span>
                  <span>Just Dropped</span>
                  <span>New Makeup</span>
                  <span>New Skincare</span>
                  <span>New Hair Care</span>
                  <span>New Fragrance</span>
                  <span>New Bath & Body</span>
                  <span>New Tools & Brushes</span>
                </div>
                <div className="dropdown-column">
                  <span>The Next Big Thing</span>
                  <span>Bestsellers</span>
                  <span>Trending on Social</span>
                  <span>Refillable Beauty Products</span>
                  <span>Buying Guides</span>
                  <span>Clean Beauty</span>
                  <span>Planet Aware Beauty</span>
                  <span>FSA & HSA Eligible</span>
                </div>
                <div className="dropdown-images">
                  <div className="dropdown-image">
                    <img
                      src="https://www.sephora.com/contentimages/2025-1-15-tatcha-brightening-vitamin-c-serum-and-vitamin-c-eye-cream-site-app-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2025-1-15-tatcha-brightening-vitamin-c-serum-and-vitamin-c-eye-cream-site-app-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=630 2x" 
                      alt="Promo 1"
                    />
                    <p>The Skin You Want in 4 Steps</p>
                  </div>
                  <div className="dropdown-image">
                    <img
                      src="https://www.sephora.com/contentimages/2025-1-17-black-owned-brands-site-desktop-mobile-app-home-page-rwd-marketing-banner-800x534-en-us.jpg?imwidth=315 1x, https://www.sephora.com/contentimages/2025-1-17-black-owned-brands-site-desktop-mobile-app-home-page-rwd-marketing-banner-800x534-en-us.jpg?imwidth=630 2x" 
                      alt="Promo 2"
                    />
                    <p>That New Makeup Feeling</p>
                  </div>
                </div>
              </div>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SecondNavbar;
