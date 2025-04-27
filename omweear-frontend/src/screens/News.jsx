import React from "react";
import "../styles/News.css";

export default function News() {
  return (
    <div className="news-container">
      <aside className="sidebar">
        <h3>Filtrar</h3>
        <div className="filter-group">
          <label>Tipo</label>
          <select>
            <option>Top</option>
            <option>Shorts</option>
            <option>Chaquetas</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Talla</label>
          <select>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </div>
      </aside>

      <main className="main-content">
        <div className="banner">
          <h1>New Arrivals</h1>
        </div>

        <div className="product-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="product-card">
              <img
                src="https://via.placeholder.com/300x400"
                alt="Producto"
              />
              <h4>Nombre Producto</h4>
              <p>$25.00</p>
              <button>Comprar</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
