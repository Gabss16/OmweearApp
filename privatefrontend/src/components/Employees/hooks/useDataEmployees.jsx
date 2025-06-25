import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

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
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [hireDate, setHireDate] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
  const [errorEmployee, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const cleanData = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setDui("");
    setIsss("");
    setCharge("");
    setProfilePhoto(null);
    setHireDate("");
    setBirthDay("");
    setGender("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  // REGISTRAR EMPLEADO
  const createEmployee = async (formData) => {
    setLoading(true);

    if (

      !name || !email || !password || !phone ||
      !dui || !isss || !charge || !hireDate ||
      !birthday || !gender

    ) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {

      const response = await fetch(ApiEmployees, {
        
        method: "POST",
        body: formData,
        credentials: "include",

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

  // ACTUALIZAR EMPLEADO

  const handleUpdate = async (formData) => {
    setLoading(true)

    if (profilePhoto) {
      formData.append("profilePhoto", profilePhoto);
    }

    try {
      const response = await fetch(`${ApiEmployees}/${id}`, {
        method: "PUT",
        body: formData,
        credentials: "include",
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


  //ELIMINAR EMPLEADO

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

  const updateEmployees = (dataEmployee) => {
    setId(dataEmployee._id);
    setName(dataEmployee.name);
    setEmail(dataEmployee.email);
    setPassword(dataEmployee.password);
    setPhone(dataEmployee.phone);
    setDui(dataEmployee.dui);
    setIsss(dataEmployee.isss);
    setCharge(dataEmployee.charge);
    setProfilePhoto(null);
    setHireDate(dataEmployee.hireDate);
    setBirthDay(dataEmployee.birthday);
    setGender(dataEmployee.gender);
    setError(null);
    setSuccess(null);
  };

  return {
    id, setId,
    name, setName,
    email, setEmail,
    password, setPassword,
    phone, setPhone,
    dui, setDui,
    isss, setIsss,
    charge, setCharge,
    profilePhoto, setProfilePhoto,
    hireDate, setHireDate,
    birthday, setBirthDay,
    gender, setGender,
    errorEmployee, setError,
    success, setSuccess,
    loading, setLoading,
    employees, setEmployees,
    cleanData,
    createEmployee,
    fetchData,
    deleteEmployee,
    updateEmployees,
    handleUpdate,
  };
};

export default useDataEmployees;
