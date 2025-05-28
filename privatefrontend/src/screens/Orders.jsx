import React, { useEffect } from "react";
import ListOrders from "../components/Sale/ListOrders";
import userDataSales from "../components/Sale/hook/userDataSales";
import { Toaster } from "react-hot-toast";

const Orders = () => {
  useEffect(() => {
    document.title = "Órdenes";
  }, []);

  const {
    sales,      // Usamos sales porque así se llama en el hook
    loading,
    fetchSales, // si lo necesitas para refrescar
    updateSaleStatus: markAsDelivered, // si tu función para marcar entrega se llama así
    // showOrderDetails, // si tienes esta función en tu hook
  } = userDataSales();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Órdenes</h1>

        <div>
          <ListOrders
            orders={sales}         
            loading={loading}
            onDelivered={markAsDelivered}
            // onDetails={showOrderDetails} // si lo usas, descomenta
          />
        </div>
      </div>

      <Toaster toastOptions={{ duration: 1500 }} />
    </div>
  );
};

export default Orders;
