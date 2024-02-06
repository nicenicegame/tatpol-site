import { useAnimation, useViewportScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const useScrollTrigger = (scroll) => {
  const isTriggered = useRef(false)
  const controls = useAnimation()
  const { scrollY } = useViewportScroll()

  useEffect(() => {
    controls.start('show')
    const unsubscribeOnScrollYChange = scrollY.onChange((value) => {
      if (isTriggered.current) return
      if (value > scroll) {
        isTriggered.current = true
        controls.start('exit')
      }
    })
    return () => {
      controls.stop()
      unsubscribeOnScrollYChange()
    }
  }, [])

  return controls
}
