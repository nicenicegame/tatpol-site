import React, { useRef, useState, useEffect } from 'react'
import { useViewportScroll, useTransform, motion } from 'framer-motion'

const Experience = () => {
  const expRef = useRef(null)
  const [offsetTop, setOffsetTop] = useState(0)
  const { scrollY } = useViewportScroll()
  const yUp1 = useTransform(scrollY, [0, offsetTop], [-50, -200])
  const yUp2 = useTransform(scrollY, [0, offsetTop], [0, -100])
  const yDown = useTransform(scrollY, [200, offsetTop], [0, 200])

  useEffect(() => {
    if (expRef.current) {
      setOffsetTop(expRef.current.offsetTop)
    }
  }, [expRef.current])

  return (
    <div className="container experience" ref={expRef}>
      <motion.h3 className="text-shadow exp-text" style={{ y: yUp1 }}>
        Experience
      </motion.h3>
      <motion.div className="line" style={{ y: yDown }}></motion.div>
      <motion.div className="work-list" style={{ y: yUp2 }}>
        <div className="work-img">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLT4HnAHAsZLhVhntEdOOmbsXfpYSzzCmsrw0rZT=s900-c-k-c0x00ffffff-no-rj"
            alt="sellsuki pic"
          />
        </div>
        <div className="work-text">
          <h4 className="role">Frontend Developer</h4>
          <p>Sellsuki &middot; Internship</p>
          <p>May 2021 - Jul 2021 &middot; 3 mos</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Experience
