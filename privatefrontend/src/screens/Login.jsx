import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import Pilimg from "../images/Pil.png";
import Fbbtn from "../images/fb.png";
import Glbtn from "../images/gl.png";


const Login = () => {

  const { Login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!email || !password) {
    toast.error("Por favor, completa todos los campos.");
    return;
  }

  try {
    const success = await Login(email, password); 

      if (success) {
        toast.success("Inicio de sesión exitoso.");
        navigate("/employees");
      } else {
        toast.error("Credenciales incorrectas. Por favor, intenta de nuevo.");
      }
  } catch (err) {
    toast.error("Ocurrió un error al iniciar sesión.");
    console.error(err);
  }
};

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
        <form className= "formlogin" onSubmit={handleSubmit}>
          <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Correo electrónico" 
          />

          <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
          placeholder="Contraseña" 
          />
          {/*<Link to="/recover-password" className="forgot-password">¿Has olvidado tu contraseña?</Link>*/}
          <button type="submit" className="linklogin">Iniciar sesión</button> 
        </form>
        {/*<p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>*/}

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
          className: "",
          duration: 2000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />

      </div>
    </div>
  );
};

export default Login;
