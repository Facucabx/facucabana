import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DynamicBackground from "./components/DynamicBackground";
import CustomCursor from "./components/CustomCursor";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import useScrollReveal from "./hooks/useScrollReveal";

// Lazy Load heavy sections
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));

const LoadingFallback = () => (
  <div
    style={{
      padding: "4rem",
      textAlign: "center",
      color: "var(--text-secondary)",
    }}
  >
    Cargando sección...
  </div>
);

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <CustomCursor />
      <DynamicBackground />
      <Navbar />
      <Hero />
      <main>
        <Suspense fallback={<LoadingFallback />}>
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
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
