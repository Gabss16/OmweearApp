import React from 'react';
import '../styles/Shop.css';
import modelImage from '../images/header2.png';
import SidebarMenu from '../components/SidebarMenu';
import ProductCard from '../components/CardProduct';
import arrival1 from '../images/product1.jfif';
import arrival2 from '../images/product2.jfif';
import arrival3 from '../images/product3.jfif';
import arrival4 from '../images/product4.jfif';
import arrival5 from '../images/product5.jfif';
import arrival6 from '../images/product6.jfif';






const Shop = () => {
    const products = [
      { id: 1, imageUrl: arrival1, price: 23.00 },
      { id: 2, imageUrl: arrival3, price: 23.00 },
      { id: 3, imageUrl: arrival2, price: 23.00 },
      { id: 4, imageUrl: arrival4, price: 23.00 },
      { id: 5, imageUrl: arrival5, price: 23.00 },
      { id: 6, imageUrl: arrival6, price: 23.00 },
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

