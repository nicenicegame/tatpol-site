import React, { useRef, useEffect } from 'react'

const Contact = ({ sectionOffsetTop, setSectionOffsetTop }) => {
  const contactRef = useRef(null)

  useEffect(() => {
    if (contactRef.current) {
      setSectionOffsetTop({
        ...sectionOffsetTop,
        contact: contactRef.current.offsetTop
      })
    }
  }, [contactRef.current])

  return (
    <div className="container contact">
      <h1 className="text-shadow">Contact</h1>
    </div>
  )
}

export default Contact
