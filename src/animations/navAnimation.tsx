export const navItems = [
  { text: 'Experience', link: '/#experience' },
  { text: 'Projects', link: '/#projects' },
  { text: 'Contact', link: '/#contact' }
]
export const navAnimation = {
  show: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  },
  hidden: {
    y: '-100%'
  }
}
export const sideNav = {
  hidden: {
    x: '100%',
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  },
  show: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
}
