import React from "react";

function Books() {
  return (
    <section className="site-section bg-light" id="books-section">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-6 text-center mb-5">
            <h2 className="text-black mb-2">Mis libros</h2>
            <p>Conoce los distintos libros que tengo para ti</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <a href="single.html">
                  <img
                    src="images/libro1.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </a>
              </figure>
              <div className="blog-entry-text">
                <h3>
                  <a href="single.html">
                    Me nombraron directivo escolar, qué debo aprender
                  </a>
                </h3>
                <span className="post-meta mb-3 d-block">April 17, 2019</span>
                <p>
                  Distinciones conceptuales que han sido puestas en prácticas
                  por profesionales que han decidido asumir un cargo directivo.
                </p>
                <strong>
                  <p>
                    <a
                      href="docs/Capitulo 4 - Liderazgo directivo y Coaching ejecutivo.pdf"
                      className="text-danger"
                    >
                      Leer capitulo 4.
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.amazon.com/-/es/Me-nombraron-directivo-escolar-aprender/dp/B0CPLF9K6V"
                      className=""
                    >
                      Compra aquí.
                    </a>
                  </p>
                </strong>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="">
            <div className="d-lg-flex blog-entry">
              <figure className="mr-4">
                <a href="single.html">
                  <img
                    src="images/libro2.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </a>
              </figure>
              <div className="blog-entry-text">
                <h3>
                  <a href="single.html">
                    Jefatura y liderazgo de un director escolar{" "}
                  </a>
                </h3>
                <span class="post-meta mb-3 d-block">April 17, 2019</span>
                <p>
                  Libro que articula jefatura y liderazgo, más allá de
                  trincheras idealizadas e integrando dos mundos: Teoría y
                  Práctica.
                </p>
                <strong>
                  <p>
                    <a
                      href="docs/Capitulo 4 - Liderazgo directivo y Coaching ejecutivo.pdf"
                      className="text-danger"
                    >
                      Leer capitulo 5.
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.amazon.com/Jefatura-liderazgo-directivo-escolar-Spanish/dp/B0DSJ6LS42"
                      className=""
                    >
                      Compra aquí.
                    </a>
                  </p>
                </strong>
              </div>
            </div>
          </div>
          {/* Repite para el otro libro */}
        </div>
      </div>
    </section>
  );
}

export default Books;
