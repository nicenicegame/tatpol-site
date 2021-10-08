import React, { useRef, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import ParallaxElement from './ParallaxElement'

const Experience = ({ sectionOffsetTop, setSectionOffsetTop }) => {
  const expRef = useRef(null)

  useEffect(() => {
    if (expRef.current) {
      setSectionOffsetTop({
        ...sectionOffsetTop,
        experience: expRef.current.offsetTop
      })
    }
  }, [expRef.current])

  return (
    <div className="container experience" ref={expRef}>
      <ParallaxElement
        inputRange={[0, sectionOffsetTop.experience]}
        outputRange={[0, -100]}
        isSpring
        stiffness={800}
        damping={100}>
        <h1 className="text-shadow text-right">Experience</h1>
      </ParallaxElement>
      <ParallaxElement
        className="line"
        style={{ x: -40 }}
        inputRange={[0, sectionOffsetTop.experience + 200]}
        outputRange={[0, 280]}
        isSpring
        stiffness={1000}
        damping={100}
      />
      <ParallaxElement
        inputRange={[0, sectionOffsetTop.experience]}
        outputRange={[0, -40]}
        isSpring
        stiffness={400}
        damping={100}>
        <div className="work-list">
          <div className="work-img">
            <StaticImage
              src="../images/sellsuki-intern.png"
              alt="sellsuki pic"
              placeholder="blurred"
              width={150}
              height={150}
              layout="fixed"
            />
          </div>
          <div className="work-text">
            <h4 className="role">Frontend Developer</h4>
            <p>Sellsuki &middot; Internship</p>
            <p className="date">May 2021 - Jul 2021</p>
            <p className="hashtag">
              <span className="pill vue">#Vue</span>
              <span className="dot-spacer">&middot;</span>
              <span className="pill vuex">#Vuex</span>
              <span className="dot-spacer">&middot;</span>
              <span className="pill vuetify">#Vuetify</span>
            </p>
          </div>
        </div>
      </ParallaxElement>
    </div>
  )
}

export default Experience
