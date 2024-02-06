import React from 'react'
import { motion } from 'framer-motion'
import {
  reversedLetters,
  letters,
  letterAnimation
} from '../animations/heroAnimation'

interface AnimatedTextProps {
  text: string
  coloredWord?: boolean
  reversed?: boolean
}

const AnimatedText = ({ text, coloredWord, reversed }: AnimatedTextProps) => {
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

export default AnimatedText
