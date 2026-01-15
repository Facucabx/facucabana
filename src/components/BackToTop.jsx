import React, { useState, useEffect } from "react";
import "../styles/BackToTop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 4l-8 8h6v8h4v-8h6z" />
      </svg>
    </div>
  );
};

export default BackToTop;
