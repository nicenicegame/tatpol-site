import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import { faMouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAnimation } from 'framer-motion'
import ParallaxElement from './ParallaxElement'

const heroAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.9],
      when: 'beforeChildren',
      delay: 0.4
    }
  }
}

const letters = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const reversedLetters = {
  show: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const letterAnimation = {
  hidden: { y: '100%' },
  show: { y: 0, transition: { duration: 0.4, ease: 'easeInOut' } }
}

const scrollDown = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 0.6,
      delay: 1,
      when: 'beforeChildren'
    }
  },
  exit: {
    scale: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 0.6,
      when: 'afterChildren'
    }
  }
}

const scrollDownText = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 0.6
    }
  }
}

const heroTextContainer = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const heroTextAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } }
}

const Hero = ({ windowScrollY }) => {
  const [isScrollExit, setIsScrollExit] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    if (!isScrollExit) controls.start('show')
    if (windowScrollY > 50 && !isScrollExit) {
      controls.start('exit')
      setIsScrollExit(true)
    }
  }, [windowScrollY])

  return (
    <>
      <motion.div
        className="container hero"
        variants={heroAnimation}
        initial="hidden"
        animate="show">
        <ParallaxElement inputRange={[0, 300]} outputRange={[0, -100]}>
          <motion.div className="hero-text" variants={heroTextContainer}>
            <motion.h3 variants={heroTextAnimation}>Hello,</motion.h3>
            <motion.h1 className="hide" variants={heroTextAnimation}>
              I&apos;m <AnimatedText text="Tatpol" coloredWord />{' '}
              <AnimatedText text="Samakpong" reversed />
            </motion.h1>
            <motion.p variants={heroTextAnimation}>
              Software Engineering Student
            </motion.p>
            <motion.div className="button-group" variants={heroTextAnimation}>
              <button className="button btn-primary">Contact Me</button>
              {/* <a
              href="Tatpol_ Resume.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <button className="button btn-secondary">Resume</button>
            </a> */}
            </motion.div>
          </motion.div>
        </ParallaxElement>
        <div className="hero-img">
          <ParallaxElement
            className="circle"
            style={{ x: 90 }}
            inputRange={[0, 300]}
            outputRange={[40, 80]}
            isSpring
            damping={90}
            stiffness={1000}></ParallaxElement>
          <ParallaxElement inputRange={[0, 300]} outputRange={[0, -100]}>
            <StaticImage
              src="../images/Tatpol.jpg"
              alt="tatpol pic"
              placeholder="blurred"
              width={300}
              height={300}
              layout="fixed"
            />
          </ParallaxElement>
        </div>
      </motion.div>
      <motion.div className="hero-footer">
        <motion.div
          className="scroll-down"
          variants={scrollDown}
          initial="hidden"
          exit="exit"
          animate={controls}>
          <motion.div className="scroll-down-text" variants={scrollDownText}>
            <FontAwesomeIcon icon={faMouse} />
            <p>Scroll down</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

const AnimatedText = ({ text, coloredWord, reversed }) => {
  return (
    <motion.span
      variants={reversed ? reversedLetters : letters}
      className="animated-text">
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          className={coloredWord ? 'text-primary' : ''}
          variants={letterAnimation}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default Hero
