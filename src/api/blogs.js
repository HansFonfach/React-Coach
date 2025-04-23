import axios from "./axios";

export const getBlogsRequest = () => axios.get("/blogs");

export const getBlogRequest = (id) => axios.get(`/blogs/${id}`);

export const createBlogRequest = (formData) =>
  axios.post("/addblog", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateBlogRequest = (blog) =>
  axios.put(`/blogs/${blog._id}`, blog);

export const deleteBlogRequest = (id) => axios.delete(`/blogs/${id}`);

export const answerBlog = (idblog, idcoment, data) => {
  // 👈 Añade el parámetro data
  return axios.post(
    `/blogs/${idblog}/comentarios/${idcoment}/respuestas`,
    { mensaje: data.mensaje } // 👈 Envía el mensaje en el cuerpo
  );
};
//rutas publicas
export const getPublicBlogsRequest = () => axios.get("/blogs/public");

export const getPublicBlogRequest = (id) => {
  return axios.get(`/blogs/blog/${id}`);
};

export const comentBlogRequest = (id, data) => {
  return axios.post(`/blogs/${id}/comentarios`, data);
};

export const sendEmail = (data) => axios.post("/email/send", data);
