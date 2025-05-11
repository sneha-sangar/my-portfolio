import React from "react";
import "../styles/Footer.css";
// import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer-container bd-grid">
        <div className="footer-data">
          <h2 className="footer-title">Sneha Sangar</h2>
          <p className="footer-text">I'm Sneha Sangar and this is my personal website</p>
        </div>
        <div className="footer-data">
          <h2 className="footer-title">Follow</h2>
           <a href="https://www.linkedin.com/in/sneha-sangar-2a0bb3176" target="blank"><FaLinkedin /></a>
                     {/* <a href="https://github.com/sneha-sangar" target="blank"><FaGithub /></a> */}
                     <a href="https://www.instagram.com/_sneha_sangar" target="blank"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

