import React from 'react';
import '../styles/PInfoC.css';

const ProductInfoCard = () => {
  return (
    <div className="product-info">
      <h2>Airlift Intrigue Bra</h2>
      <p className="price">$23.00</p>
      <p className="description">
        Sujetador deportivo de alto rendimiento diseñado para ofrecer soporte y comodidad durante tus entrenamientos. Está confeccionado con la tela Airlift, que es de alta compresión y proporciona un ajuste ceñido y favorecedor.
      </p>
      <ul>
        <li>Cuello redondo: Diseño simple pero favorecedor.</li>
        <li>Tirantes ajustables: Se cruzan en la espalda para un mayor soporte.</li>
        <li>Corte con abertura: Detalle en la espalda que añade un toque de estilo.</li>
      </ul>
      <button className="add-to-cart">ADD TO CHART</button>
    </div>
  );
};

export default ProductInfoCard;
