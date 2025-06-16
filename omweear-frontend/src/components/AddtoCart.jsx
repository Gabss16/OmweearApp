// src/components/AddToCartButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddToCartButton.css"; // si quieres estilos separados

const AddToCartButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Aquí podrías agregar lógica para agregar al carrito (más adelante)
    navigate("/shoppingcart");
  };

  return (
    <button className="add-to-cart-btn" onClick={handleClick}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
