import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const navItems = [
  { text: 'Experience', link: '/#experience' },
  { text: 'Projects', link: '/#projects' },
  { text: 'Contact', link: '/#contact' }
]

const navAnimation = {
  show: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  },
  hidden: {
    y: '-100%'
  }
}

const sideNav = {
  hidden: {
    x: '100%',
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  },
  show: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
}

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <AnimatePresence>
      <motion.nav
        key="default-nav"
        className="container nav"
        variants={navAnimation}
        initial="hidden"
        animate="show">
        <a href="/" className="nav-logo" onClick={(e) => e.preventDefault()}>
          tatpol s.
        </a>
        <NavItems text="defaultNav" />
        <FontAwesomeIcon
          icon={faBars}
          className="hamburger"
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
      </motion.nav>
      <motion.div
        key="side-nav"
        className="side-nav"
        variants={sideNav}
        animate={!isNavOpen ? 'hidden' : 'show'}
        initial={false}>
        <NavItems isNavOpen={isNavOpen} text="sideNav" />
        <FontAwesomeIcon
          icon={faTimes}
          className="close-nav"
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
      </motion.div>
      {isNavOpen && (
        <motion.div
          key="side-nav-backdrop"
          className="side-nav-backdrop"
          animate={{ opacity: 0.7 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsNavOpen((prev) => !prev)}></motion.div>
      )}
    </AnimatePresence>
  )
}

const NavItems = ({ text }) => {
  return (
    <ul className="nav-items">
      {navItems.map((item, itemIndex) => (
        <motion.li key={`${text}-${itemIndex}`} whileTap={{ scale: 1.1 }}>
          <a href={item.link}>{item.text}</a>
        </motion.li>
      ))}
    </ul>
  )
}

export default Navbar
