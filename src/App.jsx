import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DynamicBackground from "./components/DynamicBackground";
import CustomCursor from "./components/CustomCursor";
import BackToTop from "./components/BackToTop";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <CustomCursor />
      <DynamicBackground />
      <Navbar />
      <Hero />
      <main>
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Experience />
        </div>
        <div className="reveal">
          <Projects />
        </div>
        <div className="reveal">
          <Skills />
        </div>
        <div className="reveal">
          <Education />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
