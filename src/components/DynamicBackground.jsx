import React from "react";
import "./DynamicBackground.css";

const DynamicBackground = () => {
  return (
    <div className="dynamic-bg">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="glass-overlay"></div>
    </div>
  );
};

export default DynamicBackground;
