import React from 'react';

const BlogCommentForm = ({ onSubmit, register }) => (
  <div className="comment-form-wrap pt-5">
    <h3 className="mb-5">Deja tu comentario</h3>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          {...register("nombre", { required: true })}
          className="form-control"
          placeholder="Nombre *"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          {...register("correo", { required: true })}
          className="form-control"
          placeholder="Correo *"
        />
      </div>
      <div className="form-group">
        <textarea
          {...register("mensaje", { required: true })}
          className="form-control"
          rows="6"
          placeholder="Mensaje *"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Publicar comentario
      </button>
    </form>
  </div>
);

export default BlogCommentForm;