import React from 'react'
import ParallaxElement from './ParallaxElement'

const Works = () => {
  return (
    <div className="container works">
      <ParallaxElement inputRange={[700, 1000]} outputRange={[0, -100]}>
        <h1 className="text-shadow works-text">Works</h1>
      </ParallaxElement>
    </div>
  )
}

export default Works
