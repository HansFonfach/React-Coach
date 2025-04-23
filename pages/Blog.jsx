import React, { useEffect, useState } from "react";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import avatarImage from "../public/images/person_1.jpg";
import { useForm } from "react-hook-form";
import { useBlogs } from "../src/context/BlogContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";

const BlogForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const { createBlog } = useBlogs();

  const [isClient, setIsClient] = useState(false);
  const cuerpo = watch("cuerpo");

  useEffect(() => {
    register("cuerpo", { required: true });
    setIsClient(true);
  }, [register]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const formData = new FormData();
      formData.append("titulo", data.titulo);
      formData.append("cuerpo", data.cuerpo);
      formData.append("imagen", data.imagen[0]);

      await createBlog(formData); // Enviamos el FormData

      Swal.fire({
        title: "¡Blog creado!",
        text: "Tu blog se ha publicado correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  });
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div className="">
      {/* Header con degradado */}
      <div className="admin-header text-center">
        <h1 className="admin-title">Nuevo Blog</h1>
        <p className="admin-subtitle">Comparte tus ideas con la comunidad</p>
      </div>

      {/* Tarjeta de perfil y formulario */}
      <div className="admin-profile-card">
        <div className="profile-section text-center">
          <img src={avatarImage} alt="Autor" className="profile-image" />
          <h4 className="profile-name">Jaime Rojas</h4>
          <p className="profile-role">Autor del Blog</p>
        </div>

        <div className="p-4 p-md-5">
          <h2 className="text-center text-primary mb-4">Crear publicación</h2>

          <form onSubmit={onSubmit}>
            <div className="row mb-4">
              <div className="col-md-12">
                <label className="form-label">Título</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Título del blog"
                  {...register("titulo", { required: true })}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label">Adjuntar imagen</label>
                <input
                  type="file"
                  className="form-control"
                  placeholder="Subir imagen"
                  {...register("imagen", { required: true })}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Contenido del blog</label>
              {isClient && (
                <ReactQuill
                  theme="snow"
                  value={cuerpo || ""}
                  onChange={(value) => setValue("cuerpo", value)}
                  modules={modules}
                  formats={formats}
                  placeholder="Escribe el contenido aquí..."
                  style={{ height: "300px", marginBottom: "50px" }}
                />
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-5 py-3 "
                style={{
                  borderRadius: "30px",
                  fontWeight: "600",
                  boxShadow: "0 4px 15px rgba(13, 110, 253, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.transform = "translateY(-2px)")
                }
                onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
              >
                Publicar Blog
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogForm;
