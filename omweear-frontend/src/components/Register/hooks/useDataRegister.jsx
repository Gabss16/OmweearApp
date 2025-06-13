import { useState } from "react";
import toast from "react-hot-toast";

const useDataRegister = () => {
  const ApiRegisterCustomer = "http://localhost:4000/api/customers";

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null); // archivo
  const [errorCustomer, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const cleanData = () => {
    setName("");
    setLastname("");
    setEmail("");
    setPassword("");
    setPhone("");
    setBirthday("");
    setProfilePhoto(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !lastname || !email || !password || !phone || !birthday) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    // Si quieres que la foto sea obligatoria, descomenta esta parte:
    /*
    if (!profilePhoto) {
      setError("La foto de perfil es obligatoria");
      toast.error("La foto de perfil es obligatoria");
      return;
    }
    */

    setLoading(true);
    try {
      // Usamos FormData para enviar archivo
      const formData = new FormData();
      formData.append("name", name);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);
      formData.append("birthday", birthday);

      if (profilePhoto) {
        formData.append("profilePhoto", profilePhoto);
      }

      const response = await fetch(ApiRegisterCustomer, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al registrar cliente");
      }

      toast.success("Cliente registrado correctamente");
      cleanData();
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
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
    errorCustomer,
    loading,
    handleSubmit,
  };
};

export default useDataRegister;
