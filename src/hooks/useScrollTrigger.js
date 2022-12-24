import { useAnimation, useViewportScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

export const useScrollTrigger = (scroll) => {
  const [isScrollExit, setIsScrollExit] = useState(false)
  const controls = useAnimation()
  const { scrollY } = useViewportScroll()

  useEffect(() => {
    const unsubscribeOnScrollYChange = scrollY.onChange((value) => {
      if (value > scroll && !isScrollExit) {
        setIsScrollExit(true)
      }
    })
    return () => {
      unsubscribeOnScrollYChange()
    }
  }, [])

  useEffect(() => {
    if (isScrollExit) {
      controls.start('exit')
    } else {
      controls.start('show')
    }
  }, [isScrollExit])

  return controls
}
