import React, { useState, useEffect } from 'react'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Works from '../components/Works'
import '../sass/main.scss'

const App = () => {
  const [sectionOffsetTop, setSectionOffsetTop] = useState({
    experience: 0,
    works: 0
  })
  const [windowScrollY, setWindowScrollY] = useState(0)

  const updateScrollY = () => {
    setWindowScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScrollY, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollY)
  }, [])

  return (
    <div className="app">
      <Head />
      <Navbar />
      <Hero windowScrollY={windowScrollY} />
      <Experience
        setSectionOffsetTop={setSectionOffsetTop}
        sectionOffsetTop={sectionOffsetTop}
      />
      <Works
        setSectionOffsetTop={setSectionOffsetTop}
        sectionOffsetTop={sectionOffsetTop}
      />
    </div>
  )
}

export default App
