import React from "react";
import { useNavigate } from "react-router-dom";
import dpImage from "../imgs/dp.jpg";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Sameer Khuhro</h1>
        <p className="hero-description">
          A passionate <strong>React Developer & UI/UX Designer</strong> with expertise in 
          <strong> MERN Stack, React Native, Firebase, and Adobe XD</strong>. 
          I specialize in crafting high-quality, user-friendly web and mobile applications.
        </p>
        <img src={dpImage} alt="Sameer Khuhro" className="hero-image" />
        
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => navigate("/projects")}>
            View My Work
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/contact")}>
            Hire Me
          </button>
        </div>

        <div className="hero-freelancing">
          <p>
            🚀 Open for freelance projects! Let's build something amazing together.
          </p>
          <button className="btn btn-upwork" onClick={() => window.open("https://www.upwork.com/freelancers/~0140aae850a43a3d60", "_blank")}>
            Hire Me on Upwork
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
