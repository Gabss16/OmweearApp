import React from "react";
import { useNavigate } from "react-router-dom";
import "./VerifyCode.css";
import Pilimg from "../images/Pil.png";

const VerifyCode = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/reset-password");
  };

  return (
    <div className="verify-container">
      <div className="right-section-verify">
        <h1>Omweear</h1>
        <p>Eleva tu práctica, Eleva tu estilo</p>
          <img src={Pilimg} alt="Pilates" className="imgpil" />
      </div>
      <div className="left-section-verify">
        <h2>Verificar Código</h2>
        <p>Ingresa el código que te mandamos:</p>
        <input type="text" placeholder="XXXX" className="code-input" />
        <button className="verify-btn" onClick={handleVerify}>Verificar</button>
      </div>
    </div>
  );
};

export default VerifyCode;
