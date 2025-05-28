import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const useSalesData = () => {
  const ApiSales = "http://localhost:4000/api/sales";

  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorSale, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // 👉 Obtener ventas
  const fetchSales = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiSales);
      if (!response.ok) throw new Error("Error al obtener las ventas");
      const data = await response.json();
      setSales(data);
    } catch (error) {
      console.error("Error al obtener ventas:", error);
      toast.error("Error al obtener ventas");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 👉 Actualizar toda la venta (por si ocupás después para editar)
  const updateSale = async (id, updatedSale) => {
    try {
      const response = await fetch(`${ApiSales}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSale),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la venta");
      }

      toast.success("Venta actualizada");
      setSuccess("Venta actualizada correctamente");
      fetchSales();
    } catch (error) {
      console.error("Error al actualizar la venta:", error);
      toast.error("Error al actualizar la venta");
      setError(error.message);
    }
  };

  // 👉 Actualizar solo el estado
  const updateSaleStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${ApiSales}/update-status/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el estado");
      }

      toast.success("Estado actualizado");
      fetchSales();
    } catch (error) {
      console.error("Error al actualizar el estado:", error);
      toast.error("Error al actualizar el estado");
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return {
    sales,
    loading,
    errorSale,
    success,
    fetchSales,
    updateSale,
    updateSaleStatus,
  };
};

export default useSalesData;
