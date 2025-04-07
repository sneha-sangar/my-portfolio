import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav-logo">Sneha</a>
        </div>

        <div className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <ul className="nav-list">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <li key={item} className="nav-item">
                <Link to={item} smooth duration={500} className="nav-link">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Header;
