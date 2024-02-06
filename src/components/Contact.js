import React, { useRef, useEffect } from 'react'
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useSectionTopOffset } from '../providers/SectionTopOffsetProvider'

const contactList = [
  {
    text: 'GitHub',
    icon: faGithub,
    link: 'https://github.com/nicenicegame'
  },
  {
    text: 'LinkedIn',
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/tatpol-samakpong-1966291b7/'
  },
  {
    text: 'Facebook',
    icon: faFacebook,
    link: 'https://www.facebook.com/tatpol.samakpong/'
  },
  {
    text: 'Instagram',
    icon: faInstagram,
    link: 'https://www.instagram.com/nicenicegame/'
  },
  {
    text: 'Email',
    icon: faAt,
    link: 'mailto:samakpong.tatpol@gmail.com'
  }
]

const Contact = () => {
  const [, setSectionOffsetTop] = useSectionTopOffset()
  const contactRef = useRef(null)

  useEffect(() => {
    if (contactRef.current) {
      setSectionOffsetTop((prevSectionOffsetTop) => ({
        ...prevSectionOffsetTop,
        contact: contactRef.current.offsetTop
      }))
    }
  }, [])

  return (
    <div className="container contact" ref={contactRef} id="contact">
      <h1 className="text-shadow header-text">Contact</h1>
      <div className="contact-list">
        {contactList.map((contact, contactIndex) => (
          <motion.a
            target="_blank"
            whileTap={{ scale: 1.1 }}
            className="contact-item"
            key={contactIndex}
            href={contact.link}>
            <FontAwesomeIcon icon={contact.icon} className="contact-icon" />
            <span>{contact.text}</span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Contact
