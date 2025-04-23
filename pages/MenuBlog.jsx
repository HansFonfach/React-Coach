import React from "react";
import avatarImage from "../public/images/autor2.jpeg";

const AdminMenu = () => {
  return (

    <div className="admin-panel">
     
      
      {/* Hero Header */}
      <header className="admin-header">
        <div className="container text-center">
          <h1 className="admin-title">Panel de Administración</h1>
          <p className="admin-subtitle">Gestión de Contenido del Blog</p>
        </div>
      </header>
    
      {/* Main Content */}
      <main className="admin-content">
        <div className="container">
          <div className="admin-profile-card">
            {/* Profile Section */}
            <div className="profile-section text-center">
              <img
                src={avatarImage}
                alt="Administrador"
                className="profile-image"
              />
              <h2 className="profile-name">Jaime Rojas</h2>
              <p className="profile-role">Administrador Principal</p>
            </div>

            {/* Menu Options */}
            <div className="menu-options">
              <div className="menu-item">
                <a href="/add-blog" className="menu-link">
                  <div className="menu-content">
                    <h3 className="menu-title">Crear Nueva Publicación</h3>
                    <p className="menu-description">Redacta y publica un nuevo artículo en el blog</p>
                  </div>
                  <div className="menu-arrow">
                    <span className="arrow-icon"></span>
                  </div>
                </a>
              </div>

              <div className="menu-item">
                <a href="/blogs" className="menu-link">
                  <div className="menu-content">
                    <h3 className="menu-title">Gestión de Publicaciones</h3>
                    <p className="menu-description">Administra y edita todos los artículos existentes</p>
                  </div>
                  <div className="menu-arrow">
                    <span className="arrow-icon"></span>
                  </div>
                </a>
              </div>

              <div className="menu-item">
                <button className="menu-link logout-btn">
                  <div className="menu-content">
                    <h3 className="menu-title">Cerrar Sesión</h3>
                    <p className="menu-description">Salir del panel de administración</p>
                  </div>
                  <div className="menu-arrow">
                    <span className="arrow-icon"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminMenu;