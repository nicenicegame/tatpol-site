import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export const useScrollInView = (option) => {
  const controls = useAnimation()
  const [element, isInView] = useInView(option)

  useEffect(() => {
    controls.start('hidden')
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start('show')
    }
  }, [isInView])

  return [element, controls] as const
}
