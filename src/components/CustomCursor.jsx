import React, { useEffect, useState, useRef } from "react";
import "../styles/CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const mousePosition = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Move dot instantly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleLinkHoverEvents = () => {
      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);

      const interactiveElements = document.querySelectorAll(
        "a, button, .project-card, input, textarea"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Initial cleanup function placeholder
    let cleanupHoverListeners = handleLinkHoverEvents();

    // Re-bind hover listeners if DOM changes
    const observer = new MutationObserver(() => {
      cleanupHoverListeners();
      cleanupHoverListeners = handleLinkHoverEvents();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cleanupHoverListeners();
      observer.disconnect();
    };
  }, []);

  // Smooth Follower Logic
  useEffect(() => {
    let animationFrameId;
    let followerX = -100;
    let followerY = -100;

    const animateFollower = () => {
      // Smooth factor increased to 0.15 for snappier feel
      followerX += (mousePosition.current.x - followerX) * 0.15;
      followerY += (mousePosition.current.y - followerY) * 0.15;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateFollower);
    };

    animateFollower();

    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Run once on mount

  return (
    <>
      <div
        ref={cursorRef}
        className={`cursor-dot ${isHovering ? "hover" : ""} ${
          isClicked ? "clicked" : ""
        }`}
      />
      <div
        ref={followerRef}
        className={`cursor-follower ${isHovering ? "hover" : ""} ${
          isClicked ? "clicked" : ""
        }`}
      />
      <div className="noise-overlay"></div>
    </>
  );
};

export default CustomCursor;
