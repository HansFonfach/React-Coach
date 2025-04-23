import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom"; // Añade esto

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used with an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Obtiene la ruta actual

  const signIn = async (userData) => {
    try {
      const res = await loginRequest(userData);

      // Asegurate que el backend devuelve el usuario en res.data.user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.status === 200) {
        setUser(res.data.user);
        setIsAuthenticated(true);
        return res.data;
      }

      return null;
    } catch (error) {
      console.log("Error en signIn:", error);
      return null;
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await verifyTokenRequest();
        setUser(res.data);
        setIsAuthenticated(true);
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [location.pathname]); // <- importante para revalidar en cada cambio de ruta

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        isAuthenticated,
        loading,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
