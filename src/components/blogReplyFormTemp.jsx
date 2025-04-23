import React from 'react';
import { useForm } from 'react-hook-form';

const BlogReplyFormTemp = ({ onSubmit, comentarioId, onCancel }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleLocalSubmit = (data) => {
    onSubmit(data, comentarioId);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleLocalSubmit)} className="mt-3">
      <div className="form-group">
        <textarea
          {...register("mensaje", { required: true })}
          className="form-control"
          rows="3"
          placeholder="Escribe tu respuesta como administrador..."
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-sm mr-2">
          Enviar
        </button>
        <button 
          type="button" 
          onClick={onCancel}
          className="btn btn-outline-secondary btn-sm"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default BlogReplyFormTemp;