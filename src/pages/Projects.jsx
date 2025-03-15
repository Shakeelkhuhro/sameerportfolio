import React from "react";
import "./Projects.css";

// Importing thumbnails
import parkNDepartThumb from "../imgs/image1.png";
import covidLandingThumb from "../imgs/image2.png";
import realEstateThumb from "../imgs/image3.png";
import chatAppThumb from "../imgs/image4.png";
import eShopThumb from "../imgs/image5.png";
import bugBlogThumb from "../imgs/image6.png";
import expenseTrackerThumb from "../imgs/image7.png";
import pizzaJunctionThumb from "../imgs/image8.png";

const Projects = () => {
  const projectData = [
    {
      title: "Park N Depart",
      description:
        "A smart parking system allowing users to find and book parking spots in advance.",
      techStack: "React.js, Node.js, Express, MongoDB",
      link: "https://www.parkndepart.io/",
      thumbnail: parkNDepartThumb,
    },
    {
      title: "Covid-19 Landing Page",
      description:
        "An informative landing page providing COVID-19 statistics, symptoms, and safety tips.",
      techStack: "HTML, CSS, JavaScript",
      link: "https://shakeelkhuhro.github.io/Covid-19-Landing-Page/",
      thumbnail: covidLandingThumb,
    },
    {
      title: "Real Estate Platform",
      description:
        "A responsive real estate website featuring property listings, filtering, and contact forms.",
      techStack: "React.js, Firebase, Tailwind CSS",
      link: "https://github.com/Shakeelkhuhro/Real-Estate-Platform",
      thumbnail: realEstateThumb,
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat app with user authentication and one-on-one messaging.",
      techStack: "React.js, Firebase, Redux",
      link: "https://realtime-chat-application.netlify.com/",
      thumbnail: chatAppThumb,
    },
    {
      title: "E-Commerce Store (E-Shop)",
      description:
        "An e-commerce platform with a product catalog, cart system, and checkout functionality.",
      techStack: "React.js, Redux, Stripe API",
      link: "https://shakeelkhuhro.github.io/E-Shop/",
      thumbnail: eShopThumb,
    },
    {
      title: "Bug Tracking Blog",
      description:
        "A developer-focused blog that helps track and report software bugs efficiently.",
      techStack: "Next.js, Tailwind CSS, Firebase",
      link: "https://bugtrackblog.vercel.app/",
      thumbnail: bugBlogThumb,
    },
    {
      title: "Expense Tracker",
      description:
        "A simple and effective expense tracking application to monitor personal finances.",
      techStack: "React.js, Context API, Chart.js",
      link: "https://github.com/Shakeelkhuhro/expense-tracker",
      thumbnail: expenseTrackerThumb,
    },
    {
      title: "Pizza Junction",
      description:
        "A sleek and responsive online pizza ordering website with a modern UI and easy navigation.",
      techStack: "React.js, HTML5, CSS, JavaScript",
      link: "https://pizzajunction.pk/",
      thumbnail: pizzaJunctionThumb,
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-content">
        <h2>My Projects</h2>
        <p>
          Here are some of the key projects I've worked on, showcasing my expertise in web development and UI/UX design.
        </p>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tech-stack">{project.techStack}</span>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
