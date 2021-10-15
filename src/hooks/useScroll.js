import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const useScroll = (option) => {
  const controls = useAnimation()
  const [element, view] = useInView(option)

  controls.start('hidden')

  if (view) {
    controls.start('show')
  }

  return [element, controls]
}
