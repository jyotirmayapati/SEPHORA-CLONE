import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Navbar.css";
import { useBasket } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { basketItems } = useBasket();
  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (
      !e.target.closest(".dropdown-menu") &&
      !e.target.closest(".navbar-item") &&
      !e.target.closest(".popup-container")
    ) {
      setShowDropdown(false);
      setShowCreateAccount(false);
      setShowAccountDetails(false);
      setShowSignInPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleCreateAccount = () => {
    setShowCreateAccount(true);
    setShowAccountDetails(false);
    setShowSignInPopup(false);
  };

  const handleContinue = () => {
    setShowCreateAccount(false);
    setShowAccountDetails(true);
  };

  const handleSignInClick = (e) => {
    e.stopPropagation();
    setShowSignInPopup(true);
    setShowCreateAccount(false);
    setShowAccountDetails(false);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccessMessage("Sign In successful!");
        setFirstName(response.data.user.firstName);
        setShowSignInPopup(false);
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user to localStorage
        setTimeout(() => setSuccessMessage(""), 2000);
      }
    } catch (err) {
      console.error(err.response?.data?.message || "Error signing in");
      setSuccessMessage("Invalid credentials. Please create an account.");
      setTimeout(() => setSuccessMessage(""), 2000);
    }
  };

  const handleAccountCreation = async (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const password = e.target.elements[3].value;
    const phone = e.target.elements[4].value;

    try {
      const response = await axios.post("http://localhost:5000/api/users/register", {
        firstName,
        lastName,
        email,
        password,
        phone,
      });

      if (response.status === 201) {
        setSuccessMessage("Account created successfully!");
        setShowAccountDetails(false);
        setEmail("");
        setFirstName(response.data.user.firstName);
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user to localStorage
        setTimeout(() => setSuccessMessage(""), 2000);
      }
    } catch (err) {
      console.error(err.response?.data?.message || "Error creating account");
      setSuccessMessage("Error creating account");
      setTimeout(() => setSuccessMessage(""), 2000);
    }
  };

  const handleSignOut = () => {
    setFirstName("");
    setShowDropdown(false);
    localStorage.removeItem("user"); // Remove user from localStorage
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFirstName(user.firstName);
    }
  }, []);

  return (
    <div>
      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="navbar-banner">
        Get 50% off<span className="superscript">a</span> top skincare, now
        through 1/17. <span className="superscript">a</span>While supplies last.{' '}
        <a href="/shop" className="navbar-banner-link">SHOP NOW</a>
      </div>

      <div className="navbar-container">
        <div className="navbar-logo">SEPHORA</div>

        <div className="navbar-search">
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        <div className="navbar-right">
          <div className="navbar-item">
            <i className="fa fa-store"></i>
            <span>Stores & Services</span>
          </div>
          <div className="navbar-item">
            <i className="fa fa-users"></i>
            <span>Community</span>
          </div>
          <div
            className="navbar-item"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <i className="fa fa-user-circle"></i>
            <span>{firstName || "Sign In"}</span>
          </div>
          <div className="navbar-item">
            <i className="fa fa-heart"></i>
          </div>
          <div className="navbar-item" onClick={() => navigate("/cart")}>
            <i className="fa fa-shopping-cart"></i>
            <span>{basketItems.length}</span> {/* Display total number of items */}
          </div>
        </div>
      </div>

      {/* <div className="navbar-categories">
        <span>New</span>
        <span>Brands</span>
        <span>Makeup</span>
        <span>Skincare</span>
        <span>Hair</span>
        <span>Fragrance</span>
        <span>Tools & Brushes</span>
        <span>Bath & Body</span>
        <span>Mini Size</span>
        <span>Beauty Under $20</span>
        <span>Gifts & Gift Cards</span>
        <span>Sale & Offers</span>
      </div> */}

      {showDropdown && (
        <div className="dropdown-menu">
          {firstName ? (
            <button className="signout-button" onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <>
              <p>Good morning, Beautiful. 🌞</p>
              <button
                className="signin-button"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
              <button
                className="create-account-button"
                onClick={handleCreateAccount}
              >
                Create Account
              </button>
              <hr />
              <ul>
                <li>Beauty Preferences</li>
                <li>Beauty Insider Summary</li>
                <li>Rewards Bazaar</li>
                <li>Beauty Insider Challenges</li>
                <li>Buy It Again</li>
                <li>Orders</li>
                <li>Auto-Replenish</li>
              </ul>
            </>
          )}
        </div>
      )}

      {showSignInPopup && (
        <div className="popup-container">
          <div className="popup">
            <button
              className="close-button"
              onClick={() => setShowSignInPopup(false)}
            >
              ✕
            </button>
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="popup-input"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="popup-input"
                required
              />
              <button type="submit" className="popup-button">Sign In</button>
            </form>
            <p>
              Don't have an account?{' '}
              <button
                className="popup-link"
                onClick={handleCreateAccount}
              >
                Create Account
              </button>
            </p>
          </div>
        </div>
      )}

      {showCreateAccount && (
        <div className="popup-container">
          <div className="popup">
            <button
              className="close-button"
              onClick={() => setShowCreateAccount(false)}
            >
              ✕
            </button>
            <h2>Create Account</h2>
            <h3>Beauty INSIDER</h3>
            <p>
              Join the Beauty Insider loyalty program. Earn points, get FREE
              standard shipping, redeem rewards, and more.
            </p>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="popup-input"
            />
            <button
              className="popup-button"
              onClick={handleContinue}
            >
              Continue
            </button>
            <p>
              Already have an account?{' '}
              <button
                className="popup-link"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      )}

      {showAccountDetails && (
        <div className="popup-container">
          <div className="popup">
            <button
              className="close-button"
              onClick={() => setShowAccountDetails(false)}
            >
              ✕
            </button>
            <h2>Create An Account</h2>
            <h3>Beauty INSIDER</h3>
            <form onSubmit={handleAccountCreation}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="popup-input"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="popup-input"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                readOnly
                className="popup-input"
              />
              <input
                type="password"
                placeholder="Password (6 to 12 characters)"
                className="popup-input"
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="popup-input"
                required
              />
              <button type="submit" className="popup-button">
                Join Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
