import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {

  const typedRef = useRef(null)
  useEffect(() => {
    const $ = window.$;

    if ($.fn.owlCarousel) {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false, // Oculta los botones de navegación
        dots: false, // Oculta los indicadores de paginación (si no los quieres)
        autoplay: true, // Activa el cambio automático
        autoplayTimeout: 3000, // Cambia cada 3 segundos
        autoplayHoverPause: false, // No se detiene al pasar el mouse
        items: 1, // Muestra solo una imagen a la vez
      });
    } else {
      console.error("Owl Carousel no está definido.");
    }
  }, []);

  useEffect(() => {
    // Inicializar Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        " RELATOR Y COACH EJECUTIVO",
        " EXPERTO EN GESTIÓN Y LIDERAZGO DIRECTIVO"
      ],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 4000,
      startDelay: 1000,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy(); // Limpia el efecto cuando el componente se desmonta
    };
  }, []);

  return (
    <div>
      {/* Sección Hero */}
      <section className="site-blocks-cover overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 align-self-center">
              <div className="row">
                <div className="col-lg-11">
                  <h1>
                    <span ref={typedRef} className="typed-words"></span>
                  </h1>
                  <p>JAIME ROJAS BRICEÑO</p>
                  <p>
                    <a
                      href="#contact-section"
                      className="btn btn-warning px-5 py-3 text-white smoothscroll"
                    >
                      Contactarme
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Carrusel */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12" style={{ marginTop: "-20%" }}>
              <div className="owl-carousel">
                <img
                  src="/images/tiojaim.jpeg"
                  alt="Jaime Rojas Briceño"
                  className="img-fluid img"
                />
                <img
                  src="/images/tiojaime2.jpg"
                  alt="Jaime Rojas Briceño"
                  className="img-fluid img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Acerca de */}
      <section className="site-section" id="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mr-auto mb-5">
              <h2 className="text-black mb-4">Bienvenido a mi sitio web</h2>
              <p>
                Mi nombre es Jaime Rojas Briceño, docente que he ejercido la
                mayor parte de mi carrera profesional asumiendo desafíos
                directivos lo cual me ha llevado a mirar el funcionamiento
                escolar más allá de lo que significa un proyecto educativo
                institucional, sino más bien entendiendo este fenómeno desde el
                desarrollo organizacional, razón por la cual he perfeccionado
                mis habilidades directivas en el área de la dirección
                estratégica de las organizaciones en general.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
