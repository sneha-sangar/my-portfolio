import React, { useEffect, useState } from "react";
import "../styles/Project.css";

const projects = [
  {
    title: "Subscription-Based Learning",
    Technology: "Angular JS, Firebase, HTML, CSS, JavaScript",
    description: "An Angular-based platform with Firebase authentication and course management.",
    image: "https://globalgurus.org/wp-content/uploads/2024/04/image001-2.jpg",
    moreInfo: "This platform allows users to subscribe to various courses, track their progress, and interact with instructors."
  },
  {
    title: "Portfolio Website",
    Technology: "React JS, HTML, CSS, JavaScript",
    description: "A React-based personal portfolio with interactive animations.",
    image: "https://i.postimg.cc/wTZG6Gzq/project2.jpg",
    moreInfo: "This portfolio includes sections like About, Skills, Projects, and Contact, using React animations for a smooth UI."
  },
  {
    title: "Employee Management System",
    Technology: "React JS, Firebase, JavaScript",
    description: "Focused on optimizing employee management processes by integrating real-time data handling, improving efficiency, and providing an engaging interface for HR professionals.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7DF-HkwJOB2xWozMKT8WocTiHnEPLf5gFmg&s",
    moreInfo: "Designed a responsive UI to ensure accessibility across devices, enhancing efficiency and simplifying HR processes."
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which project is expanded

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight / 1.3 && rect.bottom > window.innerHeight / 1.3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="projects section" id="projects">
      <h2 className={`section-title ${isVisible ? "active-line" : ""}`} data-aos="fade-down">
        Projects
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${isVisible ? "visible" : ""}`} data-aos="fade-up">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p><strong>Technology:</strong> {project.Technology}</p>
              <p>{project.description}</p>

              {expandedIndex === index && (
                <p className="more-info">{project.moreInfo}</p>
              )}

              <button
                className="read-more-btn"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
