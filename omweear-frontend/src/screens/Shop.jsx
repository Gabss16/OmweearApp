import React from 'react';
import '../styles/Shop.css';
import modelImage from '../images/header.png';
import SidebarMenu from '../components/SidebarMenu';
import ProductCard from '../components/CardProduct';
import arrival1 from '../images/arrival1.jfif';
import arrival2 from '../images/arrival2.jfif';
import arrival3 from '../images/arrival3.jfif';






const Shop = () => {
    const products = [
      { id: 1, imageUrl: arrival1, price: 23.00 },
      { id: 2, imageUrl: arrival3, price: 23.00 },
      { id: 3, imageUrl: arrival2, price: 23.00 },
      { id: 4, imageUrl: arrival1, price: 23.00 },
      { id: 5, imageUrl: arrival3, price: 23.00 },
      { id: 6, imageUrl: arrival2, price: 23.00 },
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
      <div className="shop-container">
      <SidebarMenu />


      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
          key={product.id}
          id={product.id}
          imageUrl={product.imageUrl}
          price={product.price}
        />
        ))}
      </div>
    </div>
     
    </>
  );
};


export default Shop;

