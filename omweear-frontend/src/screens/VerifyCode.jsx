import React, { useState } from "react";
import "./VerifyCode.css";

const VerifyCode = () => {
  return (
    <div className="verify-container">
      <div className="left-section">
        <h1>Omweear</h1>
        <p>Eleva tu práctica, Eleva tu estilo</p>
        <div className="image-placeholder">{/* Aquí colocas la imagen de los accesorios */}</div>
      </div>
      <div className="right-section">
        <h2>Verificar Código</h2>
        <p>Ingresa el código que te mandamos:</p>
        <input type="text" placeholder="XXXX" className="code-input" />
        <button className="verify-btn">Verificar</button>
      </div>
    </div>
  );
};

export default VerifyCode;