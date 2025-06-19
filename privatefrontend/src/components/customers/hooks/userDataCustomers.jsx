import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const userDataCustomers = () => {
  const ApiCustomers = "http://localhost:4000/api/custumers";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorCustomer, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const cleanData = () => {
    setId("");
    setName("");
    setLastname("");
    setEmail("");
    setPassword("");
    setPhone("");
    setBirthday("");
    setProfilePhoto("");
    setError(null);
    setSuccess(null);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(ApiCustomers);

      if (!res.ok) {
        throw new Error('Error al obtener los clientes');
      }

      const data = await res.json();
      setCustomers(data);
      setError(null);

    } catch (error) {

      console.error("Error al obtener clientes:", error);
      setError('Error al cargar los clientes. Verifica que el servidor esté funcionando.');

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
    lastname,
    setLastname,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    birthday,
    setBirthday,
    profilePhoto,
    setProfilePhoto,
    customers,
    setCustomers,
    loading,
    errorCustomer,
    success,
    cleanData,
    fetchData,
  };
};

export default userDataCustomers;
