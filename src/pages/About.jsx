import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm <strong>Sameer Khuhro</strong>, a passionate <strong>React Developer & UI/UX Designer</strong> with a strong background in <strong>MERN Stack, Firebase, React Native, and Cloud Technologies</strong>.
        </p>

        <p>
          Currently, I am pursuing a <strong>Bachelor’s in Software Engineering</strong> at <strong>Mehran University of Engineering & Technology</strong>. 
          Alongside my studies, I have gained industry experience as a <strong>React Developer at Hifah Technologies</strong> and a <strong>UI/UX Designer at ZainxMedia</strong>.
        </p>

        <h3>🚀 Why Work With Me?</h3>
        <ul>
          <li>✔ <strong>Expert in building scalable & responsive web applications</strong></li>
          <li>✔ <strong>Skilled in UI/UX for intuitive user experiences</strong></li>
          <li>✔ <strong>Experience with Firebase, PostgreSQL, and cloud technologies</strong></li>
          <li>✔ <strong>Strong problem-solving and project management skills</strong></li>
        </ul>

        <h3>📌 Skills & Technologies</h3>
        <div className="skills-list">
          <span>React.js</span>
          <span>Next.js</span>
          <span>MERN Stack</span>
          <span>Firebase</span>
          <span>UI/UX Design</span>
          <span>Figma</span>
          <span>Adobe XD</span>
          <span>React Native</span>
          <span>Azure Cloud</span>
          <span>MongoDB</span>
        </div>

        <h3>📩 Let's Connect</h3>
        <p>
          I'm open to <strong>freelance projects, collaborations, and full-time opportunities</strong>. 
          Feel free to reach out!
        </p>

        <div className="about-buttons">
          <a href="https://linkedin.com/in/sameerkhuhro" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Connect on LinkedIn
          </a>
          <a href="mailto:sameerkhuhro56@outlook.com" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
