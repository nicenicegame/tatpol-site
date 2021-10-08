import React from 'react'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Works from '../components/Works'
import '../sass/main.scss'

const App = () => {
  return (
    <div className="app">
      <Head />
      <Navbar />
      <Hero />
      <Experience />
      <Works />
    </div>
  )
}

export default App
