import React from "react";
import DevActivity from "../../public/images/undraw_developer_activity_bv83.svg";

const About = () => {
  return (
    <section className="about">
      <div className="about-wrapper">
        <div className="about-images">
          <img src={DevActivity} alt="dev activity" />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, My name is Tatpol Samakpong. Nickname is Nice. 2nd-year Software
            Engineer Student of Kasetsart University.
          </p>
          <p>
            I'm interested in both front-end and back-end web development. My
            favourite programming languages are Python, Java, and JavaScript.
            The frameworks that I familiar with are Django, React, Angular, and
            Node.js
          </p>
          <p>
            In free time, I like to watch movies, listening to music, and I
            usually learn coding from Youtube video. I'm a fast learner and
            willing to do new things.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
