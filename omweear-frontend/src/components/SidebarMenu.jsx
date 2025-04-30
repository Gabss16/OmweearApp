// components/SidebarMenu.jsx
import React from 'react';

const SidebarMenu = () => {
  return (
    <aside className="sidebar-menu">
      <button className="category-btn active">All Category</button>
      <button className="category-btn">Leggings</button>
      <button className="category-btn">Tops</button>
      <button className="category-btn">High Waist</button>
      <button className="category-btn">Scrunch</button>
      <button className="category-btn">Accesories</button>
      <button className="category-btn">Complemets</button>
    </aside>
  );
};

export default SidebarMenu;
