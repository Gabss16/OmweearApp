
import React from 'react';
import '../styles/CategoryButton.css';

const CategoryButton = ({ label }) => {
  return (
    <button className="category-button">
      {label}
    </button>
  );
};

export default CategoryButton;
