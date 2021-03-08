import React from 'react'
import BGHero from '../../public/images/bg-hero.svg'
import WebDevImage from '../../public/images/undraw_web_developer_p3e5.svg'
import { motion } from 'framer-motion'
import { heroTextAnimation, heroTextContainer, fadeIn } from '../animation'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-images">
        <img src={BGHero} alt="bg hero" className="bg-hero" />
        <img
          src={WebDevImage}
          alt="web developer image"
          className="hero-image"
        />
      </div>
      <motion.div
        variants={heroTextContainer}
        animate="show"
        initial="hidden"
        className="hero-text"
      >
        <div className="hide">
          <motion.h1 variants={heroTextAnimation}>Hi there</motion.h1>
        </div>
        <div className="hide">
          <motion.h2 variants={heroTextAnimation}>
            I'm Nice and I'm a <br /> Software Engineer Student
          </motion.h2>
        </div>
        <motion.a variants={fadeIn} className="btn" href="#contact">
          Contact Me
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Hero
