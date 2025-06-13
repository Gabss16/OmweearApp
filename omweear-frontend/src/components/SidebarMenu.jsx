import React, { useState } from 'react';
import '../styles/SidebarMenu.css'; // asegúrate de tener estilos

const categories = [
  'All Category',
  'Leggings',
  'Tops',
  'High Waist',
  'Scrunch',
  'Accesories',
  'Complemets',
];

const SidebarMenu = () => {
  const [activeCategory, setActiveCategory] = useState('All Category');

  return (
    <aside className="sidebar-menu">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </aside>
  );
};

export default SidebarMenu;
