import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

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
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

