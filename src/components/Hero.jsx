import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // 👈 Importa Link
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const $ = window.$;

    if ($.fn.owlCarousel) {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
      });
    } else {
      console.error("Owl Carousel no está definido.");
    }
  }, []);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        " RELATOR Y COACH EJECUTIVO",
        " EXPERTO EN GESTIÓN Y LIDERAZGO DIRECTIVO",
      ],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 4000,
      startDelay: 1000,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      {/* Sección Hero */}
      <section className="site-blocks-cover overflow-hidden pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
              <img
                src="/images/tiojaim.jpeg"
                alt="Jaime Rojas Briceño"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="col-lg-6 text-center text-lg-left">
              <h1>
                <span ref={typedRef} className="typed-words"></span>
              </h1>
              <p className="text-white h4 mt-3">JAIME ROJAS BRICEÑO</p>
              <p>
                <a
                  href="#contact-section"
                  className="btn btn-warning px-5 py-3 text-white smoothscroll mt-3"
                >
                  Contactarme
                </a>
              </p>
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
                Hola, soy <strong>Jaime Rojas Briceño.</strong> Durante gran
                parte de mi vida profesional he trabajado en cargos directivos
                dentro del mundo escolar, una experiencia que me ha permitido
                aprender, crecer y, sobre todo, comprender la importancia del
                liderazgo en el día a día.
              </p>

              <p>
                Hoy, desde mi experiencia como directivo, relator y coach
                ejecutivo, acompaño a personas y equipos que desean fortalecer
                sus habilidades de liderazgo y gestión. Mi enfoque es ayudarte a
                alcanzar mejores resultados, no solo a través de herramientas
                prácticas de gestión, sino también potenciando la manera en que
                te conectas y te relacionas con los demás.
              </p>

              {/* Botón para ir a la página de información completa */}
              <p>
                <Link to="/about" className="btn btn-outline-primary text-white bg-primary px-4 py-2 mt-3">
                  Leer más sobre mi.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
