import React from "react";
import "../styles/Education.css";
import { profileData } from "../data/profile";

const Education = () => {
  return (
    <section id="education" className="education section-padding">
      <div className="container">
        <h2 className="section-title fade-in">Educación</h2>

        <div className="education-grid">
          {profileData.education.map((edu, index) => (
            <div
              className="education-card fade-in"
              key={edu.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <span className="edu-period">{edu.period}</span>
              {edu.description && (
                <p className="edu-description">{edu.description}</p>
              )}
              {edu.skills && (
                <div className="edu-skills">
                  {edu.skills.map((skill, i) => (
                    <span key={i} className="edu-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
