import React, { useState, useEffect } from "react";
import '../styles/ProductInfo.css';
import arrival1 from '../images/arrival1.jfif'; 
import carusel from '../images/info1.jfif'; 
import arrival2 from '../images/arrival2.jfif'; 
import arrival3 from '../images/arrival3.jfif'; 
import ImageCarousel from '../components/ImageCarousel';
import ProductInfoCard from '../components/PInfoC';
import SizeSelector from '../components/SizeSelector';
import SimilarItems from '../components/SimilarItems';
import { useParams } from "react-router-dom";
import useDataProducts from '../../../privatefrontend/src/components/Clothes/hooks/userDataProducts';

const ProductInfo = () => {


const { id: idURL } = useParams();
  const { fetchDatabyId } = useDataProducts();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (!idURL) return;
      const data = await fetchDatabyId(idURL);
      setProduct(data);
      console.log(data);
      console.log(product);
    };

    loadProduct();
  }, [idURL]);

  return (
    <div className="product-page-wrapper">
      <div className="product-container">
        <div className="product-left">
          <ImageCarousel
          image={product?.imagen}/>
        </div>
        <div className="product-right">
          <ProductInfoCard 
          product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
