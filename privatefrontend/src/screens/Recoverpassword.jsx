import React from "react";
//import { useNavigate } from "react-router-dom";
import './Recoverpassword.css'; 
import Pilimg from "../images/Pil.png";

const Recoverpassword = () => {
  //const navigate = useNavigate();

  //const handleSend = () => {
    //navigate("/verify-code");
  //};

  return (
    <div className="recover-container">
      <div className="recover-left-container">
        <h1>Recuperación de Contraseña</h1>
        <p>Ingresa tu correo para que podamos enviarte el código de verificación</p>
        <input type="email" placeholder="Correo electrónico" />
        <button>Enviar</button>
      </div>

      <div className="recover-right-container">
        <div className="logo-section">
          <h1>Omweear</h1>
          <p>Eleva tu práctica. Eleva tu estilo</p>
        </div>
        <div className="image-section">
          <img src={Pilimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recoverpassword;
