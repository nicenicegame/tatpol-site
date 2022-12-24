import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import { faMouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ParallaxElement from './ParallaxElement'
import { useScrollTrigger } from '../hooks/useScrollTrigger'

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

const Hero = () => {
  const controls = useScrollTrigger(50)

  return (
    <>
      <motion.div
        className="container hero"
        variants={heroAnimation}
        initial="hidden"
        animate="show">
        <motion.div className="hero-text" variants={heroTextContainer}>
          <ParallaxElement inputRange={[0, 300]} outputRange={[0, -100]}>
            <motion.h3 variants={heroTextAnimation}>Hello,</motion.h3>
            <motion.h1 className="hide" variants={heroTextAnimation}>
              I&apos;m <AnimatedText text="Tatpol" coloredWord />{' '}
              <AnimatedText text="Samakpong" reversed />
            </motion.h1>
            <motion.p variants={heroTextAnimation}>
              Software Engineering Student
            </motion.p>
            <motion.div className="button-group" variants={heroTextAnimation}>
              <motion.button
                className="button btn-primary"
                whileTap={{ scale: 1.1 }}>
                Contact Me
              </motion.button>
              <motion.a
                whileTap={{ scale: 1.1 }}
                href="Tatpol_Samakpong.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <button className="button btn-secondary">Resume</button>
              </motion.a>
            </motion.div>
          </ParallaxElement>
        </motion.div>
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
