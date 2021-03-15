import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BGProjects from '../../static/bg-projects.svg'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
        nodes {
          frontmatter {
            title
            link
            responsibility
            description
          }
          id
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.nodes

  return (
    <section className="projects" id="projects">
      <img src={BGProjects} alt="bg projects" />
      <div className="projects-wrapper">
        <div className="head">
          <h1>My Projects</h1>
          <a
            href="https://github.com/nicenicegame?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            See more ...
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <div className="projects-card" key={project.id}>
                <a
                  href={project.frontmatter.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <h4>{project.frontmatter.title}</h4>
                <span>{project.frontmatter.responsibility}</span>
                <p>{project.frontmatter.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
