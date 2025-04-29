import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import Imgpil from "../images/Pil.png"

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleAccept = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="reset-password-container">
      <div className="form-container">
        <h1>Reestablecer Contraseña</h1>
        <form onSubmit={handleAccept}>
          <label htmlFor="new-password">Ingresa la nueva contraseña</label>
          <input type="password" id="new-password" placeholder="Contraseña" />
          <label htmlFor="confirm-password">Ingresa nuevamente tu nueva contraseña</label>
          <input type="password" id="confirm-password" placeholder="Contraseña" />
          <button type="submit">Aceptar</button>
        </form>
      </div>
      <div className="image-container">
        <div className="brand-info">
          <h2>Omweear</h2>
          <p>Eleva tu práctica, Eleva tu estilo</p>
        </div>
        <img src={Imgpil} alt="" />
      </div>
    </div>
  );
};

export default ResetPassword;
