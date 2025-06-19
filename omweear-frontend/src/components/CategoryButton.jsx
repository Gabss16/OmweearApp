// src/components/CategoryButton.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/CategoryButton.css"; // si usas estilos

const CategoryButton = ({ label }) => {
  return (
    <Link to="/shop" className="category-button">
      {label}
    </Link>
  );
};

export default CategoryButton;
