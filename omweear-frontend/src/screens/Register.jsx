import React, { useState } from "react";
import "./Register.css";
import useDataCustomers from "../components/Customers/hook/useDataCustomers";
import Pilimg from "../images/Pil.png";
import { Link, useNavigate } from "react-router-dom";
import RegisterCustomer from "../components/Customers/RegisterCustomers.jsx";

const Register = () => {
  const navigate = useNavigate();
  const { createCustomer } = useDataCustomers();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [lastname, setLastname] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    try {
      await createCustomer(formData);
      navigate("/codemail"); 
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h1>Registrarme</h1>

        <RegisterCustomer
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          phone={phone}
          setPhone={setPhone}
          lastname={lastname}
          setLastname={setLastname}
          birthday={birthday}
          setBirthDay={setBirthDay}
          setProfilePhoto={setProfilePhoto}
          handleSubmit={handleSubmit}
        />

        <p className="login-link">
          ¿Ya tienes una cuenta? <Link to="/">Iniciar Sesión</Link>
        </p>
      </div>

      <div className="register-right">
        <h1>Omweear</h1>
        <p>Eleva tu práctica, Eleva tu estilo</p>
        <img src={Pilimg} alt="Omweear" />
      </div>
    </div>
  );
};

export default Register;
