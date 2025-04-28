import React from "react";
import { Link } from "react-router-dom";

function Books() {
  return (
    <section className="site-section" id="books-section">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-6 text-center mb-5">
            <h2 className="text-black mb-2">Mis libros</h2>
            <p>Conoce los distintos libros que tengo para ti</p>
          </div>
        </div>
        <div className="row">
          {/* Libro 1 */}
          <div className="col-md-6 mb-4" data-aos="fade-up">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <img
                  src="images/libro1.jpg"
                  alt="Image"
                  className="img-fluid rounded"
                />
              </figure>
              <div className="blog-entry-text">
                <h3>Me nombraron directivo escolar, qué debo aprender</h3>
                <span className="post-meta mb-3 d-block">April 17, 2019</span>
                <p>
                  Distinciones conceptuales que han sido puestas en prácticas
                  por profesionales que han decidido asumir un cargo directivo.
                </p>
                <strong>
                  <p>
                    <Link to="/pdf/capitulo4.pdf">Ver Capítulo 4</Link>
                    Leer capítulo 4
                  </p>
                  <p>
                    <a
                      href="https://www.amazon.com/-/es/Me-nombraron-directivo-escolar-aprender/dp/B0CPLF9K6V"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Compra aquí
                    </a>
                  </p>
                </strong>
              </div>
            </div>
          </div>

          {/* Libro 2 */}
          <div className="col-md-6 mb-4" data-aos="fade-up">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <img
                  src="images/libro2.jpg"
                  alt="Image"
                  className="img-fluid rounded"
                />
              </figure>
              <div className="blog-entry-text">
                <h3>Jefatura y liderazgo de un director escolar</h3>
                <span className="post-meta mb-3 d-block">April 17, 2019</span>
                <p>
                  Libro que articula jefatura y liderazgo, más allá de
                  trincheras idealizadas e integrando dos mundos: Teoría y
                  Práctica.
                </p>
                <p>
                <a href="../../public/docs/capitulo5.pdf" target="_blank" rel="noopener noreferrer">Ver Capítulo 5</a>
                </p>
                <p>
                  <a
                    href="https://www.amazon.com/Jefatura-liderazgo-directivo-escolar-Spanish/dp/B0DSJ6LS42"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Compra aquí
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Books;
