import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-content">
        <h2>Work Experience</h2>

        <div className="experience-item">
          <h3>React Developer - Hifah Technologies</h3>
          <span className="date">June 2024 – Jan 2025 (Remote)</span>
          <p>
            - Enhanced front-end UI to align with the company’s vision, improving performance and user engagement.  
            - Built <strong>scalable React.js applications</strong> with an intuitive and responsive user interface.  
          </p>
        </div>

        <div className="experience-item">
          <h3>UI/UX Designer - ZainxMedia</h3>
          <span className="date">Freelance</span>
          <p>
            - Designed and developed <strong>user-centric</strong> web interfaces using <strong>Figma & Adobe XD</strong>.  
            - Created sleek and interactive UI dashboards for web and mobile applications.  
          </p>
        </div>

        <div className="experience-item">
          <h3>Azure Cloud Fellow - Bytewise Limited</h3>
          <span className="date">June 2024 – Oct 2024</span>
          <p>
            - Gained hands-on experience with <strong>Azure Cloud computing</strong>, deployments, and security best practices.  
            - Worked on cloud-based applications with a focus on <strong>serverless functions and storage solutions</strong>.  
          </p>
        </div>

        <div className="experience-item">
          <h3>Co-Lead - Microsoft Learn Student Ambassador (MLSA)</h3>
          <span className="date">July 2024 – Present</span>
          <p>
            - Hosted <strong>Cloud Skills Challenges</strong>, <strong>AI projects</strong>, and <strong>tech events</strong>.  
            - Mentored peers in <strong>Microsoft technologies, cloud computing, and development best practices</strong>.  
          </p>
        </div>

        <h3>🎯 Looking for a <strong>Skilled Developer?</strong></h3>
        <p>
          I’m open to <strong>freelance projects, remote roles, and collaborations</strong>. Let’s build something great together!  
        </p>

        <div className="experience-buttons">
          <a href="https://linkedin.com/in/sameerkhuhro" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Connect on LinkedIn
          </a>
          <a href="mailto:sameerkhuhro56@outlook.com" className="btn btn-secondary">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
