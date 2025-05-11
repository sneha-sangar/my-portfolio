import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Skills.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight / 1.5 && rect.bottom > window.innerHeight / 1.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className={`section-title ${isVisible ? "active-line" : ""}`} data-aos="fade-down">
        Skills
      </h2>
      <div className="skills-container">
        <div className="skills-box">
          <h3 className="skills-subtitle" data-aos="fade-right">Development</h3>
          <div className={`skills-list ${isVisible ? "visible" : ""}`}>
            {["HTML", "CSS", "JavaScript", "React.js", "AngularJs", "TypeScript", "Firebase", "Node.js",'React Native'].map(skill => (
              <span key={skill} className="skills-name" data-aos="zoom-in">{skill}</span>
            ))}
          </div>

          <h3 className="skills-subtitle" data-aos="fade-right">Other Technologies</h3>
          <div className={`skills-list ${isVisible ? "visible" : ""}`}>
            {["Git & GitHub", "Responsive Web Design", "Agile Methodology"].map(skill => (
              <span key={skill} className="skills-name" data-aos="zoom-in">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-img">
          {/* <img 
            src="https://i.postimg.cc/fL7Z1bFw/skill.jpg" 
            alt="Skills" 
            className={isVisible ? "visible" : ""}
            data-aos="fade-left"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
