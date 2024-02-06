export const projectsContainer = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}
export const projectItem = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}
export const projectImage = {
  animate: {
    scale: 1.05
  },
  initial: {
    scale: 1
  }
}
export const projectDescription = {
  initial: { opacity: 0, y: '100%' },
  animate: { opacity: 1, y: 0, transition: { ease: 'easeInOut' } }
}
export const backdrop = {
  animate: { opacity: 0.7 },
  initial: { opacity: 0, transition: { ease: 'easeInOut' } }
}
export const mobileAnimation = {
  animate: {
    x: 0
  },
  initial: {
    x: -80
  }
}
