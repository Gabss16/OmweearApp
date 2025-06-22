import React from 'react';
import '../styles/ImageCarousel.css';

const ImageCarousel = ({ image }) => {
  return (
    <div className="carousel">
      <img src={image} alt="product" className="carousel-image" />
    </div>
  );
};

export default ImageCarousel;
