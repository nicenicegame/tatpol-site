const ease = [0.6, 0.01, -0.05, 0.9]

export const navAnimation = {
  hidden: { opacity: 0, y: '-100%' },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
      staggerChildren: 0.25,
      when: 'beforeChildren',
    },
  },
}

export const navItemAnimation = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease } },
}

export const toggleNavAnimation = {
  close: {
    x: '100%',
    opacity: 0,
    transition: { ease, duration: 0.4 },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      ease,
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
  show: { y: 0, transition: { ease, duration: 0.5 } },
}

export const slideLeft = {
  hidden: { x: '50%', opacity: 0, transition: { ease } },
  show: { x: 0, opacity: 1, transition: { ease, duration: 0.6 } },
}

export const slideRight = {
  hidden: { x: '-50%', opacity: 0, transition: { ease } },
  show: { x: 0, opacity: 1, transition: { ease, duration: 0.6 } },
}

export const heroImgContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.4, ease } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75, ease } },
}

export const aboutContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease },
  },
}

export const aboutTextAnimation = {
  hidden: { x: 20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.4, ease } },
}
