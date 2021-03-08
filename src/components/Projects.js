import React from 'react'
import BGProjects from '../../public/images/bg-projects.svg'

const Projects = () => {
  const projects = [
    {
      link: 'https://github.com/barcamp-bangkhen/barcamp2020-fronted',
      name: 'Barcamp Bangkhen 2020',
      responsibility: 'Front-end',
      description:
        'BarCamp is an unconference event that assembles people who want to share knowledge, thoughts, experiences, or stories to other participants.',
    },
    {
      link: 'https://github.com/jix-666/jix',
      name: 'JiX',
      responsibility: 'Full-stack, DevOps',
      description:
        'Web forum for finding friends and people who have mutually-interested events.',
    },
    {
      link: 'https://github.com/nicenicegame/easybank-landing-page',
      name: 'EasyBank Landing Page',
      responsibility: 'Front-end',
      description:
        'EasyBank Landing Page practice by Frontend Mentor. Fully responsive using React with parcel.',
    },
    {
      link: 'https://github.com/nicenicegame/fitness-tracker',
      name: 'Fitness Tracker',
      responsibility: 'Full-stack',
      description:
        'Fitness Tracker app built with Angular, Node.js, and Material UI. This is the project that I learn from MEAN Stack course from Udemy.',
    },
    {
      link: 'https://github.com/nicenicegame/pa4-nicenicegame',
      name: 'FlashGet',
      responsibility: 'Java Developer',
      description:
        'FlasGet is a Computer Programming 2 Course Project that can download the files from the url and can choose a path to save a file. This really improve my JavaFX skills.',
    },
  ]

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
          {projects.map((project, index) => {
            return (
              <div className="projects-card" key={index}>
                <a href={project.link} target="_blank">
                  <i class="fas fa-external-link-alt"></i>
                </a>
                <h4>{project.name}</h4>
                <span>{project.responsibility}</span>
                <p>{project.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
