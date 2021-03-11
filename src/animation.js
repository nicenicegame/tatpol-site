export const navAnimation = {
  hidden: { opacity: 0, y: '-100%' },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      when: 'beforeChildren',
    },
  },
}

export const navItemAnimation = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export const toggleNavAnimation = {
  close: {
    x: '100%',
    opacity: 0,
    transition: { ease: 'easeOut', duration: 0.4 },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
    },
  },
}

export const heroTextContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren',
      duration: 0.75,
    },
  },
}

export const hideTextAnimation = {
  hidden: { y: '100%' },
  show: { y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
}

export const slideLeft = {
  hidden: { x: '50%', opacity: 0, transition: { ease: 'easeOut' } },
  show: { x: 0, opacity: 1, transition: { ease: 'easeOut' } },
}

export const slideRight = {
  hidden: { x: '-50%', opacity: 0, transition: { ease: 'easeOut' } },
  show: { x: 0, opacity: 1, transition: { ease: 'easeOut' } },
}

export const heroImgContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.4 } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75 } },
}

export const aboutContainer = {
  hidden: { opacity: 1, transition: { staggerChildren: 0.2 } },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

export const aboutTextAnimation = {
  hidden: { x: 20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.4 } },
}
