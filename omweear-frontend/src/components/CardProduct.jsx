  import React from 'react';
  import { useNavigate } from 'react-router-dom';

  const ProductCard = ({ id, imageUrl, price }) => {
    const navigate = useNavigate();

    const handleViewClick = () => {
      navigate(`/shop/${id}`);
    };

    return (
      <div className="product-card">
        <img src={imageUrl} alt="Product" className="product-image" />
        
        <div className="colors">
          <span className="dot navy"></span>
          <span className="dot black"></span>
          <span className="dot gray"></span>
        </div>

        <p className="price">${price}</p>

        <div className="buttons">
          <button className="add-to-cart">Add to Chart</button> 
          <button className="buy-now" onClick={handleViewClick}>View</button>
        </div>
      </div>  
    );
  };

  export default ProductCard;
