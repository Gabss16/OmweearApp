import React, { useState } from 'react';
import '../styles/SidebarMenu.css'; // asegúrate de tener estilos

const categories = [
  'All Category',
  'Tops y sujetadores',
  'Leggings y pantalones',
  'Bags',
  'Accesorios',
  'Yoga Mats',
  'Water Bottles',
  'Hoodies',
  'Joggers y Pants',
];

const SidebarMenu = ({ categories = [], selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="sidebar-menu">
      <button
        className={`category-btn ${selectedCategory === 'All Category' ? 'active' : ''}`}
        onClick={() => setSelectedCategory('All Category')}
      >
        All Category
      </button>

      {categories.map((category) => (
        <button
          key={category._id}
          className={`category-btn ${selectedCategory === category.name ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
    </aside>
  );
};


export default SidebarMenu;
