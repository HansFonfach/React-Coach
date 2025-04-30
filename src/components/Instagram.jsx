// InstagramEmbed.js
import { useEffect, useRef } from "react";

const Instagram = ({ urls }) => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "//www.instagram.com/embed.js");
    script.setAttribute("async", true);
    document.body.appendChild(script);

    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [urls]);

  return (
    <div ref={containerRef}>
      {urls.map((url, index) => (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/C-p9ESIOXak/"
          data-instgrm-version="14"
          style={{
            maxHeight: "500px", // o la altura que desees
            overflow: "hidden",
            borderRadius: "8px",
            border: 0,
            boxShadow: "0 0 1px rgba(0,0,0,0.2)",
            margin: "auto",
          }}
        >
          <a
            href="https://www.instagram.com/reel/C-p9ESIOXak/"
            target="_blank"
            rel="noreferrer"
            style={{ display: "none" }} // oculta el link "Ver más en Instagram"
          >
            Ver esta publicación
          </a>
        </blockquote>
      ))}
    </div>
  );
};

export default Instagram;
