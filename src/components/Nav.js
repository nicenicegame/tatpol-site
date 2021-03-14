import React, { useState } from "react"
import { motion } from "framer-motion"
import { navAnimation, navItemAnimation } from "../animation"

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
      <a href="/" className="logo">
        Tatpol S.
      </a>
      <nav>
        <div
          className={`backdrop ${isOpen ? "active" : ""}`}
          role="button"
          onClick={closeNav}
        ></div>
        <ul className={isOpen ? "open-nav" : ""}>
          <motion.li variants={navItemAnimation}>
            <a onClick={closeNav} href="#about" role="button">
              About
            </a>
          </motion.li>
          <motion.li variants={navItemAnimation}>
            <a onClick={closeNav} href="#projects" role="button">
              Projects
            </a>
          </motion.li>
          <motion.li variants={navItemAnimation}>
            <a onClick={closeNav} href="#contact" role="button">
              Contact
            </a>
          </motion.li>
        </ul>
      </nav>
      <motion.div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleNav}
        role="button"
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </motion.div>
    </motion.header>
  )
}

export default Nav
