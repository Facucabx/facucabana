import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-container">
          <a href="#" className="logo">
            FCM
          </a>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              Sobre mí
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experiencia
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Proyectos
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Habilidades
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contacto
            </a>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
