import React, { useEffect } from 'react';
import './ShoppingCart.css';
import useUserDataCart from "../components/Cart/useDataCard";
import useUserDataSale from "../components/Sale/useUserDataSale";

function ShoppingCart() {
  const userId = "685c1f6eb01d24d49e337b3c";
  const { cart, fetchCart, removeFromCart } = useUserDataCart(userId);

  const {
    address,
    setAddress,
    isCheckout,
    setIsCheckout,
    createSale,
  } = useUserDataSale();

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleProceedCheckout = () => {
    setIsCheckout(true);
  };

  const handleConfirmPurchase = async () => {
  if (!address.trim()) {
    alert("Debes ingresar una dirección");
    return;
  }

  console.log("📦 Ejecutando createSale con:", cart._id); // 🔍 Verifica

  await createSale(cart._id);
  alert("✅ Tu pedido está en proceso");
  setAddress("");
  setIsCheckout(false);
};

  if (!cart || !cart.products) return <p>Loading cart...</p>;

  const subtotal = cart.total || 0;
  const estimatedShipping = 5.0;
  const discount = 0;
  const estimatedTotal = subtotal + estimatedShipping - discount;

  return (
    <div className="shopping-cart-container">
      <div className="cart-header">
        <h1>Shopping Bag</h1>
      </div>

      {cart.products.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div className="cart-grid">
          <div className="cart-items">
            {cart.products.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="item-image">
                  <img
                    src={item.productId?.imagen || "/placeholder.jpg"}
                    alt={item.productId?.name || "Producto"}
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                </div>
                <div className="item-details">
                  <h3 className="item-name">{item.productId.name}</h3>
                  <p className="item-info">Qty: {item.quantity}</p>
                  <p className="item-price">${item.productId.price.toFixed(2)}</p>
                </div>
                <div className="item-subtotal">
                  ${(item.subtotal).toFixed(2)}
                </div>
                <button className="remove-item" onClick={() => handleRemove(item.productId._id)}>
                  Remove
                </button>
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
            <div className="summary-line total">
              <span>Estimated Total</span>
              <span>${estimatedTotal.toFixed(2)}</span>
            </div>

            {!isCheckout ? (
              <button className="checkout-button" onClick={handleProceedCheckout}>
                Proceed to Checkout
              </button>
            ) : (
              <>
                <input
                  type="text"
                  value={address}
                  placeholder="Enter your address"
                  onChange={(e) => setAddress(e.target.value)}
                  className="address-input"
                />
                <button className="confirm-button" onClick={handleConfirmPurchase}>
                  Confirm Purchase
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
