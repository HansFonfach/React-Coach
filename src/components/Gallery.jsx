import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    { src: "images/coaching LS.jpeg", title: "Coaching La Serena" },
    { src: "images/COACHING OVALLE.jpeg", title: "Coaching Ovalle" },
    { src: "images/COANIL VALLENAR.jpeg", title: "Coanil Vallenar" },
    {
      src: "images/COLEGIO ANTONIO VARAS VICUÑA.jpeg",
      title: "Colegio Antonio Varas Vicuña",
    },
    {
      src: "images/COLEGIO DALMACIA OVALLE.jpeg",
      title: "Colegio Dalmacia Ovalle",
    },
    {
      src: "images/COLEGIO MARIA EDUCA LA SERENA.jpeg",
      title: "Colegio Maria Educa La Serena",
    },
    {
      src: "images/COLEGIO RAKIDUAM LA SERENA.jpeg",
      title: "Colegio Rakiduam La Serena",
    },
    {
      src: "images/Colegio Sali.jpeg",
      title: "Colegio Salí Hochschild/ Punitaqui",
    },
    {
      src: "images/GESTION Y LIDERAZGO OVALLE.jpeg",
      title: "Gestión y liderazgo Ovalle",
    },
    {
      src: "images/JADIN INFANTIL LA SERENA.jpeg",
      title: "Jardin Infantil La Serena",
    },
    {
      src: "images/LICEO AGRICOLA OVALLE.jpeg",
      title: "Liceo Agricola Ovalle",
    },
    {
      src: "images/LICEO BICENTENARIO PUNITAQUI.jpeg",
      title: "Liceo Bincentenario Punitaqui",
    },
    {
      src: "images/MUNI COMBARBALA.jpeg",
      title: "Dirigentes Combarbala",
    },
    {
      src: "images/SANTO TOMAS OVALLE.jpeg",
      title: "Santo Tomas Ovalle",
    },
    {
      src: "images/SANTO TOMAS PROFESIONALES OVALLE.jpeg",
      title: "Santo Tomas Profesionales Ovalle",
    },
    { src: "images/ULS.jpeg", title: "Universidad de La Serena" },
    {
      src: "images/farmaceuticos.jpeg",
      title: "Encuentro de Químicos Farmacéuticos/ Coquimbo",
    },
    {
      src: "images/Kid’s World School - Coquimbo.mp4",
      title: "Kid’s World School - Coquimbo",
      type: "video",
    },
    {
      src: "images/HOMECENTER OVALLE.jpeg",
      title: "Homecenter Ovalle",
    },
    
  ];

  return (
    <section className="site-section bg-light" id="training-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="text-black">Algunas experiencias</h2>
            <p>
              Espacios de transformación y aprendizaje donde trabajamos
              habilidades clave para el liderazgo consciente, la gestión de
              equipos y el desarrollo organizacional.
            </p>
          </div>
        </div>

        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} className="px-2">
              <div className="training text-center">
                <figure
                  className="mb-4 img-hover-zoom"
                  style={{ overflow: "hidden", borderRadius: "12px" }}
                >
                  {item.type === "video" ? (
                    <video
                      loop
                      autoPlay
                      muted
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    >
                      <source src={item.src} type="video/mp4" />
                      Tu navegador no soporta videos.
                    </video>
                  ) : (
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
                  )}
                </figure>

                <h5 className="text-black mb-2">{item.title}</h5>
              </div>
            </div>
          ))}   
        </Slider>
      </div>

      {/* Estilos de hover */}
      <style jsx>{`
        .img-hover-zoom:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Gallery;
