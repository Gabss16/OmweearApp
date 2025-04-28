import React from 'react';
import '../styles/News.css'; 

function News() {
  const newArrivals = [
    { id: 1, name: 'Active Top', image: '/images/wear.jpg', price: '$60.00' },
    { id: 2, name: 'Basic Short', image: '/images/wear.jpg', price: '$45.00' },
    { id: 3, name: 'Astra Vest', image: '/images/wear.jpg', price: '$72.00' },
    { id: 4, name: 'Anna Cheer', image: '/images/wear.jpg', price: '$52.00' },
    { id: 5, name: 'Basic Vest', image: '/images/wear.jpg', price: '$47.00' },
    { id: 6, name: 'Astra Top', image: '/images/wear.jpg', price: '$97.00' },
    { id: 7, name: 'Heather Cheer', image: '/images/wear.jpg', price: '$62.00' },
    { id: 8, name: 'Amelia Cheer', image: '/images/wear.jpg', price: '$55.00' },
    { id: 9, name: 'Aisha Cheer', image: '/images/wear.jpg', price: '$62.00' },
    { id: 10, name: 'Astra Short', image: '/images/wear.jpg', price: '$67.00' },
    { id: 11, name: 'Basic Cheer', image: '/images/wear.jpg', price: '$47.00' },
    // ... más items
  ];

  return (
    <div className="news-section">
      <aside className="sidebar">
        <h3>Filtrar por:</h3>
        <ul>
          <li><a href="#">Tops</a></li>
          <li><a href="#">Shorts</a></li>
          <li><a href="#">Vests</a></li>
          {/* ... más filtros */}
        </ul>
      </aside>
      <div className="arrivals-grid">
        <h2 className="new-arrivals-title">New Arrivals</h2>
        {newArrivals.map(item => (
          <div key={item.id} className="arrival-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">{item.price}</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;