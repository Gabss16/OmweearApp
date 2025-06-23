import React from 'react';

const ProductInfoCard = ({product}) => {
  return (
    <div className="product-info w-full max-w-md p-6 bg-white rounded-2xl shadow-md text-gray-800">
      <h2 className="text-2xl font-bold mb-2">{product?.name}</h2>
      <p className="text-xl text-pink-600 font-semibold mb-4">{product?.price}</p>
      <p className="text-sm mb-4">{product?.description}
      </p>

      <button className="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfoCard;
