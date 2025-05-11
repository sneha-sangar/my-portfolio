import React, { useEffect, useState } from "react";
import "../styles/Contact.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Resume from "../asset/Resume.pdf";

const Contact = () => {
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

  // const handleResumeDownload = () => {
  //   // Adjust the path as per your actual file location in the public folder
  //   const link = document.createElement("a");
  //   link.href = "/Sneha_Sangar_Resume.pdf"; 
  //   link.download = "./asset/Resume.pdf";
  //   link.click();
  // };

  return (
    <section className="contact-section" id="contact">
        <h2 className={`section-title ${isVisible ? "active-line" : ""}`} data-aos="fade-down">
        Contact
      </h2>
      <div className="contact-buttons">
  <button
    className="btn-download"
    onClick={() => window.location.href = "mailto:snehasangar134@gmail.com"}
  >
    Contact Me
  </button>

  <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn-download" >
    View & Download Resume
  </a>
</div>

    </section>
  );
};

export default Contact;
