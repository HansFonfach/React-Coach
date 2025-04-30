// VideosGallery.js
import React from "react";
import ReactPlayer from "react-player";
import Instagram from "./Instagram";

function VideosGallery() {
  const videoList = [
    {
      url: "https://www.youtube.com/watch?v=XFvns69GclA",
      title: "Presentación libro.",
      type: "youtube",
    },
    {
      url: "https://www.youtube.com/watch?v=SrDM0OnpwoM",
      title: "Entrevista: Fundación Bien.",
      type: "youtube",
    },
    {
      url: "https://youtu.be/0unYcdyqs4k",
      title: "Aprendizaje para la mejora continua.",
      type: "youtube",
    },
    {
      url: "https://youtu.be/aVmUnVxxGRk",
      title: "Entrevista : De jefe a líder.",
      type: "youtube",
    },
  ];

  return (
    <section className="site-section bg-primary" id="videos-section">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-6 text-center mb-5">
            <h2 className="text-white mb-2">Algunas entrevistas y presentaciones</h2>
            <p className="text-white">
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
                ) : video.type === "instagram" ? (
                  <div style={{ height: "auto", overflow: "hidden" }}>
                    <Instagram urls={[video.url]} />
                  </div>
                ) : null}
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
