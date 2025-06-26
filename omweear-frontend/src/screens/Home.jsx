// src/components/Header.jsx
import React, { useEffect, useState } from 'react';

import '../styles/Home.css';
import modelImage from '../images/hd.png'; 
import img1 from '../images/img1.jpg'; 
import img2 from '../images/img2.jpg'; 
import img3 from '../images/img3.jpg'; 
import img4 from '../images/img4.jpg'; 
import promoPhones from '../images/phones.png'; 
import CategoryButton from '../components/CategoryButton';
import ProductCard from '../components/ProductCard';

const Header = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
    try{
      const response = await fetch ("http://localhost:4000/api/products");
      const data = await response.json();
      
      //para tomar solo 5 productos
      const limited = data.reverse().slice(0,5); //Esto trae los productos mas recientes
      setNewArrivals(limited);
    }catch (error) {
      console.error("Error al traer los productos", error);
    }
  };

  fetchNewArrivals();
  }, []);

  return (
    <>
      {/* Banner principal */}
      <div className="header responsive-header">
        <div className="header-text">
          <h1>OmWeear</h1>
        </div>
        <div className="header-image-container">
          <img src={modelImage} alt="model" className="header-img" />
        </div>
      </div>

      <div className="home-container">
          {/* Sección DISCOVER */}
  <section className="discover-section">
    <h2 className="trending-title"> TRENDING NOW</h2>
    <span className="trending-subtitle">
      Diseños funcionales con materiales sostenibles para tus prácticas diarias
    </span>
          <div className="categories responsive-categories">
            <CategoryButton label="Tops" />
            <CategoryButton label="Leggins" />
            <CategoryButton label="Accesorios" />
            <CategoryButton label="Bags" />
            <CategoryButton label="Yoga Mats" />
            <CategoryButton label="Water Bottles" />
          </div>

          <div className="products responsive-products">
            <ProductCard 
              image={img1} 
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
              title="SETS"
              description="Diseños funcionales con materiales sostenibles"
            />
          </div>
        </section>

        {/* Sección NEW ARRIVALS */}
       {/* Sección NEW ARRIVALS */}
<section className="new-arrivals-section">
  <h2 className="section-title">NEW ARRIVALS</h2>
  <div className="new-arrivals-grid responsive-arrivals">
    {newArrivals.map((item, index) => (
      <div key={index} className="new-arrival-card">
        <img src={item.imagen} alt={item.name} className="new-arrival-img" />
        <div className="arrival-colors">
          {(item.colors || []).map((color, idx) => (
            <span key={idx} className="color-dot" style={{ backgroundColor: color }}></span>
          ))}
        </div>
        <p  className="arrival description"> {item.name} </p>
        <h3 className="arrival-price">${item.price.toFixed(2)}</h3>
      </div>
    ))}
  </div>
</section>


        {/* Sección PROMO */}
        <section className="promo-section responsive-promo">
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
