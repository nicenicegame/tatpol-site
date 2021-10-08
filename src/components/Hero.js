import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import ParallaxElement from './ParallaxElement'

const heroAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.9],
      delay: 0.25,
      delayChildren: 0.4
    }
  }
}

const letters = {
  show: {
    transition: {
      staggerChildren: 0.05
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

const Hero = () => {
  return (
    <motion.div
      className="container hero"
      variants={heroAnimation}
      initial="hidden"
      animate="show">
      <ParallaxElement inputRange={[0, 300]} outputRange={[0, -100]}>
        <motion.div className="hero-text">
          <h3>Hello,</h3>
          <h1 className="hide">
            I&apos;m <AnimatedText text="Tatpol" coloredWord />{' '}
            <AnimatedText text="Samakpong" reversed />
          </h1>
          <p>Software Engineering Student</p>
          <button className="button">Contact Me</button>
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
