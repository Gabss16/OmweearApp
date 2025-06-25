import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CardProduct.css";
import useUserDataCart from "./Cart/useDataCard"; // ⚠️ importa bien según tu estructura

const CardProduct = ({ producto }) => {
  const navigate = useNavigate();
  const userId = "685c1f6eb01d24d49e337b3c"; // 🧪 de prueba, luego usar auth real
  const {
    addToCart,
    loadingCart
  } = useUserDataCart(userId);

  const handleAddToCart = async (e) => {
    e.stopPropagation(); // evita que se dispare el onClick del contenedor
    try {
      await addToCart(producto._id, 1);
      navigate("/shoppingcart"); // redirige al carrito
    } catch (err) {
      console.error("Error al agregar al carrito:", err);
    }
  };

  const handleProductInfo = () => {
    navigate(`/shop/${producto._id}`);
  };

  return (
    <div className="product-card" onClick={handleProductInfo}>
      <img src={producto.imagen} alt="product" className="product-img" />
      <p>{producto.name}</p>
      <p className="product-price">${producto.price.toFixed(2)}</p>
      <button
        className="add-to-cart-btn"
        onClick={handleAddToCart}
        disabled={loadingCart}
      >
        {loadingCart ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
};

export default CardProduct;
