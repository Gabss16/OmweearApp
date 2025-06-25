import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useSalesData = () => {
  const ApiSales = "http://localhost:4000/api/sales";

  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorSale, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const getProductDetails = async (productId) => {
  try {
    const res = await fetch(`http://localhost:4000/api/products/${productId}`);
    if (!res.ok) {
      console.warn(`Producto con ID ${productId} no encontrado`);
      return { notFound: true };
    }

    return await res.json();
  } catch (error) {
    console.error(`⚠️ Error al obtener el producto ${productId}:`, error);
    return null;
  }
};

  // Obtener ventas
  const fetchSales = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiSales);
      if (!response.ok) throw new Error("Error al obtener las ventas");

      const data = await response.json();
      console.log("🛒 Ventas originales recibidas del backend:", data);

      // Enriquecer productos con detalles
      const enrichedSales = await Promise.all(
        data.map(async (sale) => {
          if (sale.shoppingCart_id?.products) {
            const enrichedProducts = await Promise.all(
              sale.shoppingCart_id.products.map(async (item) => {
                console.log(
                  "🔍 Obteniendo detalles para producto ID:",
                  item.idProducts
                );
                const productDetails = await getProductDetails(item.idProducts);
                console.log("Detalles obtenidos:", productDetails);

                return {
                  ...item,
                  productDetails,
                };
              })
            );
            sale.shoppingCart_id.products = enrichedProducts;
            console.log(
              "🧾 Productos enriquecidos para la venta:",
              enrichedProducts
            );
          }
          return sale;
        })
      );

      console.log("📦 Ventas enriquecidas completas:", enrichedSales);
      setSales(enrichedSales);
    } catch (error) {
      console.error("Error al obtener ventas:", error);
      toast.error("Error al obtener ventas");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Actualizar toda la venta (por si ocupás después para editar)
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

  // Actualizar solo el estado
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
    getProductDetails,
  };
};

export default useSalesData;
