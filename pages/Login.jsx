import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";

const LoginPage = () => {
  const [correo, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/blog");
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await signIn({ correo, password });
      
      if (response && response.token) {
        navigate("/blog");
      } else {
        setErrorMessage("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      
      if (error.response?.status === 401) {
        setErrorMessage("Contraseña incorrecta");
      } else if (error.response?.status === 404) {
        setErrorMessage("Usuario no encontrado");
      } else {
        setErrorMessage("Error al iniciar sesión. Inténtalo de nuevo");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-panel">
      {/* Header con degradado */}
      <div className="admin-header text-center">
        <h1 className="admin-title">Iniciar Sesión</h1>
        <p className="admin-subtitle">Accede a tu panel de administración</p>
      </div>

      {/* Tarjeta de formulario */}
      <div className="admin-profile-card">
        <div className="profile-section text-center">
          <img 
            src="/images/person_1.jpg" 
            alt="Usuario" 
            className="profile-image" 
          />
          <h4 className="profile-name">Bienvenido</h4>
          <p className="profile-role">Ingresa tus credenciales</p>
        </div>

        <div className="p-4 p-md-5">
          {errorMessage && (
            <div className="alert alert-danger text-center p-3 mb-4 rounded">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label">Correo Electrónico</label>
              <input
                className="form-control form-control-lg"
                placeholder="tu@correo.com"
                type="email"
                value={correo}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Contraseña</label>
              <input
                className="form-control form-control-lg"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  id="rememberMe" 
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Recordarme
                </label>
              </div>
              
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-5 py-3"
                disabled={isLoading}
                style={{
                  borderRadius: "30px",
                  fontWeight: "600",
                  boxShadow: "0 4px 15px rgba(13, 110, 253, 0.3)",
                  transition: "all 0.3s ease",
                  width: "100%",
                  maxWidth: "300px"
                }}
                onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
                onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Ingresando...
                  </>
                ) : (
                  "Ingresar"
                )}
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-muted">
              ¿No tienes una cuenta?{" "}
              <Link to="/register" className="text-primary">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;