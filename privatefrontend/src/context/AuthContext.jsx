import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext();
import { toast } from "react-hot-toast";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Login = (email, password) => {
    if (!email || !password) {
      toast.error("Por favor, completa todos los campos.");
      return false;
    } else if (email == "adminomweear@gmail.com" && password == "Omweear2025") {
      localStorage.setItem("user", JSON.stringify({ email }));
      setUser(email);
      setIsLoggedIn(true);

      toast.success("Inicio de sesión exitoso.");
      return true;
    } else {
      toast.error("Credenciales incorrectas. Por favor, intenta de nuevo.");
      setIsLoggedIn(false);
      return false;
    }
  };

  const logOut = () => {
    try {
      localStorage.removeItem("user");
      setUser(null);
      setIsLoggedIn(false);
      toast.success("Sesión cerrada.");
      return true;
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      toast.error("Error al cerrar sesión.");
      return false;
    }
  };

  
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, Login, logOut, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);