// src/components/ProductCard.jsx
import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductCard;
