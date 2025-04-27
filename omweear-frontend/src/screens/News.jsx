import React from 'react';
import '../styles/News.css';

const products = [
  { id: 1, name: "Top Deportivo", price: "$29.99", img: "URL_IMG_1" },
  { id: 2, name: "Leggings", price: "$39.99", img: "URL_IMG_2" },
  { id: 3, name: "Chaqueta Yoga", price: "$49.99", img: "URL_IMG_3" },
  // Agrega más productos
];

const News = () => {
  return (
    <div className="news-container">
      {/* Banner */}
      <div className="news-banner">
        <img src="URL_BANNER" alt="Banner" className="banner-img" />
        <h1 className="banner-text">New Arrivals</h1>
      </div>

      {/* Grid de productos */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-img" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button className="product-btn">Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
