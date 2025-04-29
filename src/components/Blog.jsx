import React, { useEffect, useState } from "react";
import { getPublicBlogsRequest } from "../api/blogs";
import { Link } from "react-router-dom";


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getPublicBlogsRequest();
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching public blogs:", error);
      }
    };  
    fetchBlogs();
  }, []);

  // Calcular blogs para la página actual
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <section className="site-section bg-light" id="blog-section">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-6 text-center mb-5">
              <h2 className="text-black mb-2">Mis Posts</h2>
              <p>
                Conoce los últimos post que he escrito para ti.
              </p>
            </div>
          </div>
          <div className="row">
            {currentBlogs.map((blog, index) => (
              <div 
                key={blog._id} 
                className="col-md-6 mb-4" 
                data-aos="fade-up" 
                data-aos-delay={index % 2 === 0 ? "" : "100"}
              >
                <div className="d-lg-flex blog-entry">
                  <figure className="mr-4">
                    <a href={`/blogs/blog/${blog._id}`}>
                      <img
                        src={blog.image || "images/coach_1_sm.jpg"}
                        alt={blog.titulo}
                        className="img-fluid rounded"
                      />
                    </a>
                  </figure>
                  <div className="blog-entry-text">
                    <h3>
                      <a href={`/blogs/blog/${blog._id}`}>
                        {blog.titulo}
                      </a>
                    </h3>
                    <span className="post-meta mb-3 d-block">
                      {new Date(blog.fecha).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    
                    <p>
                    <Link to={`/blogs/blog/${blog._id}`}>Leer más...</Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          {blogs.length > blogsPerPage && (
            <div className="row">
              <div className="col-12 text-center">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button 
                        className="page-link" 
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        &laquo; Anterior
                      </button>
                    </li>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                      <li 
                        key={number} 
                        className={`page-item ${currentPage === number ? 'active' : ''}`}
                      >
                        <button 
                          className="page-link" 
                          onClick={() => paginate(number)}
                        >
                          {number}
                        </button>
                      </li>
                    ))}
                    
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button 
                        className="page-link" 
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Siguiente &raquo;
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </section>
 
    </div>
  );
};

export default Blog;