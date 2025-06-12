import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

const useDataRegister = () => {

  const ApiRegisterCustomer = "http://localhost:4000/api/registerCustomers";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [lastname, setLastname] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [errorCustomer, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);

  /*
name: Nombre del cliente
email: Correo electrónico del cliente
password: Contraseña del cliente
phone: Número de teléfono del cliente
birthday: Fecha de cumpleaños del cliente (Para aplicar descuento)
lastname
profilePhoto: Foto del cliente
 */

  // Limpiar los datos del formulario

  const cleanData = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setBirthDay("");
    setLastname("");
    setProfilePhoto("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  // Registrar nuevo cliente

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
        
        !name     || !email        ||
        !password || !phone        ||
        !birthday || !lastname     ||
        !profilePhoto 

    ) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {

      const newCustomer = { 

        name, email, password, 
        phone, birthday, lastname,
        profilePhoto
         
    };

      console.log(newCustomer, "datos nuevos del cliente");

      const response = await fetch(ApiRegisterCustomer, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCustomer),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el cliente");
      }

      const data = await response.json();
      toast.success("Cliente registrado");
      setSuccess("Cliente registrado correctamente");
      cleanData(); 
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error al registrar el Cliente:", error);
      toast.error("Ocurrió un error al registrar el Cliente");
    } finally {
      setLoading(false);
    }
  };

  // Obtener Empleados

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiRegisterCustomer);
      if (!response.ok) throw new Error("Error al obtener los Clientes");
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return {
    id,
    setId,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    birthday,
    setBirthDay,
    lastname,
    setLastname,
    profilePhoto,
    setProfilePhoto,
    errorCustomer,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    customers,
    setCustomers,
    cleanData, 
    handleSubmit,
    fetchData,
  };
};

export default useDataRegister;