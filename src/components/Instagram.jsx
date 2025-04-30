import { useEffect, useRef } from "react";

const Instagram = () => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "//www.instagram.com/embed.js");
    script.setAttribute("async", true);
    document.body.appendChild(script);

    // Si el script ya está cargado (por ejemplo, navegando entre rutas)
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  const embedHtml = `
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C-p9ESIOXak/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
      <a href="https://www.instagram.com/reel/C-p9ESIOXak/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" style="text-decoration: none;">
        Ver esta publicación en Instagram
      </a>
    </blockquote>
  `;

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: embedHtml }} />
  );
};

export default Instagram;