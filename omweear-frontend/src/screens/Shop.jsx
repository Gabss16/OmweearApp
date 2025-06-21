import React from 'react';
import '../styles/Shop.css';
import modelImage from '../images/header2.png';
import SidebarMenu from '../components/SidebarMenu';
import ProductCard from '../components/CardProduct';
import useDataProducts from '../../../privatefrontend/src/components/Clothes/hooks/userDataProducts';





const Shop = () => {
  const {products} = useDataProducts() 

  return (
    <>
      {/* Banner principal */}
      <div className="header">
        <div className="header-text">
          <h1>OmWeear</h1>
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
          key={product._id}
          id={product._id}
          producto={product}
        />
        ))}
      </div>
    </div>
     
    </>
  );
};


export default Shop;

