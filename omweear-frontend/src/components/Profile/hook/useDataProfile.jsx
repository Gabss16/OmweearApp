import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import toast from 'react-hot-toast';

const useDataProfile = () => {

  const API = "http://localhost:4000/api";

  const { user} = useContext(AuthContext);
  const ApiCustomers = `${API}/custumers`;

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [lastname, setLastname] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorCustomer, setErrorCustomer] = useState(null);
  const [success, setSuccess] = useState(null);

  //Cargamos los datos del cliente
  const fetchCustomerById = async (customerId) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/${customerId}`);
      if (!response.ok) throw new Error("Error al obtener el cliente");
      const data = await response.json();

      setId(data._id);
      setName(data.name);
      setEmail(data.email);
      setPassword(data.password);
      setPhone(data.phone);
      setBirthDay(data.birthday);
      setLastname(data.lastname);
      setProfilePhoto(null); 
      setPreview(data.profilePhoto || null);
    } catch (error) {
      console.error("Error al obtener cliente:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchCustomerById(user.id);
    }
    // Liberar el objeto URL al salir del componente
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [user]);

  // Actualizar datos del cliente
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);
      formData.append("birthday", birthday);
      formData.append("lastname", lastname);
      if (profilePhoto) {
        formData.append("profilePhoto", profilePhoto);
      }

      const response = await fetch(`${ApiCustomers}/${id}`, {
        method: "PUT",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el perfil");
      }

      toast.success("Datos actualizados correctamente");
      setSuccess("Datos actualizados correctamente");
    } catch (error) {
      toast.error("Error al actualizar los datos");
      setErrorCustomer(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Capturar imagen y generar preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfilePhoto(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setProfilePhoto(null);
      setPreview(null);
    }
  };

  return {
    id,
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
    preview,
    handleImageChange,
    loading,
    errorCustomer,
    success,
    handleUpdate,
    fetchCustomerById
  };
};

export default useDataProfile;
