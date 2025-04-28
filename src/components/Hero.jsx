import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

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

                  {/* Botón para abrir el Modal */}
                  <p>
                    <button
                      onClick={() => setShowModal(true)}
                      className="btn btn-outline-warning px-4 py-2 mt-3"
                    >
                      Ver experiencia y formación profesional
                    </button>
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
                  acompañarte en tu posicionamiento y desarrollo profesional.
                </p>
              </strong>

            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Experiencia y Formación Profesional</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-warning mr-3" style={{ fontSize: "1.5rem" }}>🏅</span>
                    <span>Docente y Magíster en Gestión y Liderazgo Educacional, así como en Liderazgo, Dirección Estratégica y Comunicación Organizacional.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-warning mr-3" style={{ fontSize: "1.5rem" }}>🏅</span>
                    <span>Certificado como Coach Ejecutivo Profesional por la Pontificia Universidad Católica de Chile.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-warning mr-3" style={{ fontSize: "1.5rem" }}>🏅</span>
                    <span>18 años de experiencia en cargos directivos en el ámbito educativo, además de una amplia trayectoria como relator y en Coaching Ejecutivo.</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-warning mr-3" style={{ fontSize: "1.5rem" }}>🏅</span>
                    <span>Actualmente curso estudios de Psicología y me desempeño como Rector de una prestigiosa institución educativa, con más de 1,700 estudiantes y 198 colaboradores comprometidos con la educación.</span>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
