import React from "react";
import "../styles/Experience.css";
import { profileData } from "../data/profile";

const Experience = () => {
  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <h2 className="section-title fade-in">Experiencia</h2>

        <div className="experience-list">
          {profileData.experience.map((exp, index) => (
            <div
              className="experience-card-item fade-in"
              key={exp.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <div className="experience-card-logo">
                  <a href={exp.url} target="_blank" rel="noopener noreferrer">
                    <img src={exp.logo} alt={exp.company} />
                  </a>
                </div>

                <div className="experience-summary-timeline in-card">
                  <div className="timeline-track">
                    <div className="timeline-point start">
                      <span className="point-year">2015</span>
                      <div className="point-dot"></div>
                    </div>
                    <div className="timeline-line">
                      <div className="line-progress"></div>
                    </div>
                    <div className="timeline-point end present">
                      <div className="point-dot pulse"></div>
                      <span className="point-year">2026 Actualidad</span>
                    </div>
                  </div>
                </div>

                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                </div>
                <p className="exp-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
