import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  const handleResumeDownload = () => {
    // Adjust the path as per your actual file location in the public folder
    const link = document.createElement("a");
    link.href = "/Sneha_Sangar_Resume.pdf"; 
    link.download = "./asset/Resume.pdf";
    link.click();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-buttons">
        <button
          className="contact-btn"
          onClick={() => window.location.href = "mailto:snehasangar134@gmail.com"}
        >
          Contact Me
        </button>

        <button
          className="resume-btn"
          onClick={handleResumeDownload}
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Contact;
