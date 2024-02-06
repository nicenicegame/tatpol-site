import React from 'react'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import SectionTopOffsetProvider from '../providers/SectionTopOffsetProvider'
import '../sass/main.scss'

const App = () => {
  return (
    <SectionTopOffsetProvider>
      <div className="app">
        <Head />
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </SectionTopOffsetProvider>
  )
}

export default App
