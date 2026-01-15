import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import { profileData } from "../data/profile";

const Typewriter = ({ roles }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <h2 className="hero-headline">
      <span className="typewriter-text">{text}</span>
      <span className="cursor">|</span>
    </h2>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      itemScope
      itemType="http://schema.org/Person"
    >
      <div className="container">
        <div className="hero-content">
          <span className="hero-greeting">Digital Experience Designer</span>
          <h1 className="hero-name" itemProp="name">
            {profileData.name}
          </h1>

          {/* SEO Optimized Static Heading */}
          <h2 className="sr-only" itemProp="jobTitle">
            {profileData.headline}
          </h2>

          {/* Visual Typewriter Effect */}
          <div aria-hidden="true">
            <Typewriter roles={profileData.headline.split(" | ")} />
          </div>

          <p className="hero-description" itemProp="description">
            {profileData.heroDescription}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Proyectos Seleccionados
            </a>
            <a href="#contact" className="btn btn-outline">
              Hablemos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
