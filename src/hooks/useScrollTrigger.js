import { useAnimation, useViewportScroll } from 'framer-motion'
import { useEffect } from 'react'

export const useScrollTrigger = (scroll) => {
  const controls = useAnimation()
  const { scrollY } = useViewportScroll()

  useEffect(() => {
    controls.start('show')
    const unsubscribeOnScrollYChange = scrollY.onChange((value) => {
      if (value > scroll) {
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
