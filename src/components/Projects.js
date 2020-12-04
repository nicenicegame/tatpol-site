import React from "react";
import BGProjects from "../../public/images/bg-projects.svg";

const Projects = () => {
  return (
    <section className="projects">
      <img src={BGProjects} alt="bg projects" />
      <div className="projects-wrapper">
        <h1>My Projects</h1>
        <div className="projects-grid">
          <div className="projects-card"></div>
          <div className="projects-card"></div>
          <div className="projects-card"></div>
          <div className="projects-card"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
