import React from 'react';
import '../styles/News.css'; 
//import Footer from "../../components/Footer";
//import wearImage from '../../assets/wear.jpg';

function News() {
  const newArrivals = [
    { id: 1, name: 'Active Top', image: 'https://i.pinimg.com/736x/20/07/11/2007115d2e3ad7fa56ef22b1de8d900a.jpg', price: '$60.00' },
    { id: 2, name: 'Basic Short', image: 'https://i.pinimg.com/736x/c5/bd/88/c5bd88109acd889644db02b85a6ff42d.jpg', price: '$45.00' },
    { id: 3, name: 'Astra Vest', image: 'https://i.pinimg.com/736x/23/bb/c2/23bbc2cdb1b4c2a891dfb55c171d5b10.jpg', price: '$72.00' },
    { id: 4, name: 'Anna Cheer', image: 'https://i.pinimg.com/736x/7b/6b/f4/7b6bf4e63b22e7e842f04a2f9916d33b.jpg', price: '$52.00' },
    { id: 5, name: 'Basic Vest', image: 'https://i.pinimg.com/736x/a6/27/24/a6272467222b89ed9a2e8b8c26167e8c.jpg', price: '$47.00' },
    { id: 6, name: 'Astra Top', image: 'https://i.pinimg.com/736x/6a/f2/f6/6af2f67d5aa2416a797c0b04b9a1b7b5.jpg', price: '$97.00' },
    { id: 7, name: 'Heather Cheer', image: 'https://i.pinimg.com/736x/65/01/a1/6501a1077d2f5d4af55250b128e02f50.jpg', price: '$62.00' },
    { id: 8, name: 'Amelia Cheer', image: 'https://i.pinimg.com/736x/7f/4e/62/7f4e622c936847a02f1ea8265723fc82.jpg', price: '$55.00' },
    { id: 9, name: 'Aisha Cheer', image: 'https://i.pinimg.com/736x/f6/35/e4/f635e4cf343b48c14e5fb462e6aa5f30.jpg', price: '$62.00' },
    { id: 10, name: 'Astra Short', image: 'https://i.pinimg.com/736x/7b/11/ec/7b11ec8c799cab7c47dc10efefd13460.jpg', price: '$67.00' },
    { id: 11, name: 'Basic Cheer', image: 'https://i.pinimg.com/736x/95/23/4b/95234b373a78753fbdae59ec298c0008.jpg', price: '$47.00' },
    { id: 12, name: 'Pilates Ring', image: 'https://i.pinimg.com/736x/8d/0d/27/8d0d27470b8ee931daac7ed023b70467.jpg', price: '$32.00' },
  { id: 13, name: 'Yoga Block', image: 'https://i.pinimg.com/736x/ba/3d/a0/ba3da02f5ae2b7091d12f05427a8cd5d.jpg', price: '$18.00' },
  ];

  const groupProducts = (arr, size) => {
    const grouped = [];
    for (let i = 0; i < arr.length; i += size) {
      grouped.push(arr.slice(i, i + size));
    }
    return grouped;
  };

  const productColumns = groupProducts(newArrivals, 3);

  return (
    
    <div className="news-section">
      <aside className="sidebar">
        <h3>All New:</h3>
        <ul>
          <li><a href="#">New Tops</a></li>
          <li><a href="#">Trendy</a></li>
          <li><a href="#">Shorts</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Leggins</a></li>


        </ul>
      </aside>
      <div className="arrivals-container">
      <div className="arrivals-header">
        <h1>New Arrivals</h1>
      </div>
      <div className="arrivals-columns">
          {productColumns.map((column, index) => (
            <div key={index} className="arrival-column">
              {column.map(item => (
                <div key={item.id} className="arrival-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name}/>
                  </div>
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">{item.price}</p>
                  <button className="buy-now-button">Buy Now</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default News;