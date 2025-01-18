import React from "react";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-topbar">
        <div className="topbar-item">Find a Store <span>Choose Your Store</span></div>
        <div className="topbar-item">Customer Service <span>Available</span></div>
        <div className="topbar-item">Get the App <span>Download Now</span></div>
        <div className="topbar-item">Get Sephora Text Alerts <span>Sign up Now</span></div>
        <div className="topbar-item">Sephora Credit Card Program <span>DETAILS</span></div>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h4>About Sephora</h4>
          <ul>
            <li>About Sephora</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Sephora Values</li>
            <li>Supply Chain Transparency</li>
            <li>Affiliates</li>
            <li>Sephora Events</li>
            <li>Gift Cards</li>
            <li>Sephora Global Sites</li>
            <li>Diversity, Equity & Inclusion</li>
            <li>Sephora Accelerate</li>
            <li>Beauty (Re)Purposed</li>
            <li>Report a Vulnerability</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>My Sephora</h4>
          <ul>
            <li>Beauty Insider</li>
            <li>Sephora Credit Card</li>
            <li>Community Profile</li>
            <li>Order Status</li>
            <li>Purchase History</li>
            <li>Account Settings</li>
            <li>Beauty Advisor Recommendations</li>
            <li>Auto-Replenishment</li>
            <li>Beauty Offers</li>
            <li>Buying Guides</li>
            <li>Rewards Bazaar</li>
            <li>Loves</li>
            <li>Book a Reservation</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>Customer Service</li>
            <li>Returns & Exchanges</li>
            <li>Delivery and Pickup Options</li>
            <li>Shipping</li>
            <li>Billing</li>
            <li>International Shipments</li>
            <li>Beauty Services FAQ</li>
            <li>Sephora at Kohl's</li>
            <li>Sephora at Hearst</li>
            <li>Store Locations</li>
            <li>Online Ordering</li>
            <li>Flexible Payments</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Region & Language</h4>
          <ul>
            <li>United States - English</li>
            <li>Canada - English</li>
            <li>Canada - Français</li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>We Belong to Something Beautiful</h4>
          <div className="signup-section">
            <label>Sign up for Sephora text updates</label>
            <div className="signup-input">
              <input type="text" placeholder="Mobile Phone Number" />
              <button>Continue</button>
            </div>
            <label>Sign up for Sephora Emails</label>
            <div className="signup-input">
              <input type="email" placeholder="Enter your email address" />
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottombar">
        <ul className="footer-links">
          <li>© 2025 Sephora USA, Inc. All rights reserved.</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Accessibility</li>
          <li>Sitemap</li>
          <li>Your Privacy Choices</li>
        </ul>
        <ul className="social-icons">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>X</li>
          <li>Snapchat</li>
          <li>YouTube</li>
          <li>Pinterest</li>
          <li>TikTok</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
