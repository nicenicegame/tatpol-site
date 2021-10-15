import React, { useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'
import ParallaxElement from './ParallaxElement'

const projectsContainer = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const projectItem = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

const projectImage = {
  animate: {
    scale: 1.05
  },
  initial: {
    scale: 1
  }
}

const projectDescription = {
  initial: { opacity: 0, y: '100%' },
  animate: { opacity: 1, y: 0, transition: { ease: 'easeInOut' } }
}

const backdrop = {
  animate: { opacity: 0.7 },
  initial: { opacity: 0, transition: { ease: 'easeInOut' } }
}

const mobileAnimation = {
  animate: {
    x: 0
  },
  initial: {
    x: -80
  }
}

const Projects = ({ setSectionOffsetTop, sectionOffsetTop }) => {
  const projectsRef = useRef(null)
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            link
            responsibility
            description
            imageUrl
            isBig
          }
        }
      }
    }
  `)
  const projects = useMemo(() => {
    const mapProjectsData = data.allMarkdownRemark.nodes.map(
      (node) => node.frontmatter
    )
    return mapProjectsData.sort((a, _) => (a.isBig ? -1 : 1))
  }, [data])

  useEffect(() => {
    if (projectsRef.current) {
      setSectionOffsetTop({
        ...sectionOffsetTop,
        projects: projectsRef.current.offsetTop
      })
    }
  }, [projectsRef.current])

  return (
    <div className="container projects">
      <ParallaxElement
        inputRange={[sectionOffsetTop.experience, sectionOffsetTop.projects]}
        outputRange={[0, -100]}
        isSpring
        stiffness={800}
        damping={100}>
        <h1 className="text-shadow">Projects</h1>
      </ParallaxElement>
      <motion.div
        className="projects-grid"
        variants={projectsContainer}
        animate="show"
        initial="hidden">
        <ProjectItem items={projects} />
      </motion.div>
    </div>
  )
}

const ProjectItem = ({ items }) => {
  return (
    <>
      {items.map((item, itemIndex) => (
        <motion.div
          className={`projects-item ${item.isBig ? 'big' : null}`}
          variants={projectItem}
          key={itemIndex}>
          <motion.div
            whileHover="animate"
            initial="initial"
            style={{ width: '100%', height: '100%' }}>
            <motion.img
              src={item.imageUrl}
              variants={item.isBig ? mobileAnimation : projectImage}
            />
            {!item.isBig && (
              <motion.div className="backdrop" variants={backdrop}></motion.div>
            )}
            <div className="projects-description">
              <div className="hide">
                <motion.h4 variants={projectDescription}>
                  {item.title}
                </motion.h4>
              </div>
              <div className="projects-text">
                <div className="hide">
                  <motion.p
                    className="responsibility"
                    variants={projectDescription}>
                    {item.responsibility.split(',').map((r, rIndex) => (
                      <>
                        <span className="pill vue" key={rIndex}>
                          {r}
                        </span>
                        {rIndex !==
                          item.responsibility.split(',').length - 1 && (
                          <span className="dot-spacer">&middot;</span>
                        )}
                      </>
                    ))}
                  </motion.p>
                </div>
                <div className="hide">
                  <motion.p variants={projectDescription}>
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </>
  )
}

export default Projects
