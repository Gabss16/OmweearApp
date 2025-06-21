// src/components/CardProduct.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CardProduct.css"; // asegúrate que exista

const CardProduct = ({ producto }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const idProducto = producto.id
    const idCliente = "67dd8af16db770c39f5b4702"
    console.log("Cliente", idCliente)
    navigate("/shoppingcart");
  };

   const handleProductInfo = () => {
    navigate(`/shop/${producto.id}`);
  };

  return (
    <div className="product-card" onClick={handleProductInfo}>
      <img src={producto.imagen} alt="product" className="product-img" />
      <p>{producto.name}</p>
      <p className="product-price">${producto.price.toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default CardProduct;
