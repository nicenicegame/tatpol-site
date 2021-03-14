import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Hi, My name is Tatpol Samakpong. Nickname is Nice. 2nd-year
        Software Engineer Student of Kasetsart University. I'm interested in both front-end and back-end web development. My favourite 
        programming languages are
        Python, Java, and JavaScript. The frameworks
        that I familiar with are Django, React, Angular, and Node.js."
      />
      <meta name="robots" content="index, follow" />
      <link
        rel="icon"
        type="image/png"
        href="../public/images/code-solid.svg"
      />

      <script
        src="https://kit.fontawesome.com/2f1a6e5d18.js"
        crossorigin="anonymous"
      ></script>

      <title>nicenicegame's Portfolio</title>
    </Helmet>
  )
}

export default Head
