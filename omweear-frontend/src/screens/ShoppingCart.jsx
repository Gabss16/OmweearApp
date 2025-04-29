import React from 'react';
import './ShoppingCart.css';

function ShoppingCart() {
  const cartItems = [
    { id: 1, name: 'Active Top', image: 'https://i.pinimg.com/736x/39/00/1b/39001b371f2026aefd22b9b410f46372.jpg', size: 'S', color: 'Black', price: 25.00, quantity: 1 },
    { id: 2, name: 'Comfy Leggins', image: 'https://i.pinimg.com/736x/6b/07/75/6b07756dc8c951b4ce9882ecc8ffbd04.jpg', size: 'M', color: 'Gray', price: 39.00, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const estimatedShipping = 5.00;
  const discount = 0;
  const estimatedTotal = subtotal + estimatedShipping - discount;

  return (
    <div className="shopping-cart-container">
      <div className="cart-header"> {/* Banner del carrito */}
        <h1>Shopping Bag</h1>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div className="cart-grid"> {/* Contenedor principal de los items y el resumen */}
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-info">Size: {item.size}, Color: {item.color}</p>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="item-quantity">
                  <label htmlFor={`quantity-${item.id}`}>Qty:</label>
                  <input type="number" id={`quantity-${item.id}`} name={`quantity-${item.id}`} value={item.quantity} min="1" />
                </div>
                <div className="item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button className="remove-item">Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-line">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Estimated Shipping</span>
              <span>${estimatedShipping.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="summary-line discount">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="summary-line total">
              <span>Estimated Total</span>
              <span>${estimatedTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}

      <div className="recommended-accessories">
        <h2>RECOMMENDED ACCESSORIES</h2>
        <div className="accessories-grid">
          {/* ... accesorios recomendados ... */}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;