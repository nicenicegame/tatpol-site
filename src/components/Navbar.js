import React from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { text: 'Experience' },
  { text: 'Projects' },
  { text: 'Contact' }
]

const navAnimation = {
  show: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  },
  hidden: {
    y: '-100%'
  }
}

const Navbar = () => {
  return (
    <motion.nav
      className="container nav"
      variants={navAnimation}
      initial="hidden"
      animate="show">
      <a href="#" className="nav-logo">
        tatpol s.
      </a>
      <ul className="nav-items">
        {navItems.map((item, itemIndex) => (
          <li key={itemIndex}>
            <a href="#">{item.text}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Navbar
