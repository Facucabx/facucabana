import { profileData } from "../data/profile";
import SkillIcon from "./SkillIcon";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container text-center">
        <h2 className="section-title fade-in">¡Hagamos equipo!</h2>

        <div className="contact-content fade-in">
          <p className="contact-text">
            Estoy listo para potenciar tus ideas. Más allá del B2B o B2C, yo
            apuesto al <strong>H2H (Human to Human)</strong>: diseñemos juntos
            soluciones digitales que conecten con personas reales y generen un
            impacto genuino.
          </p>

          <a
            href="https://wa.me/5493364626274"
            className="btn btn-primary btn-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablemos de tu próximo proyecto
          </a>

          <div className="social-links">
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Link a perfil de LinkedIn"
            >
              <SkillIcon name="linkedin" />
            </a>
            <a
              href={profileData.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Link a perfil de Behance"
            >
              <SkillIcon name="behance" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
