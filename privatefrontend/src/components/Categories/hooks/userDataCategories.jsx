import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const userDataCategories = () => {
  const ApiCategories = "http://localhost:4000/api/categories";

   //  Estados para guardar los datos del formulario
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errorCategory, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  //  Limpiar los datos del formulario
  const cleanData = () => {
    setName("");
    setDescription("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  //  Registrar nueva categoría
  const handleSubmit = async (e) => {
    e.preventDefault();

     // Validar que todos los campos estén completos
    if (!name || !description) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newCategory = { name, description };
     // Enviar la categoría al servidor
      const response = await fetch(ApiCategories, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });
      // Si hay error en la respuesta

      if (!response.ok) {
        throw new Error("Hubo un error al registrar la categoría");
      }

      // Limpiar formulario y recargar lista
      await response.json();
      toast.success("Categoría registrada");
      setSuccess("Categoría registrada correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error al registrar la categoría:", error);
      toast.error("Ocurrió un error al registrar la categoría");
    } finally {
      setLoading(false);
    }
  };

  // Obtener categorías del servidor
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiCategories);
      if (!response.ok) throw new Error("Error al obtener las categorías");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    } finally {
      setLoading(false);
    }
  };
//  Obtener categorías automáticamente al cargar la pantalla
  useEffect(() => {
    fetchData();
  }, []);

  //  Eliminar categoría
  const deleteCategory = async (id) => {
    try {
      const response = await fetch(`${ApiCategories}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar la categoría");
      }

      // Recargar lista después de eliminar
      toast.success("Categoría eliminada");
      fetchData();
    } catch (error) {
      console.error("Error eliminando categoría:", error);
      toast.error("Error al eliminar la categoría");
    }
  };

  //  Cargar datos de una categoría en el formulario para editar
  const updateCategory = (dataCategory) => {
    setId(dataCategory._id);
    setName(dataCategory.name);
    setDescription(dataCategory.description);
    setError(null);
    setSuccess(null);
  };

  //  Guardar cambios en una categoría existente
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedCategory = { name, description };

      const response = await fetch(`${ApiCategories}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCategory),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la categoría");
      }

      toast.success("Categoría actualizada");
      setSuccess("Categoría actualizada correctamente");

      
      // Limpiar formulario y recargar lista
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar la categoría");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  // Lo que se retorna para poder usarlo en otros componentes
  return {
    id,
    setId,
    name,
    setName,
    description,
    setDescription,
    errorCategory,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    categories,
    setCategories,
    cleanData,
    handleSubmit,
    fetchData,
    deleteCategory,
    updateCategory,
    handleUpdate,
  };
};

export default userDataCategories;
