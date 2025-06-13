import { createContext, useState, useContext, useEffect } from "react";
import API_BASE from '../api/URL.js'

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authToken, setAuthToken] = useState(null);

  const API = `${API_BASE}/api`;

  // Función para obtener headers con token
  const getAuthHeaders = () => {
    const token = authToken || localStorage.getItem("authToken");
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  };

  // Verificar sesión al cargar la aplicación
  const checkAuthStatus = async () => {
    try {
      console.log("Verificando estado de autenticación...");
      
      // Primero intentar con cookies
      let verifyRes = await fetch(`${API}/login/verify`, {
        credentials: "include",
        headers: getAuthHeaders()
      });

      // Si falla con cookies, intentar solo con headers
      if (!verifyRes.ok) {
        const token = localStorage.getItem("authToken");
        if (token) {
          console.log("Reintentando verificación solo con headers...");
          verifyRes = await fetch(`${API}/login/verify`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
        }
      }

      // Verificar si la respuesta es OK antes de parsear
      if (!verifyRes.ok) {
        console.log("Token inválido o expirado, cerrando sesión");
        // Limpiar localStorage también
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUser(null);
        setAuthToken(null);
        setIsLoading(false);
        return;
      }

      const verifyData = await verifyRes.json();
      console.log("Respuesta de verificación:", verifyData);

      if (verifyData.ok && verifyData.user) {
        console.log("Usuario autenticado encontrado:", verifyData.user);
        setIsAuthenticated(true);
        setUser(verifyData.user);
        
        // Guardar en localStorage como respaldo
        if (verifyData.token) {
          localStorage.setItem("authToken", verifyData.token);
          setAuthToken(verifyData.token);
        }
        localStorage.setItem("user", JSON.stringify(verifyData.user));
      } else {
        console.log("No hay usuario autenticado");
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUser(null);
        setAuthToken(null);
      }
    } catch (error) {
      console.error("Error verificando autenticación:", error);
      
      // En caso de error de red, restaurar desde localStorage
      const savedToken = localStorage.getItem("authToken");
      const savedUser = localStorage.getItem("user");
      
      if (savedToken && savedUser) {
        console.log("Restaurando sesión desde localStorage debido a error de red");
        setAuthToken(savedToken);
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        setUser(null);
        setAuthToken(null);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Ejecutar verificación al montar el componente
  useEffect(() => {
    // Primero restaurar desde localStorage
    const savedToken = localStorage.getItem("authToken");
    const savedUser = localStorage.getItem("user");
    
    if (savedToken) {
      setAuthToken(savedToken);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      }
    }

    // Luego verificar con el servidor
    checkAuthStatus();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en la autenticación");
      }

      // Si el backend devuelve el usuario y token
      if (data.success && data.user) {
        // Guardar token en localStorage como respaldo
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          setAuthToken(data.token);
        }
        
        // Guardar información del usuario
        localStorage.setItem("user", JSON.stringify(data.user));
        
        setIsAuthenticated(true);
        setUser(data.user);
        console.log("Login exitoso, usuario autenticado:", data.user);
        return { success: true, message: data.message };
      }

      // Si no hay datos del usuario, verificar estado
      console.log("Login exitoso pero sin datos de usuario, verificando...");
      await checkAuthStatus();
      
      return { success: data.success, message: data.message };
    } catch (error) {
      console.error("Error en login:", error);
      return { success: false, message: error.message };
    }
  };

  const Logout = async () => {
    try {
      await fetch(`${API}/logout`, {
        method: "POST",
        credentials: "include",
        headers: getAuthHeaders()
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      // Limpiar datos locales y estado
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      setIsAuthenticated(false);
      setUser(null);
      setAuthToken(null);
    }
  };

  // Función helper para hacer peticiones autenticadas
  const authFetch = async (url, options = {}) => {
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
      
      // Si es 401, el token probablemente expiró
      if (response.status === 401) {
        console.log("Token expirado, cerrando sesión");
        await Logout();
      }
      
      return response;
    } catch (error) {
      console.error("Error en petición autenticada:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        isLoading, 
        login, 
        Logout,
        checkAuthStatus,
        authFetch,
        authToken,
        API
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};