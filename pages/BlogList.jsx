import React, { useState, useEffect, useMemo } from "react";
import { useBlogs } from "../src/context/BlogContext";
import avatarImage from "../public/images/perfil.jpg";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogList = () => {
  const { getBlogs, blogs, deleteBlog, updateBlog } = useBlogs();
  const [editingBlog, setEditingBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    subtitulo: "",
    cuerpo: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const blogsPerPage = 5;

  // Configuración de módulos para ReactQuill
  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  }), []);

  useEffect(() => {
    getBlogs();
  }, []);

  // Calcular blogs para la página actual
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const toggleDropdown = (blogId) => {
    setActiveDropdown(activeDropdown === blogId ? null : blogId);
  };

  const handleEditClick = (blog) => {
    setEditingBlog(blog);
    setFormData({
      titulo: blog.titulo,
      subtitulo: blog.subtitulo,
      cuerpo: blog.cuerpo,
    });
    setShowModal(true);
    setActiveDropdown(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este blog?")) {
      await deleteBlog(id);
      getBlogs();
      if (currentBlogs.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
    setActiveDropdown(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditorChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      cuerpo: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBlog(editingBlog._id, formData);
      setShowModal(false);
      getBlogs();
    } catch (error) {
      console.error("Error al actualizar el blog:", error);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="admin-panel">
      {/* Hero Header */}
      <header className="admin-header">
        <div className="container text-center">
          <h1 className="admin-title">Gestión de Publicaciones</h1>
          <p className="admin-subtitle">Administra y edita todos tus contenidos publicados</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="admin-content">
        <div className="container">
          <div className="admin-card">
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Título</th>
                   
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBlogs.map((blog) => (
                    <tr key={blog._id}>
                      <td>
                        <div className="blog-title-cell">
                          <img 
                            src={avatarImage} 
                            alt="Autor" 
                            className="blog-author-image" 
                          />
                          <div>
                            <h6>{blog.titulo}</h6>
                            <p className="blog-author-name">Jaime Rojas</p>
                          </div>
                        </div>
                      </td>
                     
                      <td>
                        <div className="blog-date">
                          <span className="calendar-icon"></span>
                          <span>
                            {new Date(blog.fecha).toLocaleDateString("es-ES", {
                              day: "numeric", month: "short", year: "numeric"
                            })}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className="blog-status">Publicado</span>
                      </td>
                      <td>
                        <div className="blog-actions">
                          <button 
                            className="actions-button" 
                            onClick={() => toggleDropdown(blog._id)}
                          >
                            <span className="actions-icon"></span>
                          </button>
                          <div className={`dropdown-menu ${activeDropdown === blog._id ? "show" : ""}`}>
                            <button 
                              className="dropdown-item" 
                              onClick={() => handleEditClick(blog)}
                            >
                              Editar
                            </button>
                            <button 
                              className="dropdown-item text-danger" 
                              onClick={() => handleDelete(blog._id)}
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Paginación */}
            {blogs.length > blogsPerPage && (
              <div className="pagination-container">
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button 
                      className="page-link" 
                      onClick={() => paginate(currentPage - 1)}
                    >
                      &laquo;
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <li 
                      key={number} 
                      className={`page-item ${currentPage === number ? "active" : ""}`}
                    >
                      <button 
                        className="page-link" 
                        onClick={() => paginate(number)}
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button 
                      className="page-link" 
                      onClick={() => paginate(currentPage + 1)}
                    >
                      &raquo;
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modal de edición con ReactQuill */}
      {showModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal-header">
              <h3>Editar Blog</h3>
              <button 
                className="modal-close" 
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>
            <div className="admin-modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Título</label>
                  <input 
                    type="text" 
                    name="titulo" 
                    value={formData.titulo} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
             
                <div className="form-group quill-editor-container">
                  <label>Contenido</label>
                  <ReactQuill
                    theme="snow"
                    value={formData.cuerpo}
                    onChange={handleEditorChange}
                    modules={modules}
                    className="quill-editor"
                  />
                </div>
                <div className="modal-actions">
                  <button 
                    type="button" 
                    className="cancel-button" 
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="save-button">
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;