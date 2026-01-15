import { profileData } from "../data/profile";
import SkillIcon from "./SkillIcon";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <h2 className="section-title fade-in">Habilidades & Herramientas</h2>
        <p className="section-subtitle fade-in">
          Con los años, fui sumando herramientas y habilidades que potencian mi
          trabajo.
          <br />
          El modo aprendiz, para mí, es un modo de vida.
        </p>

        <div className="skills-grid">
          {profileData.skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skill-category fade-in"
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-items">
                {category.skills.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <div className="skill-icon">
                      <SkillIcon name={skill.icon} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
