import React from 'react'
import { useViewportScroll, motion, useTransform } from 'framer-motion'

const Hero = () => {
  const { scrollY } = useViewportScroll()
  const yDown = useTransform(scrollY, [0, 300], [40, 60])
  const yUp = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <div className="container hero">
      <motion.div className="hero-text" style={{ y: yUp }}>
        <h3>Hello,</h3>
        <h1>
          I&apos;m <span className="text-primary">Tatpol</span> Samakpong
        </h1>
        <p>Software Engineering Student</p>
        <button className="button">Contact Me</button>
      </motion.div>
      <div className="hero-img">
        <motion.img src="Tatpol.jpg" alt="tatpol pic" style={{ y: yUp }} />
        <motion.div className="circle" style={{ y: yDown, x: 90 }}></motion.div>
      </div>
    </div>
  )
}

export default Hero
