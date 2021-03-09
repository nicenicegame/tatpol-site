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

export const heroTextContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      when: 'beforeChildren',
      duration: 0.75,
    },
  },
}

export const heroTextAnimation = {
  hidden: { y: '100%' },
  show: { y: 0, transition: { ease: 'easeOut', duration: 0.4 } },
}

export const heroImgAnimation = {
  hidden: { x: '50%', opacity: 0 },
  show: { x: 0, opacity: 1 },
}

export const heroImgContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.4 } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75 } },
}
