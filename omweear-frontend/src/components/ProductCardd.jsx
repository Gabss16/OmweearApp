// components/ProductCard.jsx
import React from 'react';
import './ProductCardd.css'; // Si decides usar CSS

const ProductCard = ({ image, price, colors }) => {
  return (
    <div className="product-card">
      <img src={image} alt="item" className="product-image" />
      <div className="color-dots">
        {colors.map((color, index) => (
          <span
            key={index}
            className="dot"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <p className="price">${price.toFixed(2)}</p>
      <button className="add-button">Add</button>
    </div>
  );
};

export default ProductCard;
