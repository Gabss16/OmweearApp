// src/components/Header.jsx
import React from 'react';
import '../styles/Home.css';
import modelImage from '../images/header1.png'; 
import img1 from '../images/img1.jpg'; 
import img2 from '../images/img2.jpg'; 
import img3 from '../images/img3.jpg'; 
import img4 from '../images/img4.jpg'; 
import arrival1 from '../images/arrival1.jfif'; 
import arrival2 from '../images/arrival2.jfif'; 
import arrival3 from '../images/arrival3.jfif'; 
import arrival4 from '../images/arrival4.jfif'; 
import promoPhones from '../images/phones.png'; 
import CategoryButton from '../components/CategoryButton';
import ProductCard from '../components/ProductCard';

const Header = () => {
  const newArrivals = [
    {
      image: arrival1,
      price: 23.0,
      colors: ['#1c1c2c', '#ffffff']
    },
    {
      image: arrival2,
      price: 23.0,
      colors: ['#000000', '#ffffff', '#8a8a8a']
    },
    {
      image: arrival3,
      price: 23.0,
      colors: ['#bfa88c']
    },
    {
      image: arrival4,
      price: 23.0,
      colors: ['#1c1c2c', '#ffffff']
    },
  ];

  return (
    <>
      {/* Banner principal */}
      <div className="header">
        <div className="header-text">
          <h1>OmWwear</h1>
          <p>Ríndete sobre your clothes</p>
        </div>

        <div className="header-image-container">
          <img src={modelImage} alt="model" className="header-img" />
        </div>
      </div>

      {/* CONTENIDO después del banner */}
      <div className="home-container">
        <section className="discover-section">
          <h2>Discover Shop Items</h2>
          <p>Diseños funcionales con materiales sostenibles para tus prácticas diarias</p>
          
          <div className="categories">
            <CategoryButton label="Tops" />
            <CategoryButton label="Leggins" />
            <CategoryButton label="Bodies" />
            <CategoryButton label="Hodies" />
            <CategoryButton label="Esterillas" />
            <CategoryButton label="Weight" />
          </div>

          <div className="products">
            <ProductCard 
              image= {img1} 
              title="MATCHING SETS"
              description="Diseños funcionales con materiales sostenibles"
            />
            <ProductCard 
              image={img2} 
              title="NEW ARRIVALS"
              description="Diseños funcionales con materiales sostenibles"
            />
            <ProductCard 
              image={img3} 
              title="PILATES"
              description="Diseños funcionales con materiales sostenibles"
            />
            <ProductCard 
              image={img4} 
              title="SOCKS"
              description="Diseños funcionales con materiales sostenibles"
            />
          </div>
        </section>

        {/* Sección NEW ARRIVALS */}
        <section className="new-arrivals-section">
          <h2 className="section-title">NEW ARRIVALS</h2>
          <div className="new-arrivals-grid">
            {newArrivals.map((item, index) => (
              <div key={index} className="new-arrival-card">
                <img src={item.image} alt="arrival item" className="new-arrival-img" />
                <div className="arrival-colors">
                  {item.colors.map((color, idx) => (
                    <span key={idx} className="color-dot" style={{ backgroundColor: color }}></span>
                  ))}
                </div>
                <p className="arrival-price">${item.price.toFixed(2)}</p>
                <button className="arrival-add-btn">Add</button>
              </div>
            ))}
          </div>
        </section>

        {/* Sección PROMO */}
        <section className="promo-section">
          <div className="promo-text">
            <h3>¡Lleva tu experiencia al siguiente nivel!</h3>
            <p>
              <a href="#" className="blue-link">Descarga</a> nuestra app y compra con facilidad, accede a recomendaciones personalizadas y recibe ofertas exclusivas
            </p>
          </div>
          <div className="promo-image">
            <img src={promoPhones} alt="promo phones" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
