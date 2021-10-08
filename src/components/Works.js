import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ParallaxElement from './ParallaxElement'

const worksContainer = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
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

const Works = ({ setSectionOffsetTop, sectionOffsetTop }) => {
  const worksRef = useRef(null)

  useEffect(() => {
    if (worksRef.current) {
      setSectionOffsetTop({
        ...sectionOffsetTop,
        works: worksRef.current.offsetTop
      })
    }
  }, [worksRef.current])

  return (
    <div className="container works">
      <ParallaxElement
        inputRange={[sectionOffsetTop.experience, sectionOffsetTop.works]}
        outputRange={[0, -100]}
        isSpring
        stiffness={800}
        damping={100}>
        <h1 className="text-shadow">Works</h1>
      </ParallaxElement>
      <motion.div
        className="works-grid"
        variants={worksContainer}
        animate="show"
        initial="hidden">
        <WorksItem items={[1, 2, 3, 4, 5]} variants={item} />
      </motion.div>
    </div>
  )
}

const WorksItem = ({ items, variants }) => {
  return (
    <>
      {items.map((item) => (
        <motion.div
          className={`works-item ${item === 1 || item === 4 ? 'big' : null}`}
          whileHover={{ scale: 1.05 }}
          variants={variants}
          key={item}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          necessitatibus amet voluptas repellendus ratione enim qui cupiditate
          quos quis soluta.
        </motion.div>
      ))}
    </>
  )
}

export default Works
