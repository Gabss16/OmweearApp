import React from 'react';


const OrderCard = ({
  userInitial,
  userName,
  orderNumber,
  status,
  statusColor,
  items,
  total,
  onDetails,
  onDelivered,
}) => {
  return (
    <div className="order-card">
      <div className="order-header">
        <div className="user-icon">{userInitial}</div>
        <div>
          <h4>{userName}</h4>
          <p>Orden #{orderNumber}</p>
        </div>
        <span className="status-badge" style={{ backgroundColor: statusColor }}>
          {status}
        </span>
      </div>

      <hr />

      <div className="order-items-header">
        <span>Productos</span>
        <span>Cant</span>
        <span>Precio</span>
      </div>

      {items.map((item, index) => (
        <div className="order-item" key={index}>
          <span>{item.product}</span>
          <span>{item.quantity}</span>
          <span>{item.price}</span>
        </div>
      ))}

      <hr />

      <div className="order-total">
        <strong>Total</strong>
        <strong>{total}</strong>
      </div>

      <div className="order-actions">
        <button onClick={onDetails}>Ver detalles</button>
        <button onClick={onDelivered}>Marcar como entregado</button>
      </div>
    </div>
  );
};

export default OrderCard;
