import React from 'react';

function NavBar() {
  return (
    <header className="site-navbar js-sticky-header site-navbar-target fixed-top" role="banner">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-6 col-xl-2">
        <h1 className="mb-0 site-logo">
          <a href="/" className="h2 mb-0">Coaching<span className="text-primary">.</span></a>
        </h1>
      </div>
      <div className="col-12 col-md-10 d-none d-xl-block">
        <nav className="site-navigation position-relative text-right" role="navigation">
          <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
            <li><a href="#home-section" className="nav-link">Inicio</a></li>
            <li><a href="#about-section" className="nav-link">Acerca</a></li>
            <li><a href="#services-section" className="nav-link">Servicios</a></li>
            <li><a href="#training-section" className="nav-link">Coach</a></li>
          
            <li><a href="#books-section" className="nav-link">Libros</a></li>
            <li><a href="#blog-section" className="nav-link">Blogs</a></li>
            <li><a href="#contact-section" className="nav-link">Contacto</a></li>
          </ul>
        </nav>
      </div>
      <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{ position: 'relative', top: '3px' }}>
        <a href="#" className="site-menu-toggle js-menu-toggle float-right">
          <span className="icon-menu h3"></span>
        </a>
      </div>
    </div>
  </div>
</header>
  );
}

export default NavBar;