import React from 'react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="footer">
      <button onClick={scrollToTop}>
        Go to top <i className="fas fa-arrow-alt-circle-up"></i>
      </button>
      <p>Tatpol Samakpong &copy; 2020</p>
    </section>
  )
}

export default Footer
