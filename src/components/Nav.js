import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { navAnimation, navItemAnimation } from '../animation'

const Nav = () => {
  const [toggle, setToggle] = useState(false)

  const openSideNav = (e) => {
    setToggle(!toggle)
    e.target.classList.toggle('active')
  }

  return (
    <motion.header variants={navAnimation} initial="hidden" animate="show">
      <a href="#" className="logo">
        Tatpol S.
      </a>
      <nav>
        <ul className={toggle ? 'open-nav' : ''}>
          <motion.li variants={navItemAnimation}>
            <a href="#about">About</a>
          </motion.li>
          <motion.li variants={navItemAnimation}>
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li variants={navItemAnimation}>
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </nav>
      <motion.div className="hamburger" onClick={openSideNav}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </motion.div>
    </motion.header>
  )
}

export default Nav
