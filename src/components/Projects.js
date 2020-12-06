import React from "react";
import BGProjects from "../../public/images/bg-projects.svg";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <img src={BGProjects} alt="bg projects" />
      <div className="projects-wrapper">
        <div className="head">
          <h1>My Projects</h1>
          <a
            href="https://github.com/nicenicegame?tab=repositories"
            target="_blank"
          >
            See more ...
          </a>
        </div>
        <div className="projects-grid">
          <div className="projects-card">
            <a
              href="https://github.com/barcamp-bangkhen/barcamp2020-fronted"
              target="_blank"
            >
              <i class="fas fa-external-link-alt"></i>
            </a>
            <h4>Barcamp Bangkhen 2020</h4>
            <span>Front-end</span>
            <p>
              BarCamp is an unconference event that assembles people who want to
              share knowledge, thoughts, experiences, or stories to other
              participants.
            </p>
          </div>
          <div className="projects-card">
            <a href="https://github.com/jix-666/jix" target="_blank">
              <i class="fas fa-external-link-alt"></i>
            </a>
            <h4>JiX</h4>
            <span>Full-stack</span>
            <p>
              Web forum for finding friends and people who have
              mutually-interested events.
            </p>
          </div>
          <div className="projects-card">
            <a
              href="https://github.com/nicenicegame/easybank-landing-page"
              target="_blank"
            >
              <i class="fas fa-external-link-alt"></i>
            </a>
            <h4>EasyBank Landing Page</h4>
            <span>Frontend</span>
            <p>
              EasyBank Landing Page practice by Frontend Mentor. Fully
              responsive using React with parcel.
            </p>
          </div>
          <div className="projects-card">
            <a
              href="https://github.com/nicenicegame/fitness-tracker"
              target="_blank"
            >
              <i class="fas fa-external-link-alt"></i>
            </a>
            <h4>Fitness Tracker</h4>
            <span>Full-stack</span>
            <p>
              Fitness Tracker app built with Angular, Node.js, and Material UI.
              This is the project that I learn from MEAN Stack course from
              Udemy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
