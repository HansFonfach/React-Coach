import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);
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
                {" "}
                Hola, soy <strong>Jaime Rojas Briceño.</strong> Durante gran
                parte de mi vida profesional he trabajado en cargos directivos
                dentro del mundo escolar, una experiencia que me ha permitido
                aprender, crecer y, sobre todo, comprender la importancia del
                liderazgo en el día a día.
              </p>

              <p>
                {" "}
                Hoy, desde mi experiencia como directivo, relator y coach
                ejecutivo, acompaño a personas y equipos que desean fortalecer
                sus habilidades de liderazgo y gestión. Mi enfoque es ayudarte a
                alcanzar mejores resultados, no solo a través de herramientas
                prácticas de gestión, sino también potenciando la manera en que
                te conectas y te relacionas con los demás.
              </p>

              <p>
                {" "}
                Creo profundamente en la importancia de integrar la experiencia
                con la teoría, y de unir la práctica con espacios de reflexión
                que permitan un aprendizaje más profundo y transformador.
              </p>

              <p>
                {" "}
                A través de este enfoque, acompaño a directivos de manera
                individual y también a equipos de trabajo que buscan crecer de
                forma sostenible y consciente.{" "}
              </p>

              <p>
                {" "}
                El liderazgo mantiene su esencia más allá del rol o el contexto
                en el que te toque ejercerlo, y esa convicción me ha permitido
                apoyar tanto a directivos escolares como a líderes de equipos en
                distintas áreas.{" "}
              </p>

              <strong>
                <p>
                  Te invito a que te contactes conmigo. Estaré feliz de
                  acompañarte en tu posicionamiento y desarrollo profesiona.
                </p>
              </strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
