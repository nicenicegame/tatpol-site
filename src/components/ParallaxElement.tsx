import React, { ComponentPropsWithoutRef } from 'react'
import { motion, useSpring, useTransform, useScroll } from 'framer-motion'

interface ParallaxElementProps
  extends ComponentPropsWithoutRef<typeof motion.div> {
  inputRange: number[]
  outputRange: number[]
  isSpring?: boolean
  damping?: number
  stiffness?: number
}

const ParallaxElement = ({
  children,
  inputRange,
  outputRange,
  isSpring,
  damping,
  stiffness,
  style,
  ...props
}: ParallaxElementProps) => {
  const { scrollY } = useScroll()
  const transformedY = useTransform(scrollY, inputRange, outputRange)
  const y = useSpring(transformedY, { damping, stiffness })

  return (
    <motion.div style={{ ...style, y }} {...props}>
      {children}
    </motion.div>
  )
}

export default ParallaxElement
