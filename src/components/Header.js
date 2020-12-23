import React, { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const openSideNav = () => {
        setToggle(!toggle);
    };

    return (
        <header>
            <a href="#" className="logo">
                Tatpol S.
            </a>
            <nav>
                <ul className={toggle ? "open-nav" : ""}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="hamburger" onClick={openSideNav}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
        </header>
    );
};

export default Header;
