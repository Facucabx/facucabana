import React from "react";
import "../styles/Experience.css";
import useTimeElapsed from "../hooks/useTimeElapsed";
import { profileData } from "../data/profile";
import { useEffect, useState } from "react";
import NpsGauge from "./NpsGauge";

const LiveTimer = ({ startDate }) => {
  const time = useTimeElapsed(startDate);

  return (
    <div className="live-timer fade-in">
      <div className="timer-unit">
        <span className="timer-value">{time.years}</span>
        <span className="timer-label">Años</span>
      </div>
      <div className="timer-unit">
        <span className="timer-value">{time.months}</span>
        <span className="timer-label">Meses</span>
      </div>
      <div className="timer-unit">
        <span className="timer-value">{time.days}</span>
        <span className="timer-label">Días</span>
      </div>
      <div className="timer-separator">|</div>
      <div className="timer-unit">
        <span className="timer-value">
          {String(time.hours).padStart(2, "0")}
        </span>
        <span className="timer-label">Hs</span>
      </div>
      <div className="timer-unit">
        <span className="timer-value">
          {String(time.minutes).padStart(2, "0")}
        </span>
        <span className="timer-label">Min</span>
      </div>
      <div className="timer-unit">
        <span className="timer-value">
          {String(time.seconds).padStart(2, "0")}
        </span>
        <span className="timer-label">Seg</span>
      </div>
    </div>
  );
};

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
                <div className="exp-top-row">
                  <div className="exp-header-text">
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="experience-card-logo">
                    <a href={exp.url} target="_blank" rel="noopener noreferrer">
                      <img src={exp.logo} alt={exp.company} />
                    </a>
                  </div>
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
                      <span className="point-year">Actualidad</span>
                    </div>
                  </div>
                </div>

                {exp.startDate && <LiveTimer startDate={exp.startDate} />}

                <p className="exp-description">{exp.description}</p>

                {exp.metrics && (
                  <div className="experience-metrics">
                    {exp.metrics.map((metric, idx) => (
                      <div key={idx} className="metric-item">
                        {metric.type === "nps" ? (
                          <NpsGauge value={metric.value} />
                        ) : (
                          <span className="metric-value">{metric.value}</span>
                        )}
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
