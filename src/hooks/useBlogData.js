import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  comentBlogRequest,
  getPublicBlogRequest,
  answerBlog,
} from "../api/blogs";
import Swal from "sweetalert2";

export const useBlogData = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);

  // Fetch inicial del blog y comentarios
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getPublicBlogRequest(id);

        setBlog(res.data);
        const comentariosValidos = res.data.comentarios.filter(
          (c) => c.nombre && c.mensaje
        );
        setComentarios(comentariosValidos);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    const checkAdminStatus = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      setIsAdmin(user?.role === "admin");
    };

    fetchBlog();
    checkAdminStatus();
  }, [id]);

  // Handlers
  const handleCommentSubmit = async (data) => {
    // Mostrar alerta de "enviando..."
    let loadingAlert = Swal.fire({
      title: "Publicando...",
      text: "Por favor espera mientras se publica tu comentario",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const res = await comentBlogRequest(id, data);
      setComentarios([...comentarios, res.data]);
      Swal.fire("¡Comentario publicado!", "", "success");
    } catch (error) {
      Swal.fire("Error", "No se pudo enviar el comentario", "error");
    }
  };

  const handleReplySubmit = async (data, comentarioId) => {
    try {
      const res = await answerBlog(id, comentarioId, { mensaje: data.mensaje });
      const updatedComments = comentarios.map((c) =>
        c._id === comentarioId
          ? { ...c, respuestas: [...(c.respuestas || []), res.data] }
          : c
      );
      setComentarios(updatedComments);
      setReplyingTo(null);
      Swal.fire("¡Respuesta enviada!", "", "success");
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message || "Error al responder",
        "error"
      );
    }
  };

  return {
    blog,
    comentarios,
    isAdmin,
    replyingTo,
    setReplyingTo,
    handleCommentSubmit,
    handleReplySubmit,
  };
};
