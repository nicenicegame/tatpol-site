import React from 'react'
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from 'framer-motion'

const ParallaxElement = ({
  children,
  inputRange,
  outputRange,
  isSpring,
  damping,
  stiffness,
  style,
  ...props
}) => {
  const { scrollY } = useViewportScroll()
  let y = useTransform(scrollY, inputRange, outputRange)

  if (isSpring) {
    y = useSpring(y, { damping, stiffness })
  }

  return (
    <motion.div style={{ y, ...style }} {...props}>
      {children}
    </motion.div>
  )
}

export default ParallaxElement
