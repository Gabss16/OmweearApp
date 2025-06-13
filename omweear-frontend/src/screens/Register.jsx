import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import Pilimg from "../images/Pil.png";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h1>Registrarme</h1>
        <form className="register-form">
        <form className="register-form" onSubmit={handleRegister}>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="email" placeholder="Correo electrónico" />
          <div className="password-wrapper">
            <input type="password" placeholder="Contraseña" />
          </div>
          <button className="register-btn">Registrarme</button>
          <button type="submit" className="register-btn">Registrarme</button>
        </form>
        </form>
        <p className="login-link">¿Ya tienes una cuenta? <a href="#">Iniciar Sesión</a> </p>
        <p className="login-link">¿Ya tienes una cuenta? <Link to="/">Iniciar Sesión</Link></p>
      </div>
      <div className="register-right">
        <h1>Omweear</h1>
        <p>Eleva tu práctica, Eleva tu estilo</p>
        <img src={Pilimg} alt=""/>
      </div>
    </div>
  );
};

export default Register;