import React from "react";
import "./OrderCard.css";

const CardOrder = ({ order, markAsDelivered, showDetails }) => {
  if (!order) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  // Opcional: lógica para colores de estado
  const statusColors = {
    pendiente: "#facc15", // amarillo
    entregado: "#4ade80", // verde
    cancelado: "#f87171", // rojo
  };

  const statusColor = statusColors[order.status?.toLowerCase()] || "#a1a1aa";

  return (
    <div className="order-card">
      <div className="order-header">
        <div className="user-icon">{order.userInitial || "U"}</div>
        <div>
          <h4>{order.userName}</h4>
          <p>Orden #{order.orderNumber}</p>
        </div>
        <span className="status-badge" style={{ backgroundColor: statusColor }}>
          {order.status}
        </span>
      </div>

      <hr />

      <div className="order-items-header">
        <span>Productos</span>
        <span>Cant</span>
        <span>Precio</span>
      </div>
      {/*
aqui se cambio el 
order.items por order.shoppingCart_id?.products que es lo que realmente contiene los productos
*/}
      {order.shoppingCart_id?.products?.map((item, index) => (
        <div className="order-item" key={index}>
          <span>{item.productDetails?.name || item.idProducts}</span>
          <span>{item.quantity}</span>
          <span>{item.subtotal}</span>
        </div>
      ))}

      <hr />

      <div className="order-total">
        <strong>Total</strong>
        <strong>{order.total}</strong>
      </div>

      <div className="order-actions">
        <button onClick={() => showDetails(order)}>Ver detalles</button>
        <button onClick={() => markAsDelivered(order._id)}>
          Marcar como entregado
        </button>
      </div>
    </div>
  );
};

export default CardOrder;
