import React from 'react'
import '../scss/main.scss'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const App = () => {
  return (
    <>
      <Head />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
