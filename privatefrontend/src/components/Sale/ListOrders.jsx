import React from "react";
import CardOrder from "./CardSale";

const ListOrders = ({ orders, loading, markAsDelivered, showDetails }) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de órdenes
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando órdenes...</div>}

        {orders?.map((order) => (
          <CardOrder
            key={order._id}
            order={order}
            markAsDelivered={markAsDelivered}
            showDetails={showDetails}
          />
        ))}
      </div>
    </>
  );
};

export default ListOrders;