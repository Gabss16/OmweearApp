// src/components/ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ image, title, description }) => {
  const navigate = useNavigate();

  const CategoryButton = () => {
    navigate('/shop');
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <button className="add-to-cart-btn" onClick={CategoryButton}>
        More
      </button>
    </div>
  );
};

export default ProductCard;
