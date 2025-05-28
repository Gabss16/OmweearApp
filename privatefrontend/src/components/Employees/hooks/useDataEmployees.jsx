import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

const useDataEmployees = () => {

  const ApiEmployees = "http://localhost:4000/api/employees";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dui, setDui] = useState("");
  const [isss, setIsss] = useState("");
  const [charge, setCharge] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
  const [errorEmployee, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  // Limpiar los datos del formulario

  const cleanData = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setDui("");
    setIsss("");
    setCharge("");
    setProfilePhoto("");
    setHireDate("");
    setBirthDay("");
    setGender("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  // Registrar nueva marca

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name     || !email        ||
        !password || !phone        ||
        !dui      || !isss         ||
        !charge   || !profilePhoto ||
        !hireDate || !birthday     ||
        !gender
    ) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {

      const newEmployee = { 

        name, email, password, 
        phone, dui, isss, charge, 
        profilePhoto, hireDate, birthday, 
        gender 
    
    };

      console.log(newEmployee, "datos nuevos de el empleado");

      const response = await fetch(ApiEmployees, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el empleado");
      }

      const data = await response.json();
      toast.success("Empleado registrado");
      setSuccess("Empleado registrado correctamente");
      cleanData(); 
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error al registrar el Empleado:", error);
      toast.error("Ocurrió un error al registrar el Empleado");
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

  // Eliminar Empleado

  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`${ApiEmployees}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el empleado");
      }

      toast.success("Empleado eliminado");
      fetchData(); 

    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Error al eliminar el empleado");
    }
  };

  // Llenar form para editar 

  const updateEmployees = (dataEmployee) => {
    setId(dataEmployee._id);
    setName(dataEmployee.name);
    setEmail(dataEmployee.email);
    setPassword(dataEmployee.password);
    setPhone(dataEmployee.phone);
    setDui(dataEmployee.dui);
    setIsss(dataEmployee.isss);
    setCharge(dataEmployee.charge);
    setProfilePhoto(dataEmployee.profilePhoto);
    setHireDate(dataEmployee.hireDate);
    setBirthDay(dataEmployee.birthday);
    setGender(dataEmployee.gender);
    setError(null);
    setSuccess(null);
  };

  // Guardar cambios de edició
  
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updateEmployee = { 

        name, email, password, 
        phone, dui, isss, charge, 
        profilePhoto, hireDate, birthday, 
        gender

       };

      const response = await fetch(`${ApiEmployees}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateEmployee),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el empleado");
      }

      toast.success("Empleado actualizado");
      setSuccess("Empleado actualizado correctamente");
      cleanData();  
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar el empleado");
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
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    dui,
    setDui,
    isss,
    setIsss,
    charge,
    setCharge,
    profilePhoto,
    setProfilePhoto,
    hireDate,
    setHireDate,
    birthday,
    setBirthDay,
    gender,
    setGender,
    errorEmployee,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    employees,
    setEmployees,
    cleanData, 
    handleSubmit,
    fetchData,
    deleteEmployee,
    updateEmployees,
    handleUpdate,
  };
};

export default useDataEmployees;
