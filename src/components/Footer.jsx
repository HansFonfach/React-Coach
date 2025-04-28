import React from 'react';

function Footer() {
  return (
    <footer className="site-footer bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="footer-heading mb-4">Sobre el coaching</h2>
            <p>El coaching es un proceso de acompañamiento que impulsa el desarrollo personal y profesional, potenciando habilidades, liderazgo y toma de decisiones.</p>
          </div>
          <div className="col-md-3 ml-auto">
            <h2 className="footer-heading mb-4">Quick Links</h2>
            <ul className="list-unstyled">
              <li><a href="#about-section" className="smoothscroll">About Us</a></li>
              <li><a href="#training-section" className="smoothscroll">Our Training</a></li>
              <li><a href="#services-section" className="smoothscroll">Services</a></li>
              <li><a href="#testimonials-section" className="smoothscroll">Testimonials</a></li>
              <li><a href="#contact-section" className="smoothscroll">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="mb-5">
              <h2 className="footer-heading mb-4">Sigueme</h2>
              <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-whatsapp"></span></a>
            </div>
         
          </div>
        </div>
        <div className="row pt-5 mt-5 text-left">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;