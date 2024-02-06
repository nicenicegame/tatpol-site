import React from 'react'
import { motion } from 'framer-motion'
import { navItems } from '../animations/navAnimation'

interface NavItemsProps {
  text: string
}

const NavItems = ({ text }: NavItemsProps) => {
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

export default NavItems
