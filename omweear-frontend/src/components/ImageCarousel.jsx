import React from 'react';
import '../styles/ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  return (
    <div className="carousel">
      <img src={images[0]} alt="product" className="carousel-image" />
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span key={i} className="dot" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
