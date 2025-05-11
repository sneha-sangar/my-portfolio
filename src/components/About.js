import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import Photo from "../asset/Photo.jpeg";
import Photos from "../asset/Photos.jpeg";
import Resume from "../asset/Resume.pdf"; // Add your resume file here

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 120,
    });

    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className={`section-title ${isVisible ? "active-line" : ""}`} data-aos="fade-down">
        About
      </h2>
      <div className="about-container bd-grid">
        <div className="about-img" data-aos="zoom-in">
          <img src={Photos} alt="Sneha" />
        </div>
        <div>
          <h2 className="about-subtitle" data-aos="fade-left">I'm Sneha Sangar</h2>
          <span className="about-profession" data-aos="fade-left">Web Developer</span>
          <p className="about-text" data-aos="fade-up">
            As a web developer, I am passionate about creating visually appealing and highly functional websites. 
            With a strong foundation in React.js, AngularJS, TypeScript, and Firebase, I specialize in building 
            interactive and responsive web applications that deliver seamless user experiences.
          </p>

          {/* Download Resume Button */}
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn-download" data-aos="fade-up">
            View & Download Resume
          </a>

          <div className="about-social" data-aos="fade-up">
            <a href="https://www.linkedin.com/in/sneha-sangar-2a0bb3176" target="blank"><FaLinkedin /></a>
            <a href="https://github.com/sneha-sangar"><FaGithub /></a>
            <a href="https://www.instagram.com/_sneha_sangar"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
