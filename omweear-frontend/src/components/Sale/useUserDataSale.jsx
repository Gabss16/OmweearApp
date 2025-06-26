// src/components/Sales/useUserDataSale.js
import { useState } from "react";
import toast from "react-hot-toast";

const useUserDataSale = () => {
  const [address, setAddress] = useState("");
  const [isCheckout, setIsCheckout] = useState(false);

  const createSale = async (shoppingCart_id) => {
  const now = new Date();

  const shipDate = new Date(now);
  shipDate.setUTCDate(now.getUTCDate() + 1);
  shipDate.setUTCHours(10, 0, 0, 0);

  const deliveryDate = new Date(shipDate);
  deliveryDate.setUTCDate(shipDate.getUTCDate() + 3);
  deliveryDate.setUTCHours(16, 0, 0, 0);

  const saleData = {
    shoppingCart_id,
    address,
    status: "Pendiente",
    shipDate: shipDate.toISOString(),
    deliveryDate: deliveryDate.toISOString(),
    idPaymentMethod: "67dd899d9e077a9898a93af4",
  };

  console.log("📝 Datos a enviar:", saleData);

  try {
    const response = await fetch("http://localhost:4000/api/sales/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saleData),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("❌ Error en respuesta:", result);
      throw new Error(result.message || "Error al crear la venta");
    }

    toast.success("Venta creada con éxito");
    console.log("✅ Venta creada:", result);
  } catch (error) {
    toast.error("Error al crear la venta");
    console.error("🚨 Error en createSale:", error);
  }
};

  return {
    address,
    setAddress,
    isCheckout,
    setIsCheckout,
    createSale,
  };
};

export default useUserDataSale;
