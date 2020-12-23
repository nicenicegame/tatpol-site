import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
