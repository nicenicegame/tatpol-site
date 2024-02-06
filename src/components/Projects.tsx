import React, { useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'
import ParallaxElement from './ParallaxElement'
import { useMediaQuery } from 'react-responsive'
import { useScrollInView } from '../hooks/useScrollInView'
import { useSectionTopOffset } from '../providers/SectionTopOffsetProvider'
import {
  projectsContainer,
  projectItem,
  mobileAnimation,
  projectImage,
  backdrop,
  projectDescription
} from '../animations/projectsAnimation'

const Projects = () => {
  const [sectionOffsetTop, setSectionOffsetTop] = useSectionTopOffset()
  const isDisabledAnimation = useMediaQuery({ query: '(max-width: 900px)' })
  const [projectsGridRef, controls] = useScrollInView({
    threshold: 0.35,
    triggerOnce: true
  })
  const projectsRef = useRef<HTMLDivElement>(null)
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
    setSectionOffsetTop((prevSectionOffsetTop) => ({
      ...prevSectionOffsetTop,
      projects: projectsRef.current?.offsetTop ?? 0
    }))
  }, [])

  return (
    <div className="container projects" ref={projectsRef} id="projects">
      <ParallaxElement
        inputRange={[sectionOffsetTop.experience, sectionOffsetTop.projects]}
        outputRange={[0, -100]}
        isSpring
        stiffness={800}
        damping={100}>
        <h1 className="text-shadow header-text">Projects</h1>
      </ParallaxElement>
      <ParallaxElement
        inputRange={[sectionOffsetTop.experience, sectionOffsetTop.projects]}
        outputRange={[0, -40]}
        isSpring
        stiffness={400}
        damping={100}>
        <motion.div
          ref={projectsGridRef}
          className="projects-grid"
          variants={projectsContainer}
          animate={controls}
          initial="hidden">
          <ProjectItem
            items={projects}
            isDisabledAnimation={isDisabledAnimation}
          />
        </motion.div>
      </ParallaxElement>
    </div>
  )
}

const ProjectItem = ({ items, isDisabledAnimation }) => {
  const getClassBySkill = (skill) => {
    const color = {
      React: 'react',
      SCSS: 'scss',
      Vue: 'vue',
      Vuex: 'vuex',
      'Framer Motion': 'framer-motion',
      'Styled Components': 'styled-components'
    }
    return color[skill]
  }

  const openProjectLink = (link) => {
    window.open(link, '_blank')
  }

  return (
    <>
      {items.map((item, itemIndex) => (
        <motion.div
          onClick={() => openProjectLink(item.link)}
          className={`projects-item ${item.isBig && 'big'}`}
          variants={projectItem}
          key={`project-${itemIndex}`}>
          <motion.div
            whileHover="animate"
            initial={isDisabledAnimation ? 'animate' : 'initial'}
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
                      <span key={`r-${rIndex}`}>
                        <span className={`pill ${getClassBySkill(r.trim())}`}>
                          #{r.trim()}
                        </span>
                        {rIndex !==
                          item.responsibility.split(',').length - 1 && (
                          <span className="dot-spacer">&middot;</span>
                        )}
                      </span>
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
