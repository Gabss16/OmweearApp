import React, { useState } from "react";
import Pilimg from "../images/Pil.png";
import "./CodeMailValidation.css";
import { useNavigate } from "react-router-dom";

const CodeMailValidation = () => {
  const navigate = useNavigate();

  const handleCodeMail = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="code-container">

      {/*<div className="code-left">
        <h1>Omweear</h1>
        <p>Eleva tu práctica, Eleva tu estilo</p>
        <img src={Pilimg} alt="Omweear" />
      </div>*/}

      <div className="code-right">
        <h1>Validación de Correo</h1>
        <p>Te enviamos un código a tu correo. Escríbelo abajo para continuar:</p>

        <form className="code-form" onSubmit={handleCodeMail}>
          <input
            type="text"
            placeholder="XXXXX"
          />
          <button type="submit" className="code-btn">Validar</button>
        </form>
      </div>
    </div>
  );
};

export default CodeMailValidation;
