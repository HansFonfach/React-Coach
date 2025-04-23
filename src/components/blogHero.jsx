import React from "react";

const BlogHero = ({ titulo, fecha }) => {
  const formatChileanDate = (dateString) =>
    new Date(dateString).toLocaleDateString("es-CL");

  return (
    <div className="site-blocks-cover" data-aos="fade">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12 mt-lg-5 text-center">
            <h1>{titulo}</h1>
            <p className="post-meta">
              {formatChileanDate(fecha)} &bull; Publicado por{" "}
              <a href="#">Jaime Rojas</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogHero;
