import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
