import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

const useDataCustomers = () => {

  const ApiCustomers = "http://localhost:4000/api/registerCustomers";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [lastname, setLastname] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [errorCustomer, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);

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

  // Registrar nueva marca

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name     || !email        ||
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

      console.log(newCustomer, "Datos del empleado registrado");

      const response = await fetch(ApiCustomers, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCustomer),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el empleado");
      }

      const data = await response.json();
      toast.success("Registrado");
      setSuccess("Successful Register");
      cleanData(); 
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error al registrarse", error);
      toast.error("Ocurrió un error al registrarte");
    } finally {
      setLoading(false);
    }
  };

  // Obtener Empleados

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiEmployees);
      if (!response.ok) throw new Error("Error al obtener los Empleados");
      const data = await response.json();
      setEmployees(data);
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

export default useDataCustomers;
