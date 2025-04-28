const Gallery = () => {
    return (
      <div>
        <section className="site-section bg-light" id="training-section">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="text-black">
                  Sesiones y talleres destacados / Coaching en acción
                </h2>
                <p>
                  Espacios de transformación y aprendizaje donde trabajamos
                  habilidades clave para el liderazgo consciente, la gestión de
                  equipos y el desarrollo organizacional.
                </p>
              </div>
            </div>
  
            <div className="nonloop-block-13 owl-style owl-carousel">
              {[
                { src: "images/coaching LS.jpeg", title: "Coaching La Serena" },
                { src: "images/COACHING OVALLE.jpeg", title: "Coaching Ovalle" },
                { src: "images/COANIL VALLENAR.jpeg", title: "Coanil Vallenar" },
                { src: "images/COLEGIO ANTONIO VARAS VICUÑA.jpeg", title: "Colegio Antonio Varas Vicuña" },
                { src: "images/COLEGIO DALMACIA OVALLE.jpeg", title: "Colegio Dalmacia Ovalle" },
                { src: "images/COLEGIO MARIA EDUCA LA SERENA.jpeg", title: "Colegio Maria Educa La Serena" },
                { src: "images/COLEGIO RAKIDUAM LA SERENA.jpeg", title: "Colegio Rakiduam La Serena" },
                { src: "images/Colegio Sali.jpeg", title: "Colegio Sali" },
                { src: "images/GESTION Y LIDERAZGO OVALLE.jpeg", title: "Gestión y liderazgo Ovalle" },
                { src: "images/JADIN INFANTIL LA SERENA.jpeg", title: "Jardin Infantil La Serena" },
                { src: "images/LICEO AGRICOLA OVALLE.jpeg", title: "Liceo Agricola Ovalle" },
                { src: "images/LICEO BICENTENARIO PUNITAQUI.jpeg", title: "Liceo Bincentenario Punitaqui" },
                { src: "images/MUNI COMBARBALA.jpeg", title: "Muni Combarbala" },
                { src: "images/SANTO TOMAS OVALLE.jpeg", title: "Santo Tomas Ovalle" },
                { src: "images/SANTO TOMAS PROFESIONALES OVALLE.jpeg", title: "Santo Tomas Profesionales Ovalle" },
                { src: "images/ULS.jpeg", title: "Universidad de La Serena" },


              ].map((item, index) => (
                <div key={index} className="training text-center">
                  <figure 
                    className="mb-4 img-hover-zoom" 
                    style={{ overflow: "hidden", borderRadius: "12px" }}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </figure>
                  <h5 className="text-black mb-2">{item.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Estilos de hover */}
        <style jsx>{`
          .img-hover-zoom:hover img {
            transform: scale(1.05); /* Hace zoom suave */
          }
        `}</style>
      </div>
    );
  };
  
  export default Gallery;
  