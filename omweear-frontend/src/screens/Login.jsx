import React from "react";
import "./Login.css";
import Pilimg from "../images/Pil.png"
import Fbbtn from "../images/fb.png"
import Glbtn from "../images/gl.png"

const Login = () => {

  return (
    <div className="login-container">
      <div className="left-section">
        <h1>Omweear</h1>
        <p>Eleva tu práctica, Eleva tu estilo</p>
        <img src={Pilimg} alt="" className="imgpil"/>
      </div>
      <div className="right-section">
        <h1>Iniciar Sesión</h1>
        <button className="social-btn facebook"><img src={Fbbtn} alt="" /></button>
        <button className="social-btn google"><img src={Glbtn} alt="" /></button>
        <p>O usar tu correo electrónico y contraseña</p>
        <form>
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <a href="" className="forgot-password">¿Has olvidado tu contraseña?</a>
          <button type="submit" className="login-btn">Iniciar sesión</button>
        </form>
        <p>¿No tienes una cuenta? <a href="#Register.jsx">Regístrate</a></p>
      </div>
    </div>
  );

};

export default Login;
