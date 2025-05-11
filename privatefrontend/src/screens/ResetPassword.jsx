import React from 'react';
//import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import Imgpil from "../images/Pil.png"

const ResetPassword = () => {
  //const navigate = useNavigate();

  //const handleAccept = (e) => {
    //e.preventDefault();
    //navigate("/");
  //};

  return (
    <div className="reset-password-container">
      <div className="form-container">
        <h1>Reestablecer Contraseña</h1>
        <form>
          <h3>Ingresa la nueva contraseña</h3>
          <input type="password" id="new-password" placeholder="Contraseña" />
          <h3>Ingresa nuevamente tu nueva contraseña</h3>
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
