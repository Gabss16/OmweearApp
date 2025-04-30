import React from 'react';
import './Wishlist.css'; // Crea un archivo Wishlist.css para los estilos

function Wishlist() {
  // Aquí iría la lógica para obtener los items de la lista de deseos
  const wishlistItems = [
    { id: 1, name: 'Active Top', image: 'https://i.pinimg.com/736x/a3/fb/51/a3fb51895c11cab9c2d4e7cd49cecaa9.jpg', price: '$45.00', rating: 4.5 },
    { id: 2, name: 'Basic Short', image: 'https://i.pinimg.com/736x/c5/a0/f0/c5a0f0ee5312d0823498553035a0cd50.jpg', price: '$30.00', rating: 3.8 },
    { id: 3, name: 'Trendy Leggings', image: 'https://i.pinimg.com/736x/d4/1c/0e/d41c0ebbdbaf7125103dd2ff0d03d2a2.jpg', price: '$65.00', rating: 4.9 },
    { id: 4, name: 'Comfort Bra', image: 'https://i.pinimg.com/736x/9f/6d/d9/9f6dd9e1551a3f6e032537400655ba76.jpg', price: '$38.00', rating: 4.2 },
    { id: 5, name: 'Running Shoes', image: 'https://i.pinimg.com/736x/2c/9c/ad/2c9cad166f77d3a8394e0c234c865c5a.jpg', price: '$79.00', rating: 4.6 },
    { id: 6, name: 'Yoga Mat', image: 'https://i.pinimg.com/736x/37/e7/bd/37e7bdf4f5fb9e6c7f20d82d618f25f2.jpg', price: '$25.00', rating: 4.0 },
    { id: 7, name: 'Water Bottle', image: 'https://i.pinimg.com/736x/0b/95/56/0b95560410fcbb3de0231ea6379eac60.jpg', price: '$15.00', rating: 3.5 },
    { id: 8, name: 'Fitness Tracker', image: 'https://i.pinimg.com/736x/97/96/99/979699092fc49ebabfcc3a987084ba93.jpg', price: '$89.00', rating: 4.7 },
    { id: 9, name: 'Headbands', image: 'https://i.pinimg.com/736x/0b/9d/a2/0b9da2af0b8daf8c34a4a4abe2feb4c5.jpg', price: '$12.00', rating: 4.1 },
    { id: 10, name: 'Gym Bag', image: 'https://i.pinimg.com/736x/d2/05/af/d205afde8a36a03f0eaacfa7a1da38be.jpg', price: '$55.00', rating: 4.4 },
    { id: 11, name: 'Workout Gloves', image: 'https://i.pinimg.com/736x/45/2f/1e/452f1ef325a3cbeb0719c834feaab4b4.jpg', price: '$20.00', rating: 3.9 },
    { id: 12, name: 'Protein Shaker', image: 'https://i.pinimg.com/736x/65/7f/c6/657fc625bb9a97b21dc382ec193b8089.jpg', price: '$18.00', rating: 4.3 },
    // ... más items de la lista de deseos ...
  ];

  function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
      stars += '★'; // Carácter de estrella completa
    }
    if (hasHalfStar) {
      stars += '½'; // Carácter de media estrella (puede que necesites un icono)
    }
    for (let i = 0; i < emptyStars; i++) {
      stars += '☆'; // Carácter de estrella vacía
    }
    return <span className="rating">{stars}</span>;
  }

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h1>WishList <span className="heart-icon">♥</span></h1>
      </div>
      <div className="wishlist-grid">
        {wishlistItems.map(item => (
          <div className="wishlist-item" key={item.id}>
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">{item.price}</p>
              <div className="item-rating">
                {renderStars(item.rating)}
              </div>
            </div>
            <button className="add-to-bag-button">Add to Bag</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;