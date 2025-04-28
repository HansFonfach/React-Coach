import React from "react";
import { useForm } from "react-hook-form";

import BlogSidebar from "../src/components/blogSidebar";
import BlogCommentForm from "../src/components/blogCommentForm";
import BlogComment from "../src/components/blogComment";
import { useBlogData } from "../src/hooks/useBlogData";
import BlogHero from "../src/components/blogHero";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";

const Blog = () => {
  const {
    blog,
    comentarios,
    isAdmin,
    replyingTo,
    setReplyingTo,
    handleCommentSubmit,
    handleReplySubmit,
  } = useBlogData();

  const { register, handleSubmit } = useForm();

  if (!blog) return <p>Cargando...</p>;

  return (
    <div>
      <NavBar />
      <BlogHero titulo={blog.titulo} fecha={blog.fecha} />

      <section className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 blog-content">
              <div className="row mb-5">
                <div className="col-lg-12">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12">
                        <img
                          src={blog.imagen}
                          alt={blog.titulo}
                          className="img-fluid w-100"
                          style={{
                            maxHeight: "70vh" /* Limita la altura máxima */,
                            objectFit: "contain" /* Mantiene la proporción */,
                            margin: "30px auto",
                            display: "block",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div dangerouslySetInnerHTML={{ __html: blog.cuerpo }} />

              <div className="pt-5">
                <h3 className="mb-5">{comentarios.length} Comentarios</h3>
                <ul className="comment-list">
                  {comentarios.map((comentario) => (
                    <BlogComment
                      key={comentario._id}
                      comentario={comentario}
                      isAdmin={isAdmin}
                      isReplying={replyingTo === comentario._id}
                      onToggleReply={() =>
                        setReplyingTo(
                          replyingTo === comentario._id ? null : comentario._id
                        )
                      }
                      onSubmitReply={handleReplySubmit}
                    />
                  ))}
                </ul>

                <BlogCommentForm
                  onSubmit={handleSubmit(handleCommentSubmit)}
                  register={register}
                />
              </div>
            </div>

            <BlogSidebar />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
