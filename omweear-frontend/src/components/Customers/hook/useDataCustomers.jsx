import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

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

  const cleanData = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setBirthDay("");
    setLastname("");
    setProfilePhoto(null);
    setId("");
    setError(null);
    setSuccess(null);
  };

  const createCustomer = async (formData) => {
  setLoading(true);
  try {
    const response = await fetch(ApiCustomers, {
      method: "POST",
      body: formData,
      credentials: "include"
    });

    if (!response.ok) throw new Error("Hubo un error al registrar el cliente");

    const data = await response.json();
    toast.success("Registrado");
    setSuccess("Successful Register");
    cleanData();
    return data;
  } catch (error) {
    setError(error.message);
    toast.error("Ocurrió un error al registrarte");
    throw error;
  } finally {
    setLoading(false);
  }
};

  

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
    createCustomer, 
  };
};

export default useDataCustomers;