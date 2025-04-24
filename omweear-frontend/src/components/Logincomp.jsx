import React, { useState } from "react";
import "./Login.css"; // Archivo de estilos separado

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-section">
        <h1>Omweear</h1>
        <p>Eleva tu práctica, Eleva tu estilo</p>
        <div className="image-placeholder">{/* Aquí colocas la imagen de los accesorios */}</div>
      </div>
      <div className="right-section">
        <h2>Iniciar Sesión</h2>
        <button className="social-btn facebook">Iniciar con Facebook</button>
        <button className="social-btn google">Iniciar con Google</button>
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
