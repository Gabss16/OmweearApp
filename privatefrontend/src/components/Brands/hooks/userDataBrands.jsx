import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast';


const userDataBrands = () => {

    const ApiBrands="http://localhost:4000/api/brands";
 
    const [activeTab, setActiveTab] = useState("list");
      const [id, setId] = useState("");
      const [name, setName] = useState("");
      const [description, setDescription] = useState("");
      const [errorBrand, setError] = useState(null);
      const [success, setSuccess] = useState(null);
      const [loading, setLoading] = useState(false);
      const [brand, setBrands] = useState([]);
    
      const cleanData = () => {
        setName("");
        setDescription("");
        setId("");
      };
    
      //funcion para guardar los datos de la marca
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (
          !name ||
          !description
        ) {
          setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
          return;
        }
    
        try {
          const newBrand = {
            name,
            description,
          };
    
          console.log(newBrand, "datos nuevos de la marca");
    
          const response = await fetch(ApiRegister, {
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
            toast.success('Marca registrado');
          setBrands(data);
          setSuccess("Marca registrada correctamente");
          cleanData();
          fetchData();
        } catch (error) {
          setError(error.message);
          console.error("Error:", error);
          alert("Error", "Ocurrió un error al registrar la marca");
            toast.error('Ocurrió un error al registrar la marca');
        } finally {
          setLoading(false);
        }
      };
    
      //funcion para obtener los datos de los empleados
      const fetchData = async () => {
        try {
          const response = await fetch(ApiBrands);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
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
    
      const deleteBrand = async (id) => {
        try {
          const response = await fetch(
            `${ApiBrands}/${id}`,
            {
              method: "DELETE",
              body: JSON.stringify(deleteBrand),
            }
          );
    
          if (!response.ok) {
            throw new Error("Error al eliminar la marca");
          }
    
          const result = await response.json();
          console.log("Deleted:", result);
    toast.success('Marca eliminada');
          // Actualizar la lista después de borrar
          //setBrands((prev) => prev.filter(emp => emp._id !== id));
          fetchData();
        } catch (error) {
          console.error("Error deleting brand sfs:", error);
        }
      };
    
      const updateBrand = async (dataBrand) => {
        setId(dataBrand._id);
        setName(dataBrand.name);
        setDescription(dataBrand.description);
        setError(null);
        setSuccess(null);
        setActiveTab("form");
      };
    
      const handleUpdate = async (e) => {
        e.preventDefault();
    
        try {
          const updateBrand = {
            name,
            description,
          };
    
          const response = await fetch(
            `${ApiBrands}/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateBrand),
            }
          );
    
          if (!response.ok) {
            throw new Error("Error al actualizar la marca");
          }
    
          toast.success('Marca actualizada');
          setSuccess("Marca actualizada correctamente");
          cleanData();
          setId(""); // Limpiar el ID
          setActiveTab("list");
          fetchData(); // Volver a cargar la lista
        } catch (error) {
          setError(error.message);
          alert("Error al actualizar la marca");
          console.error("Error:", errorBrand);
        } finally {
          setLoading(false);
        }
      };



return {
    activeTab,
    setActiveTab,
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
    brand,
    setBrands,
    cleanData,
    handleSubmit,
    fetchData,
    deleteBrand,
    updateBrand,
    handleUpdate,
};

  };


export default userDataBrands;
