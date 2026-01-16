import React from "react";
import "../styles/About.css";
import { profileData } from "../data/profile";
import profilePic from "../assets/profile-pic.jpg";

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title fade-in">Sobre Mí</h2>

        <div className="about-content">
          <div className="about-image fade-in">
            <img
              src={profilePic}
              alt="Facundo Cabaña"
              width="400"
              height="400"
              loading="lazy"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
          </div>

          <div className="about-text fade-in delay-100">
            <p className="about-description">{profileData.about}</p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Años en Telecomunicaciones</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">UX/UI</span>
                <span className="stat-label">Diseñador Certificado</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Web</span>
                <span className="stat-label">Desarrollador Front-end</span>
              </div>
            </div>

            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4"
            >
              Mi LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
