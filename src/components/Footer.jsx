import React from "react";
import "../styles/Footer.css";
import { profileData } from "../data/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer fade-in">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>{profileData.name}</h2>
          </div>

          <div className="footer-links">
            <a href="#about" className="footer-link">
              Sobre mí
            </a>
            <a href="#projects" className="footer-link">
              Proyectos
            </a>
            <a href="#skills" className="footer-link">
              Habilidades
            </a>
            <a href="#contact" className="footer-link">
              Contacto
            </a>
          </div>

          <div className="footer-credits">
            <p>
              &copy; {currentYear} Diseñado y Desarrollado por{" "}
              <span>Facundo Cabaña Mosto</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
