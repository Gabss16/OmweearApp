import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout-container">
    <div className="checkout-header"> {/* Nuevo contenedor para el título */}
      <strong><h1>CHECKOUT</h1></strong>
    </div>
      <div className="checkout-grid">
        <div className="checkout-details">
          <div className="shipping-address">
            <b><h2>Shipping Address</h2></b>
            <form className="shipping-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="streetAddress">Street Address</label>
                <input type="text" id="streetAddress" name="streetAddress" />
              </div>
              <div className="form-group">
                <label htmlFor="aptSuite">Apt, Suite, Bldg. (Optional)</label>
                <input type="text" id="aptSuite" name="aptSuite" />
              </div>
              <div className="form-row">
                <div className="form-group postal-code">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input type="text" id="postalCode" name="postalCode" />
                </div>
                <div className="form-group city-region">
                  <label htmlFor="cityRegion">Enter ZIP/Postal Code to see City and State/Region</label>
                  <input type="text" id="cityRegion" name="cityRegion" />
                </div>
              </div>
              <button type="submit" className="save-continue-button">Save & Continue</button>
            </form>
          </div>

          <div className="shipping-options">
            <h2>Shipping</h2>
            {/* Aquí irán las opciones de envío */}
            <div className="shipping-item">
              <input type="radio" id="standardShipping" name="shippingMethod" value="standard" />
              <label htmlFor="standardShipping">Standard Shipping - $12.00</label>
            </div>
            {/* ... más opciones de envío ... */}
          </div>

          <div className="gift-message-section">
            <h2>Gift Message</h2>
            <textarea placeholder="Optional: Add a gift message"></textarea>
          </div>

          <div className="payment-method-section">
            <h2>Payment Method</h2>
            {/* Aquí irán las opciones de pago */}
            <div className="payment-option">
              <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" />
              <label htmlFor="creditCard">Credit Card</label>
              {/* Campos para tarjeta */}
            </div>
            <div className="payment-option">
              <input type="radio" id="paypal" name="paymentMethod" value="paypal" />
              <label htmlFor="paypal">PayPal</label>
            </div>
            {/* ... más métodos de pago ... */}
          </div>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {/* Items del carrito */}
            <div className="item">
              <span>Merchandise Subtotal</span>
              <span>$00.00</span>
            </div>
            <div className="item">
              <span>Shipping & Handling</span>
              <span>$0.00</span>
            </div>
          </div>
          <div className="summary-totals">
            <div className="total-line">
              <span>Estimated Total</span>
              <span className="total-amount">$0.0</span>
            </div>
            <p className="includes-tax">Includes applicable taxes</p>
          </div>
          <div className="promo-code">
            <label htmlFor="promoCode">Have a promo code?</label>
            <input type="text" id="promoCode" name="promoCode" placeholder="Enter code" />
            <button className="apply-button">APPLY</button>
          </div>
          <button className="place-order-button">SECURE CHECKOUT</button>
          <div className="accepted-payments">
            <p>Accepted Payment Methods:</p>
            <p>Visa | MasterCard | (BIC) | PayPal | Banco Agricola | Google Pay</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;