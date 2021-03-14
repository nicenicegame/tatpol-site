import React from 'react'
import DevActivity from '../../static/undraw_developer_activity_bv83.svg'
import { aboutContainer, aboutTextAnimation, slideRight } from '../animation'
import { useScroll } from '../hooks/useScroll'
import { motion } from 'framer-motion'

const About = () => {
  const [element, controls] = useScroll()

  return (
    <motion.section
      className="about"
      id="about"
      ref={element}
      animate={controls}
      variants={aboutContainer}
    >
      <motion.div className="about-images" variants={slideRight}>
        <img src={DevActivity} alt="dev activity" />
      </motion.div>
      <motion.div variants={aboutContainer} className="about-text">
        <motion.h1 variants={aboutTextAnimation}>About Me</motion.h1>
        <motion.p variants={aboutTextAnimation}>
          Hi, My name is Tatpol Samakpong. Nickname is Nice. 2nd-year Software
          Engineer Student of Kasetsart University.
        </motion.p>
        <motion.p variants={aboutTextAnimation}>
          I'm interested in both <span>front-end </span>and
          <span> back-end </span> web development. My favourite programming
          languages are <span>Python, Java, and JavaScript.</span> The
          frameworks that I familiar with are
          <span> Django, React, Angular, and Node.js.</span>
        </motion.p>
        <motion.p variants={aboutTextAnimation}>
          In free time, I like to watch movies, listening to music, and I
          usually learn coding from Youtube video. I'm a fast learner and
          willing to do new things.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

export default About
