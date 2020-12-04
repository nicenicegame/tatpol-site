import React from "react";
import WebDevImage from "../../public/images/undraw_web_developer_p3e5.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-text">
          <h1>Hi there</h1>
          <h2>
            I'm Nice and I'm a <br /> Software Engineer Student
          </h2>
          <a className="btn" href="#">
            Contact Me
          </a>
        </div>
        <div className="hero-images">
          <img src={WebDevImage} alt="web developer image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
