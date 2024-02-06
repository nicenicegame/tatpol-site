import React, { useRef, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import ParallaxElement from './ParallaxElement'
import { useSectionTopOffset } from '../providers/SectionTopOffsetProvider'

const Experience = () => {
  const [sectionOffsetTop, setSectionOffsetTop] = useSectionTopOffset()
  const expRef = useRef(null)

  useEffect(() => {
    if (expRef.current) {
      setSectionOffsetTop((prevSectionOffsetTop) => ({
        ...prevSectionOffsetTop,
        experience: expRef.current.offsetTop
      }))
    }
  }, [])

  return (
    <div className="container experience" ref={expRef} id="experience">
      <ParallaxElement
        inputRange={[0, sectionOffsetTop.experience]}
        outputRange={[0, -100]}
        isSpring
        stiffness={800}
        damping={100}>
        <h1 className="text-shadow text-right header-text">Experience</h1>
      </ParallaxElement>
      <ParallaxElement
        className="line"
        style={{ x: -40 }}
        inputRange={[0, sectionOffsetTop.experience + 200]}
        outputRange={[0, 400]}
      />
      <ParallaxElement
        inputRange={[0, sectionOffsetTop.experience]}
        outputRange={[0, -40]}
        isSpring
        stiffness={400}
        damping={100}>
        <div className="work-list">
          <StaticImage
            src="../images/sellsuki-intern.png"
            alt="sellsuki pic"
            placeholder="blurred"
            width={120}
            height={120}
            layout="fixed"
          />
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
        <div className="work-list">
          <StaticImage
            src="../images/lmwn.png"
            alt="lmwn pic"
            placeholder="blurred"
            width={120}
            height={120}
            transformOptions={{ fit: 'inside' }}
          />
          <div className="work-text">
            <h4 className="role">Software Engineer, Android</h4>
            <p>LINE MAN Wongnai &middot; Cooperative Internship</p>
            <p className="date">Jun 2022 - Nov 2022</p>
            <p className="hashtag">
              <span className="pill kotlin">#Kotlin</span>
              <span className="dot-spacer">&middot;</span>
              <span className="pill aac">#AAC</span>
            </p>
          </div>
        </div>
      </ParallaxElement>
    </div>
  )
}

export default Experience
