import React, { useState } from "react";
import '../styles/ProductInfo.css';
import arrival1 from '../images/arrival1.jfif'; 
import arrival2 from '../images/arrival2.jfif'; 
import arrival3 from '../images/arrival3.jfif'; 
import ImageCarousel from '../components/ImageCarousel';
import ProductInfoCard from '../components/PInfoC';
import SizeSelector from '../components/SizeSelector';
import SimilarItems from '../components/SimilarItems';



const ProductInfo = () => {
    const [selectedSize, setSelectedSize] = useState('S');
  const productImages = [arrival1, arrival3, arrival2]
  const similarItems = [
    { image: arrival2, price: 23.0 },
    { image: arrival1, price: 23.0 },
    { image: arrival1, price: 23.0 },
  ];
    
    
    return (
      <div className="product-container">
      <div className="product-left">
        <ImageCarousel images={productImages} />
        <SizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      </div>
      <div className="product-right">
        <ProductInfoCard />
        <SimilarItems items={similarItems} />
      </div>
    </div>
  );

      
    
  
};

export default ProductInfo;
