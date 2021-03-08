import React from 'react'
import { AnimatePresence } from 'framer-motion'
import './scss/main.scss'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <AnimatePresence>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </AnimatePresence>
  )
}

export default App
