import React from 'react'
import { motion } from 'framer-motion'
import { faMouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScrollTrigger } from '../hooks/useScrollTrigger'
import { scrollDown, scrollDownText } from '../animations/heroAnimation'

const ScrollDown = () => {
  const controls = useScrollTrigger(50)
  return (
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
  )
}

export default ScrollDown
