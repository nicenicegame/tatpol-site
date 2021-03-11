import React from 'react'
import Tatpol from '../../public/images/IMG_2127.JPG'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-wrapper">
        <img className="tatpol" src={Tatpol} alt="Tatpol Samakpong" />
        <div className="contact-text">
          <a className="contact-row" href="https://github.com/nicenicegame">
            <p>GitHub</p>
            <i className="fab fa-github"></i>
          </a>
          <a
            className="contact-row"
            href="https://www.linkedin.com/in/tatpol-samakpong-1966291b7/"
          >
            <p>LinkedIn</p>
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="contact-row"
            href="https://www.facebook.com/tatpol.samakpong/"
          >
            <p>Facebook</p>
            <i className="fab fa-facebook"></i>
          </a>
          <a
            className="contact-row"
            href="https://www.instagram.com/nicenicegame/"
          >
            <p>Instagram</p>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
