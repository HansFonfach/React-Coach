import React, { useState } from "react";
import ReactPlayer from "react-player";
import Instagram from "./Instagram";

function VideosGallery() {
  const videosPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

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
    {
      url: "https://youtu.be/U4RPjuEUH6o",
      title: "En mi colegio",
      type: "youtube",
    },
    // Puedes agregar más videos aquí
  ];

  const totalPages = Math.ceil(videoList.length / videosPerPage);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videoList.slice(indexOfFirstVideo, indexOfLastVideo);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="site-section bg-primary" id="videos-section">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-6 text-center mb-5">
            <h2 className="text-white mb-2">
              Algunas entrevistas y presentaciones
            </h2>
            <p className="text-white">
              Explora videos destacados sobre liderazgo, coaching y educación.
            </p>
          </div>
        </div>

        <div className="row">
          {currentVideos.map((video, index) => (
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

        {/* Paginación */}
        <div className="text-center mt-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="btn btn-light me-2"
          >
            Anterior
          </button>
          <span className="text-white">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="btn btn-light ms-2"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}

export default VideosGallery;
