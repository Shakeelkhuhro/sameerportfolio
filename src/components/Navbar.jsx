import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import "./Navbar.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
      setDarkMode(localStorage.getItem("darkMode") === "enabled");
    };
    
    window.addEventListener("storage", handleThemeChange);
    return () => window.removeEventListener("storage", handleThemeChange);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "dark-mode" : ""}`} style={{ padding: '0.5rem 1rem' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MyPortfolio</Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ height: 'auto' }}>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
