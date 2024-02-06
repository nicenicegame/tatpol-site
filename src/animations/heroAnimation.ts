export const heroAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      when: 'beforeChildren',
      delay: 0.4
    }
  }
}
export const letters = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
export const reversedLetters = {
  show: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}
export const letterAnimation = {
  hidden: { y: '100%' },
  show: { y: 0, transition: { duration: 0.4, ease: 'easeInOut' } }
}
export const scrollDown = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
      delay: 1,
      when: 'beforeChildren'
    }
  },
  exit: {
    scale: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
      when: 'afterChildren'
    }
  }
}
export const scrollDownText = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.6
    }
  }
}
export const heroTextContainer = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}
export const heroTextAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } }
}
