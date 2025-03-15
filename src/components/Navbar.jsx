import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import "./Navbar.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "enabled");
  const [isOpen, setIsOpen] = useState(false); // Menu is closed by default

  useEffect(() => {
    const handleThemeChange = () => {
      setDarkMode(localStorage.getItem("darkMode") === "enabled");
    };

    window.addEventListener("storage", handleThemeChange);
    return () => window.removeEventListener("storage", handleThemeChange);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "dark-mode" : ""}`}>
      <div className="container-fluid">
        <div className="navbar-content">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`navbar-toggler ${isOpen ? "open" : ""}`}
            type="button"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav" style={{ transition: 'max-height 0.3s ease-in-out' }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link className="navbar-brand" to="/">
                  SameerKhuhro
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
              <li>
                <DarkModeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
