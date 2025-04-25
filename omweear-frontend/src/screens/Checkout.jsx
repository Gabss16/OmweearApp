import React from 'react';
import Navbar from '../components/Navbar';
import './Checkout.css'; // Si tienes estilos específicos para Checkout

function Checkout() {
  return (
    <div className="checkout-page">
      <Navbar /> {/* Aquí se renderiza el Navbar */}
      <div className="checkout-content">
        <h2>CHECKOUT</h2>
        <div className="shipping-address">
          <h3>Shipping Address</h3>
          {/* ... Tus campos de dirección de envío ... */}
        </div>
        <div className="shipping">
          <h3>Shipping</h3>
          {/* ... Información de envío ... */}
        </div>
        <div className="gift-message">
          <h3>Gift Message</h3>
          {/* ... Opción de mensaje de regalo ... */}
        </div>
        <div className="payment-method">
          <h3>Payment Method</h3>
          {/* ... Información de pago ... */}
        </div>
        {/* ... Otros elementos de tu página de Checkout ... */}
      </div>
    </div>
  );
}

export default Checkout;