import React from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../api/blogs";
import Swal from "sweetalert2";

function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
   
    // Mostrar alerta de "enviando..."
    let loadingAlert = Swal.fire({
      title: "Enviando...",
      text: "Por favor espera mientras enviamos tu mensaje.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await sendEmail(data); // llamada asíncrona a tu API
      console.log("Respuesta completa:", res);
      // Cierra la alerta de loading
      Swal.close();

      // Muestra alerta de éxito
      Swal.fire({
        title: "¡Enviado!",
        text: "Tu mensaje ha sido enviado correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });

      reset(); // limpiar el formulario
    } catch (error) {
      console.error("Error al enviar el correo:", error);

      // Cierra la alerta de loading
      Swal.close();

      // Muestra alerta de error
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el mensaje. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  };

  return (
    <div className="site-section bg-light" id="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="text-black">Contacto</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
            <p className="mb-0 font-weight-bold text-primary">Redes Sociales</p>
            <p className="mb-4">
              <a
                href="https://www.instagram.com/jaimer.coachejecutivo/"
                className="pl-3 pr-3"
              >
                <span className="icon-instagram"></span>
              </a>
              <a href="https://wa.me/+56994455778" className="pl-3 pr-3">
                <span className="icon-whatsapp"></span>
              </a>
            </p>
          </div>
          <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
            <p className="mb-0 font-weight-bold text-primary">Celular</p>
            <p className="mb-4">
              <a href="#">+56 9 9445 5778</a>
            </p>
          </div>
          <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
            <p className="mb-0 font-weight-bold text-primary">Correo</p>
            <p className="mb-0">
              <a href="#">jaimerojasb@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mb-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group row">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input
                 
                    {...register("nombre")}
                    className="form-control"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    {...register("apellido")}
                    className="form-control"
                    placeholder="Apellido"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <input
                    {...register("email")}
                    className="form-control"
                    placeholder="email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <textarea
                    {...register("mensaje")}
                    className="form-control"
                    placeholder="Escribe tu mensaje."
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 mr-auto">
                  <button
                    type="submit"
                    className="btn btn-block btn-primary text-white py-2 px-5"
                  >
                    Enviar formulario
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
