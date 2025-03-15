import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Let's Work Together</h3>
        <p>🚀 Open for freelance projects & collaborations! Feel free to reach out.</p>

        <div className="footer-links">
          <a href="mailto:sameerkhuhro56@outlook.com" className="footer-link" style={{ textDecoration: 'none' }}>📩 Email</a>
          <a href="https://linkedin.com/in/sameerkhuhro" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ textDecoration: 'none' }}>🔗 LinkedIn</a>
          <a href="https://www.upwork.com/freelancers/~0140aae850a43a3d60" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ textDecoration: 'none' }}>💼 Hire Me on Upwork</a>
        </div>

        <p className="footer-credit">© 2024 Sameer Khuhro | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
