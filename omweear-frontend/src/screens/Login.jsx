import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext"; // Usar el hook personalizado
import { Link } from "react-router-dom";

import "./Login.css";
import Pilimg from "../images/Pil.png";
import Fbbtn from "../images/fb.png";
import Glbtn from "../images/gl.png";

const Login = () => {
  const { login } = useAuth(); // Usar el hook personalizado
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return toast.error("Por favor, complete el correo y la contraseña.");
    }

    setIsSubmitting(true);

    try {
      const result = await login(form.email, form.password);
      
      if (result.success) {
        toast.success(result.message || "Inicio de sesión exitoso");
        navigate("/shop"); // o la ruta que prefieras
      } else {
        toast.error(result.message || "Correo o contraseña incorrectos.");
      }
    } catch (error) {
      console.error("Error en handleSubmit:", error);
      toast.error("Error inesperado durante el login");
    } finally {
      setIsSubmitting(false);
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
        <form className="formlogin" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <Link to="/recover-password" className="forgot-password">¿Has olvidado tu contraseña?</Link>
          <button 
            type="submit" 
            className="linklogin"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Iniciando..." : "Iniciar sesión"}
          </button>
        </form>
        <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default Login;