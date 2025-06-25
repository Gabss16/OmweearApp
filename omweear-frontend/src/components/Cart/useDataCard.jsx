import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useUserDataCart = (userId) => {
  const API_CART = "http://localhost:4000/api/shoppingCart";

  const [cart, setCart] = useState(null);
  const [loadingCart, setLoading] = useState(false);
  const [errorCart, setError] = useState(null);
  const [successCart, setSuccess] = useState(null);

  // Obtener carrito de usuario
  const fetchCart = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const response = await fetch(`${API_CART}/${userId}`);
      if (!response.ok) throw new Error("No se pudo cargar el carrito");

      const data = await response.json();
      setCart(data);
    } catch (error) {
      setError(error.message);
      toast.error("Error al obtener el carrito");
    } finally {
      setLoading(false);
    }
  };

  // Agregar producto
  const addToCart = async (productId, quantity = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_CART}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId, quantity }),
      });

      if (!response.ok) throw new Error("Error al agregar al carrito");

      const data = await response.json();
      setCart(data);
      toast.success("Producto agregado");
    } catch (error) {
      setError(error.message);
      toast.error("Error al agregar producto");
    } finally {
      setLoading(false);
    }
  };

  // Eliminar un producto del carrito
  const removeFromCart = async (productId) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_CART}/remove`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId }),
      });

      if (!response.ok) throw new Error("Error al eliminar producto");

      const data = await response.json();
      setCart(data.cart);
      toast.success("Producto eliminado");
    } catch (error) {
      setError(error.message);
      toast.error("Error al eliminar producto");
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, quantity) => {
  try {
    const response = await fetch("http://localhost:4000/api/shoppingCart/updateQuantity", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId, quantity }),
    });

    if (!response.ok) throw new Error("Error updating quantity");

    fetchCart(); // refrescar carrito
  } catch (error) {
    console.error("Error al actualizar cantidad:", error);
  }
};


  // Vaciar carrito (eliminar todo)
  const deleteCart = async (cartId) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_CART}/delete/${cartId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar carrito");

      toast.success("Carrito eliminado");
      setCart(null);
    } catch (error) {
      setError(error.message);
      toast.error("Error al vaciar carrito");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [userId]);

  return {
    cart,
    setCart,
    loadingCart,
    errorCart,
    successCart,
    fetchCart,
    addToCart,
    removeFromCart,
    deleteCart,
    updateQuantity,
  };
};

export default useUserDataCart;
