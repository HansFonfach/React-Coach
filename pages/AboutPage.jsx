import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../src/components/Footer";

const aboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    window.scrollTo(0, 0);
  }, []);

  const experienciaYFormacion = [
    "Postitulado en Liderazgo Educacional",
    "Diplomado en Dirección Estratégica",
    "Magíster en Gestión y Liderazgo Educacional",
    "Magíster en Dirección Estratégica, Liderazgo y Comunicación Organizacional",
    "Diplomado en Coaching Ejecutivo",
    "Coach Ejecutivo Profesional certificado por la Pontificia Universidad Católica de Chile",
    "Certificado Hogan Assessment",
    "Certificado en Cultura Organizacional Denison",
    "18 años en cargos directivos escolares",
    "Basta experiencia en relatoría y Coaching Ejecutivo",
  ];

  return (
    <>
      <section
        className="site-section py-5 "
        style={{ background: "linear-gradient(to bottom, #f8f9fa, #ffffff)" }}
      >
        <div className="container">
          {/* Imagen y título */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-8 " data-aos="fade-up">
              <img
                src="/images/tiojaim.jpeg" // Asegúrate de tener la imagen correcta
                alt="Jaime Rojas Briceño"
                className="rounded-circle mb-4 shadow-lg"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  border: "5px solid #007bff",
                }}
              />
              <h2 className="mb-3 text-primary">Sobre Mí</h2>
              <p className="lead text-black-50">
                Mi pasión es acompañar y potenciar el liderazgo de personas y
                equipos, construyendo resultados sólidos y relaciones genuinas.
              </p>
            </div>
          </div>

          {/* Texto principal */}
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up">
              <div className="bg-white p-5 rounded shadow">
                <h4 className="text-primary mb-4">
                  Liderazgo Consciente y Transformador
                </h4>
                <p>
                  Creo profundamente en la importancia de integrar la
                  experiencia con la teoría, y de unir la práctica con espacios
                  de reflexión que permitan un aprendizaje más profundo y
                  transformador.
                </p>

                <p>
                  A través de este enfoque, acompaño a directivos de manera
                  individual y también a equipos de trabajo que buscan crecer de
                  forma sostenible y consciente.
                </p>

                <p>
                  El liderazgo mantiene su esencia más allá del rol o el
                  contexto en el que te toque ejercerlo, y esa convicción me ha
                  permitido apoyar tanto a directivos escolares como a líderes
                  de equipos en distintas áreas.
                </p>

                <div className="my-5">
                  <hr />
                </div>

                <h4 className="text-primary mb-4">
                  Experiencia y Formación Profesional.
                </h4>
                <ul className="list-unstyled text-justify">
                  {experienciaYFormacion.map((item, index) => (
                    <li key={index} className="mb-3 d-flex align-items-start">
                      <span>• {item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-5">
                  <a
                    href="/"
                    className="btn btn-danger btn-lg px-5 py-3 shadow"
                  >
                    Volver
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default aboutPage;
