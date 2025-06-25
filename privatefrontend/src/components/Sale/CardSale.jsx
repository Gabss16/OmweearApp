import React from "react";
import "./OrderCard.css";

const CardOrder = ({ order, markAsDelivered, showDetails }) => {
  if (!order) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  const statusColors = {
    pendiente: "#facc15",
    entregado: "#4ade80",
    cancelado: "#f87171",
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
        <span>Producto</span>
        <span>Cant</span>
        <span>Precio</span>
      </div>

      {order.shoppingCart_id?.products?.map((item, index) => {
  const p = item.productDetails;

  return (
    <div className="order-item full-details" key={index}>
      <div className="product-info">
        {p?.imagen && (
          <img
            src={p.imagen}
            alt={p.name}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "8px",
              marginRight: "10px",
            }}
          />
        )}
        <div>
          <strong>{p?.name}</strong>
          <p className="text-sm text-gray-600">{p?.description}</p>
          <p className="text-xs text-gray-500">Categoría: {p?.idCategory?.name}</p>
          <p className="text-xs text-gray-500">Marca: {p?.idBrand?.name}</p>
          <p className="text-xs text-gray-500">Proveedor: {p?.idSupplier?.name}</p>
          <p className="text-xs text-gray-500">Talles: {p?.sizesAvailable?.join(", ")}</p>
          <p className="text-xs text-gray-500">Precio unitario: ${p?.price}</p>
        </div>
      </div>

      <div className="product-meta">
        <span>{item.quantity}</span>
        <span>${(p?.price * item.quantity).toFixed(2)}</span>
      </div>
    </div>
  );
})}

      <hr />

      <div className="order-total">
        <strong>Total</strong>
        <strong>${order.total}</strong>
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
