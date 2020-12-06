import React from "react";
import DevActivity from "../../public/images/undraw_developer_activity_bv83.svg";

const About = () => {
  return (
    <section className="about" id="about">
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
          I'm interested in both <span>front-end </span>and
          <span> back-end </span> web development. My favourite programming
          languages are <span>Python, Java, and JavaScript.</span> The
          frameworks that I familiar with are
          <span> Django, React, Angular, and Node.js.</span>
        </p>
        <p>
          In free time, I like to watch movies, listening to music, and I
          usually learn coding from Youtube video. I'm a fast learner and
          willing to do new things.
        </p>
      </div>
    </section>
  );
};

export default About;
