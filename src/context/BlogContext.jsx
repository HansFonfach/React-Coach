import { createContext, useContext, useState } from "react";
import {
  answerBlog,
  comentBlogRequest,
  createBlogRequest,
  getBlogsRequest,
  getPublicBlogRequest,
} from "../api/blogs";

const BlogContext = createContext();

export const useBlogs = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("useBlogs must be used within a BlogsProvider");
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [blogActual, setBlogActual] = useState(null);

  const getBlogs = async () => {
    try {
      const res = await getBlogsRequest();
      // ¡Reemplaza completamente los blogs existentes!
      setBlogs(res.data); // 🚨 Cambia esto de [...prev, ...res.data] a solo res.data
    } catch (error) {
      console.error(error);
    }
  };

  const createBlog = async (blog) => {
    const res = await createBlogRequest(blog);
    console.log(res);
  };

  const getBlogById = async (id) => {
    try {
      const res = await getPublicBlogRequest(id);
      setBlogActual(res.data);
      return res.data;
    } catch (error) {
      console.error("Error al obtener el blog:", error);
    }
  };

  const comentBlog = async (id, data) => {
    try {
      const res = await comentBlogRequest(id, data);
      return res.data;
    } catch (error) {
      console.error("Error al responder comentario:", error);
    }
  };

  const responderComentario = async (blogId, comentarioId, data) => {
    try {
      const res = await answerBlog(blogId, comentarioId, data);
    
      return res.data;
    } catch (error) {
      console.error("Error al responder el comentario:", error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        createBlog,
        getBlogs,
        getBlogById,
        comentBlog,
        responderComentario,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
