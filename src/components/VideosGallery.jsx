import React from "react";
import ReactPlayer from "react-player";


function VideosGallery() {
  const videoList = [
    // YouTube (ReactPlayer)
    {
      url: "https://www.youtube.com/watch?v=XFvns69GclA",
      title: "Entrevista: Jaime - Coach Ejecutivo Profesional",
      type: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=SrDM0OnpwoM",
      title: "Presentación: Fundación Bienestar",
      type: "youtube",
    },
    // Shorts de YouTube (iframe)
    {
      url: "https://www.instagram.com/reel/C-p9ESIOXak/?igsh=MXR5dGtyYTN2bnR0MQ%3D%3D",
      title: "Reel: Herramientas de Coaching",
      type: "iframe",
    },
 
    // Instagram Reel (iframe)
    {
      url: "https://www.instagram.com/reel/DGMRk7sxaRL/?igsh=Y3k2c3dpaTd2M3Fw",
      title: "Reel: Herramientas de Coaching",
      type: "iframe",
    },
  ];

  return (
    <section className="site-section bg-primary" id="videos-section">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-6 text-center mb-5">
            <h2 className="text-white mb-2">Entrevistas y Presentaciones</h2>
            <p>
              Explora videos destacados sobre liderazgo, coaching y educación.
            </p>
          </div>
        </div>
        <div className="row">
          {videoList.map((video, index) => (
            <div
              key={index}
              className="col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-2 bg-white rounded shadow-sm h-100">
                {video.type === "youtube" ? (
                  <ReactPlayer
                    url={video.url}
                    controls
                    width="100%"
                    height="200px"
                    style={{ borderRadius: "8px" }}
                  />
                ) : (
                  <iframe
                    src={video.url}
                    width="100%"
                    height="200"
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ borderRadius: "8px" }}
                  ></iframe>
                )}
                <h5 className="mt-3">{video.title}</h5>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
}

export default VideosGallery;
