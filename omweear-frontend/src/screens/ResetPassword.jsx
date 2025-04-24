import React, { useState } from "react";
import "./ResetPassword.css";

const ResetPassword = () => {
  return (
    <div className="reset-container">
      <div className="left-section">
        <h1>Omweear</h1>
        <p>Eleva tu práctica, Eleva tu estilo</p>
      </div>
      <div className="right-section">
        <h2>Reestablecer Contraseña</h2>
        <p>Ingresa la nueva contraseña</p>
        <input type="password" placeholder="Contraseña" className="password-input" />
        <p>Ingresa nuevamente tu nueva contraseña</p>
        <input type="password" placeholder="Contraseña" className="password-input" />
        <button className="accept-btn">Aceptar</button>
      </div>
    </div>
  );
};

export default ResetPassword;