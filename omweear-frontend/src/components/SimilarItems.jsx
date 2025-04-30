import React from 'react';
import '../styles/SimilarItems.css';

const SimilarItems = ({ items }) => {
  return (
    <div className="similar-items">
      <h3>SIMILAR ITEMS</h3>
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.image} alt="similar item" />
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarItems;
