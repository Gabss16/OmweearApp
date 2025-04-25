import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Pilimg from "../images/Pil.png";
import Fbbtn from "../images/fb.png";
import Glbtn from "../images/gl.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-section">
        <div>
          <h1>Omweear</h1>
          <p>Eleva tu práctica, Eleva tu estilo</p>
        </div>
        <img src={Pilimg} alt="Pilates" className="imgpil" />
      </div>

      <div className="right-section">
        <h1>Iniciar Sesión</h1>
        <div className="social-buttons">
          <button className="social-btn facebook"><img src={Fbbtn} alt="Facebook" /></button>
          <button className="social-btn google"><img src={Glbtn} alt="Google" /></button>
        </div>
        <p>O usar tu correo electrónico y contraseña</p>
        <form>
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <a href="#" className="forgot-password">¿Has olvidado tu contraseña?</a>
          <button type="submit" className="login-btn">Iniciar sesión</button>
        </form>
        <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p>
      </div>
    </div>
  );
};

export default Login;
