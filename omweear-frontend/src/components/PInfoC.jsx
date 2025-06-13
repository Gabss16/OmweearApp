import React from 'react';

const ProductInfoCard = () => {
  return (
    <div className="product-info w-full max-w-md p-6 bg-white rounded-2xl shadow-md text-gray-800">
      <h2 className="text-2xl font-bold mb-2">Airlift Intrigue Bra</h2>
      <p className="text-xl text-pink-600 font-semibold mb-4">$23.00</p>
      <p className="text-sm mb-4">
        Sujetador deportivo de alto rendimiento diseñado para ofrecer soporte y comodidad durante tus entrenamientos. Está confeccionado con la tela Airlift, que es de alta compresión y proporciona un ajuste ceñido y favorecedor.
      </p>
      <ul className="list-disc list-inside text-sm mb-6 space-y-1">
        <li>Cuello redondo: Diseño simple pero favorecedor.</li>
        <li>Tirantes ajustables: Se cruzan en la espalda para un mayor soporte.</li>
        <li>Corte con abertura: Detalle en la espalda que añade un toque de estilo.</li>
      </ul>
      <button className="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfoCard;
