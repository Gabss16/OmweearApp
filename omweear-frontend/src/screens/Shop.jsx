import React, { useEffect, useState } from 'react';
import '../styles/Shop.css';
import modelImage from '../images/header2.png';
import SidebarMenu from '../components/SidebarMenu';
import ProductCard from '../components/CardProduct';
import useDataProducts from '../../../privatefrontend/src/components/Clothes/hooks/userDataProducts';





const Shop = () => {
  const {products} = useDataProducts() 
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
        // Obtener las categorías desde la API
            fetch('http://localhost:4000/api/categories')
    .then((res) => res.json())
      .then(setCategories)
      .catch((err) => console.error('Error al obtener categorías:', err));
  }, []);


 const filteredProducts = selectedCategory === 'All Category'
    ? products
    : products.filter((product) => {
        // Validación defensiva por si `idCategory` es null
   return product.idCategory?.name === selectedCategory  });

  return (
    <>
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
      <SidebarMenu 
        categories={categories}
        selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="products-grid">
          {filteredProducts.map((product) => (
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

