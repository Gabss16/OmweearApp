import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useDataClothes = () => {
  const ApiClothes = "http://localhost:4000/api/products";

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    idCategory: "",
    idBrand: "",
    idSupplier: "",
    images: "",
    sizesAvailable: "",
  });

  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorClothes, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // 👉 Limpiar formulario
  const cleanData = () => {
    setForm({
      name: "",
      description: "",
      price: "",
      stock: "",
      idCategory: "",
      idBrand: "",
      idSupplier: "",
      images: "",
      sizesAvailable: "",
      _id: null,
    });
    setError(null);
    setSuccess(null);
  };

  // 👉 Obtener prendas
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiClothes);
      if (!response.ok) throw new Error("Error al obtener prendas");
      const data = await response.json();
      setClothes(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
      setError("Error al obtener prendas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 👉 Registrar prenda
  const handleCreate = async (e) => {
    e.preventDefault();

    const {
      name,
      description,
      price,
      stock,
      idCategory,
      idBrand,
      idSupplier,
      images,
      sizesAvailable,
    } = form;

    if (
      !name ||
      !description ||
      !price ||
      !stock ||
      !idCategory ||
      !idBrand ||
      !idSupplier ||
      !sizesAvailable
    ) {
      toast.error("Todos los campos obligatorios deben completarse");
      setError("Faltan campos obligatorios");
      return;
    }

    try {
      const newClothe = {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        idCategory,
        idBrand,
        idSupplier,
        images,
        sizesAvailable,
      };

      const response = await fetch(ApiClothes, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newClothe),
      });

      if (!response.ok) throw new Error("Error al registrar la prenda");

      await response.json();
      toast.success("Prenda registrada correctamente");
      setSuccess("Prenda registrada");
      cleanData();
      fetchData();
    } catch (error) {
      console.error("Error al registrar:", error);
      toast.error("Error al registrar la prenda");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 👉 Actualizar prenda
  const handleUpdate = async (e) => {
    e.preventDefault();

    const {
      _id,
      name,
      description,
      price,
      stock,
      idCategory,
      idBrand,
      idSupplier,
      images,
      sizesAvailable,
    } = form;

    if (!_id) return toast.error("No se seleccionó una prenda para actualizar");

    try {
      const updatedClothe = {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        idCategory,
        idBrand,
        idSupplier,
        images,
        sizesAvailable,
      };

      const response = await fetch(`${ApiClothes}/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedClothe),
      });

      if (!response.ok) throw new Error("Error al actualizar la prenda");

      toast.success("Prenda actualizada correctamente");
      setSuccess("Prenda actualizada");
      cleanData();
      fetchData();
    } catch (error) {
      console.error("Error al actualizar:", error);
      toast.error("Error al actualizar la prenda");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 👉 Eliminar prenda
  const deleteClothe = async (id) => {
    try {
      const response = await fetch(`${ApiClothes}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar la prenda");

      toast.success("Prenda eliminada");
      fetchData();
    } catch (error) {
      console.error("Error al eliminar:", error);
      toast.error("Error al eliminar la prenda");
    }
  };

  // 👉 Llenar formulario para editar
  const updateClothe = (clotheData) => {
    setForm({
      _id: clotheData._id,
      name: clotheData.name,
      description: clotheData.description,
      price: clotheData.price,
      stock: clotheData.stock,
      idCategory: clotheData.idCategory?._id || clotheData.idCategory,
      idBrand: clotheData.idBrand?._id || clotheData.idBrand,
      idSupplier: clotheData.idSupplier?._id || clotheData.idSupplier,
      images: clotheData.images,
      sizesAvailable: clotheData.sizesAvailable,
    });
    setError(null);
    setSuccess(null);
  };

  return {
    form,
    setForm,
    clothes,
    setClothes,
    loading,
    setLoading,
    errorClothes,
    setError,
    success,
    setSuccess,
    cleanData,
    fetchData,
    handleCreate,
    handleUpdate,
    deleteClothe,
    updateClothe,
  };
};

export default useDataClothes;
