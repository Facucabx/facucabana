import React, { useRef, useState } from "react";
import "../styles/Projects.css";
import { profileData } from "../data/profile";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <article
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform.includes("scale(1.05)")
          ? "none"
          : "all 0.5s ease",
      }}
    >
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-img-placeholder">
            <span>{project.title}</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">
          {project.title}
          {project.year && (
            <span className="project-year-badge">{project.year}</span>
          )}
        </h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span className="project-tag" key={i}>
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Proyecto &rarr;
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle fade-in">
          Algunos proyectos donde aporté valor con diseño, visión y estrategia.
        </p>
        <div className="projects-grid">
          {profileData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
