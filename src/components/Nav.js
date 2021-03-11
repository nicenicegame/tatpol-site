import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navAnimation, navItemAnimation } from '../animation'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  const closeNav = () => {
    setIsOpen(false)
  }

  return (
    <motion.header variants={navAnimation} initial="hidden" animate="show">
      <a href="#" className="logo">
        Tatpol S.
      </a>
      <nav>
        <div
          className={`backdrop ${isOpen ? 'active' : ''}`}
          onClick={closeNav}
        ></div>
        <ul className={isOpen ? 'open-nav' : ''}>
          <motion.li variants={navItemAnimation}>
            <a onClick={closeNav} href="#about">
              About
            </a>
          </motion.li>
          <motion.li variants={navItemAnimation}>
            <a onClick={closeNav} href="#projects">
              Projects
            </a>
          </motion.li>
          <motion.li variants={navItemAnimation}>
            <a onClick={closeNav} href="#contact">
              Contact
            </a>
          </motion.li>
        </ul>
      </nav>
      <motion.div
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleNav}
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </motion.div>
    </motion.header>
  )
}

export default Nav
