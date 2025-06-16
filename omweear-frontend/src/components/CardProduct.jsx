// src/components/CardProduct.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CardProduct.css"; // asegúrate que exista

const CardProduct = ({ imageUrl, price }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Lógica de agregar al carrito puede ir aquí (en el futuro)
    navigate("/shoppingcart");
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt="product" className="product-img" />
      <p className="product-price">${price.toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default CardProduct;
