import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

const userDataBrands = () => {
  const ApiBrands = "http://localhost:4000/api/brands";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errorBrand, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);

  // 👉 Limpiar los datos del formulario
  const cleanData = () => {
    setName("");
    setDescription("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  // 👉 Registrar nueva marca
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newBrand = { name, description };
      console.log(newBrand, "datos nuevos de la marca");

      const response = await fetch(ApiBrands, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBrand),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar la marca");
      }

      const data = await response.json();
      toast.success("Marca registrada");
      setSuccess("Marca registrada correctamente");
      cleanData();  // Limpiar los campos después de registrar
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error al registrar la marca:", error);
      toast.error("Ocurrió un error al registrar la marca");
    } finally {
      setLoading(false);
    }
  };

  // 👉 Obtener marcas
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiBrands);
      if (!response.ok) throw new Error("Error al obtener las marcas");
      const data = await response.json();
      setBrands(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 👉 Eliminar marca
  const deleteBrand = async (id) => {
    try {
      const response = await fetch(`${ApiBrands}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar la marca");
      }

      toast.success("Marca eliminada");
      fetchData(); // Refresca la lista de marcas
    } catch (error) {
      console.error("Error deleting brand:", error);
      toast.error("Error al eliminar la marca");
    }
  };

  // 👉 Llenar formulario para edición
  const updateBrand = (dataBrand) => {
    setId(dataBrand._id);
    setName(dataBrand.name);
    setDescription(dataBrand.description);
    setError(null);
    setSuccess(null);
  };

  // 👉 Guardar cambios de edición
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedBrand = { name, description };

      const response = await fetch(`${ApiBrands}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBrand),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la marca");
      }

      toast.success("Marca actualizada");
      setSuccess("Marca actualizada correctamente");
      cleanData();  // Limpiar los campos después de actualizar
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar la marca");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    id,
    setId,
    name,
    setName,
    description,
    setDescription,
    errorBrand,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    brands,
    setBrands,
    cleanData,  // Asegúrate de exportar cleanData aquí
    handleSubmit,
    fetchData,
    deleteBrand,
    updateBrand,
    handleUpdate,
  };
};

export default userDataBrands;
