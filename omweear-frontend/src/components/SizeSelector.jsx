import React from 'react';
import '../styles/SizeSelector.css';

const SizeSelector = ({ selectedSize, setSelectedSize }) => {
  const sizes = ['XXS', 'XS', 'S', 'M', 'L'];
  return (
    <div className="size-selector">
      <p>Choose size</p>
      <div className="size-options">
        {sizes.map(size => (
          <button
            key={size}
            className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
