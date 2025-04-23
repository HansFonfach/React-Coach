import React from 'react';
import BlogReplyForm from './blogReplyForm';

const BlogComment = ({ comentario, isAdmin, isReplying, onToggleReply, onSubmitReply }) => {
  const formatDate = (dateString) => 
    new Date(dateString).toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <li className="comment mb-5">
      <div className="vcard bio">
        <img src="/images/person_1.jpg" alt="Avatar" />
      </div>
      <div className="comment-body">
        <h3>{comentario.nombre}</h3>
        <div className="meta">{formatDate(comentario.fecha)}</div>
        <p>{comentario.mensaje}</p>

        {comentario.respuestas?.map(respuesta => (
          <div key={respuesta._id} className="reply bg-light p-3 mt-3 rounded">
            <strong>Jaime Rojas (Autor): </strong> {respuesta.mensaje}
            <div className="meta text-muted small">{formatDate(respuesta.fecha)}</div>
          </div>
        ))}

        {isAdmin && (
          <button 
            onClick={onToggleReply}
            className="btn btn-sm btn-outline-primary mt-2"
          >
            {isReplying ? 'Cancelar' : 'Responder'}
          </button>
        )}

        {isReplying && (
          <BlogReplyForm 
            onSubmit={onSubmitReply} 
            comentarioId={comentario._id} 
            onCancel={() => onToggleReply(null)}
          />
        )}
      </div>
    </li>
  );
};

export default BlogComment;