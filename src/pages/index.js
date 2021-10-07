import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import '../sass/main.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Experience />
    </div>
  )
}

export default App
