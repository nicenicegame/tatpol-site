import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import ParallaxElement from './ParallaxElement'
import {
  heroAnimation,
  heroTextContainer,
  heroTextAnimation
} from '../animations/heroAnimation'
import ScrollDown from './ScrollDown'
import AnimatedText from './AnimatedText'

const Hero = () => {
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
        <ScrollDown />
      </motion.div>
    </>
  )
}

export default Hero
