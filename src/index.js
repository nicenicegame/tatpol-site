import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import BGHero from "../public/images/bg-hero.svg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="app">
      <img src={BGHero} alt="bg hero" className="bg-hero" />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
