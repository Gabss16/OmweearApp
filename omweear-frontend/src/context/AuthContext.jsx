import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authToken, setAuthToken] = useState(null);
  const navigate = useNavigate();
  
  const API = "http://localhost:4000/api";

  // Función para obtener headers con token
  const getAuthHeaders = useCallback(() => {
    const token = authToken || localStorage.getItem("authToken");
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }, [authToken]);

  // Función para limpiar sesión
  const clearSession = useCallback(() => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    Cookies.remove("authToken", { path: '/' });
    setUser(null);
    setAuthToken(null);
    setIsAuthenticated(false);
  }, []);

  // Verificar sesión al cargar la aplicación
  const checkAuthStatus = useCallback(async () => {
    try {
      console.log("Verificando estado de autenticación...");
      
      // Obtener token de localStorage primero
      const token = localStorage.getItem("authToken");
      
      if (!token) {
        console.log("No hay token guardado");
        clearSession();
        setIsLoading(false);
        return;
      }

      console.log("Token encontrado:", token.substring(0, 20) + "...");
      
      // Hacer petición con el token
      const verifyRes = await fetch(`${API}/login/verify`, {
        method: 'GET',
        credentials: "include",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log("Status de verificación:", verifyRes.status);

      // Si el token no es válido o expiró
      if (verifyRes.status === 401) {
        console.log("Token inválido o expirado (401), limpiando sesión");
        clearSession();
        setIsLoading(false);
        return;
      }

      // Verificar si la respuesta es OK
      if (!verifyRes.ok) {
        console.log(`Error en verificación: ${verifyRes.status} ${verifyRes.statusText}`);
        clearSession();
        setIsLoading(false);
        return;
      }

      const verifyData = await verifyRes.json();
      console.log("Respuesta de verificación:", verifyData);

      if (verifyData.success && verifyData.user) {
        console.log("Usuario autenticado encontrado:", verifyData.user);
        setIsAuthenticated(true);
        setUser(verifyData.user);
        setAuthToken(token);
        
        // Actualizar localStorage
        localStorage.setItem("user", JSON.stringify(verifyData.user));
        
        // Si el servidor devuelve un nuevo token, actualizarlo
        if (verifyData.token && verifyData.token !== token) {
          localStorage.setItem("authToken", verifyData.token);
          setAuthToken(verifyData.token);
        }
      } else {
        console.log("Respuesta de verificación no válida");
        clearSession();
      }
    } catch (error) {
      console.error("Error verificando autenticación:", error);
      
      // En caso de error de red, mantener sesión local temporalmente
      // pero marcar como no autenticado para evitar comportamientos inesperados
      const savedUser = localStorage.getItem("user");
      
      if (savedUser) {
        console.log("Error de red, manteniendo sesión local temporalmente");
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(false); // Marcar como no autenticado hasta verificar
      } else {
        clearSession();
      }
    } finally {
      setIsLoading(false);
    }
  }, [API, clearSession]);

  // Ejecutar verificación al montar el componente
  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  //Función para iniciar sesión
  const login = async (email, password) => {
    try {
      console.log('=== DEBUGGING LOGIN ===');
      console.log('Email:', email);
      console.log('Password length:', password.length);
      console.log('API URL:', `${API}/login`);

      const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      console.log('Response status:', response.status);
      console.log('Response statusText:', response.statusText);

      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.message || "Error en la autenticación");
      }

      // Si el backend devuelve el usuario y token
      if (data.success && data.user) {
        // Guardar token si existe
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          setAuthToken(data.token);
          console.log("Token guardado:", data.token.substring(0, 20) + "...");
        }
        
        // Guardar información del usuario
        localStorage.setItem("user", JSON.stringify(data.user));
        
        setIsAuthenticated(true);
        setUser(data.user);
        console.log("Login exitoso, usuario autenticado:", data.user);
        
        return { success: true, message: data.message };
      }

      // Si no hay datos del usuario, verificar estado
      console.log("Login exitoso pero sin datos de usuario completos");
      
      // Esperar un poco antes de verificar para que el servidor procese
      setTimeout(() => {
        checkAuthStatus();
      }, 100);
      
      return { success: data.success, message: data.message };
    } catch (error) {
      console.error("Error en login:", error);
      return { success: false, message: error.message };
    }
  };

  // Definir la función logout como useCallback
  const logout = useCallback(async () => {
    try {
      // Intentar cerrar sesión en el servidor
      await fetch(`${API}/logout`, {
        method: "POST",
        credentials: "include",
        headers: getAuthHeaders()
      });
    } catch (error) {
      console.error("Error al cerrar sesión en el servidor:", error);
    } finally {
      // Siempre limpiar la sesión local
      clearSession();
      navigate("/");
      toast.success("Sesión cerrada correctamente");
    }
  }, [API, navigate, getAuthHeaders, clearSession]);

  // Función helper para hacer peticiones autenticadas
  const authFetch = useCallback(async (url, options = {}) => {
    const defaultOptions = {
      credentials: "include",
      headers: getAuthHeaders(),
      ...options,
      headers: {
        ...getAuthHeaders(),
        ...options.headers
      }
    };

    try {
      const response = await fetch(url, defaultOptions);
      
      // Si es 401, el token ha expirado
      if (response.status === 401) {
        console.log("Token expirado en petición autenticada, cerrando sesión");
        await logout();
        throw new Error("Sesión expirada");
      }
      
      return response;
    } catch (error) {
      console.error("Error en petición autenticada:", error);
      throw error;
    }
  }, [getAuthHeaders, logout]);

  // Objeto de valores del contexto
  const contextValue = {
    user,
    authToken,
    isAuthenticated,
    isLoading,
    login,
    logout,
    authFetch,
    API,
    clearSession,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};