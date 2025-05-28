import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const userDataSuppliers = () => {
  const ApiSuppliers = "http://localhost:4000/api/supliers";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorSupplier, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [suppliers, setSuppliers] = useState([]);

  // 👉 Limpiar los datos del formulario
  const cleanData = () => {
    setId("");
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setError(null);
    setSuccess(null);
  };

  // 👉 Registrar nuevo proveedor
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !company || !email || !phone) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newSupplier = { name, company, email, phone };
      const response = await fetch(ApiSuppliers, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSupplier),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el proveedor");
      }

      toast.success("Proveedor registrado");
      setSuccess("Proveedor registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error al registrar proveedor:", error);
      toast.error("Ocurrió un error al registrar el proveedor");
    } finally {
      setLoading(false);
    }
  };

  // 👉 Obtener proveedores
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiSuppliers);
      if (!response.ok) throw new Error("Error al obtener los proveedores");
      const data = await response.json();
      setSuppliers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 👉 Eliminar proveedor
  const deleteSupplier = async (id) => {
    try {
      const response = await fetch(`${ApiSuppliers}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el proveedor");
      }

      toast.success("Proveedor eliminado");
      fetchData();
    } catch (error) {
      console.error("Error deleting supplier:", error);
      toast.error("Error al eliminar el proveedor");
    }
  };

  // 👉 Llenar formulario para edición
  const updateSupplier = (dataSupplier) => {
    setId(dataSupplier._id);
    setName(dataSupplier.name);
    setCompany(dataSupplier.company);
    setEmail(dataSupplier.email);
    setPhone(dataSupplier.phone);
    setError(null);
    setSuccess(null);
  };

  // 👉 Guardar cambios de edición
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedSupplier = { name, company, email, phone };

      const response = await fetch(`${ApiSuppliers}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSupplier),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el proveedor");
      }

      toast.success("Proveedor actualizado");
      setSuccess("Proveedor actualizado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar el proveedor");
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
    company,
    setCompany,
    email,
    setEmail,
    phone,
    setPhone,
    errorSupplier,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    suppliers,
    setSuppliers,
    cleanData,
    handleSubmit,
    fetchData,
    deleteSupplier,
    updateSupplier,
    handleUpdate,
  };
};

export default userDataSuppliers;
