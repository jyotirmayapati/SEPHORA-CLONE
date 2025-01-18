import React from "react";
import "../styles/CartPage.css";
import { useBasket } from "../context/BasketContext";

const CartPage = () => {
  const {
    basketItems,
    totalBasketValue,
    totalItems,
    updateQuantity,
    removeFromBasket,
  } = useBasket();

  return (
    <div className="cart-container">
      <h1>Shipping and Delivery Basket ({totalItems})</h1>
      {basketItems.length === 0 ? (
        <div className="empty-cart">
          <div className="shipping-banner">
            <p>Beauty Insiders enjoy FREE Standard Shipping on all orders.</p>
            <button className="sign-in-button">Sign In</button>
          </div>
          <p>Your basket is currently empty.</p>
          <p>Please sign in if you are trying to retrieve a previously created basket.</p>
          <button className="sign-in-button">Sign In</button>
        </div>
      ) : (
        <div className="cart-content">
          {/* Basket Items */}
          <div className="cart-items">
            {basketItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name || "Product"} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.name || "Unnamed Product"}</h2>
                  <p>Price: {item.price}</p>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="remove-item" onClick={() => removeFromBasket(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Summary Section */}
          <div className="summary-section">
            <div className="order-summary">
              <h2>Subtotal</h2>
              <p>${totalBasketValue.toFixed(2)}</p>
              <h3>Estimated Total</h3>
              <p>${totalBasketValue.toFixed(2)}</p>
              <button className="checkout-button">Checkout</button>
            </div>

            <div className="gift-card-section">
              <h3>Add a Sephora Gift Card</h3>
              <select>
                <option>$50</option>
                <option>$100</option>
                <option>$150</option>
              </select>
              <button>Add</button>
            </div>

            <div className="benefits-section">
              <h3>Beauty Insider Benefits</h3>
              <p>Sign in to see your points and redeem rewards.</p>
              <button>Sign In</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
