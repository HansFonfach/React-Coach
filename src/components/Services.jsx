import React from "react";

function Services() {
  return (
    <section className="site-section bg-primary py-5" id="services-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="text-white">
              CAPACITACIONES - COACHING EJECUTIVO - COACHING DE EQUIPO
            </h2>
            <p className="text-white">
              Mi intención es proporcionarles las herramientas, conocimientos y
              experiencias, para gestionar tu profesión y lograr el
              posicionamiento que mereces.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex">
            <div className="service bg-white p-4 text-center">
              <div className="icon">
                <span className="flaticon-elearning display-2 text-primary"></span>
              </div>
              <h3 className="text-black mb-3">CAPACITACIONES</h3>
              <p>
                Dirigidos a grupos de profesionales que desean adquirir
                herramientas para fortalecer su gestión y liderazgo.
              </p>
            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="service bg-white p-4 text-center">
              <div class="icon">
                <span class="flaticon-manager display-2 text-primary"></span>
              </div>
              <h3 class="text-black mb-3">COACHING EJECUTIVO</h3>
              <p>
                Coaching Ejecutivo diseñado para potenciar tu liderazgo,
                fortalecer tu gestión directiva y maximizar tu desarrollo
                profesional, adaptándose a tus singulares necesidades.
              </p>
            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="service bg-white p-4 text-center">
              <div class="icon">
                <span class="flaticon-group display-2 text-primary"></span>
              </div>
              <h3 class="text-black mb-3">COACHING DE EQUIPOS DIRECTIVOS</h3>
              <p>
                Proceso que se focaliza en la inteligencia colectiva y el
                trabajo colaborativo para diseñar y lograr objetivos
              </p>
            </div>
          </div>

          {/* Repite para las otras tarjetas */}
        </div>
      </div>
    </section>
  );
}

export default Services;
