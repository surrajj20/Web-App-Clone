import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import logo2 from './logo2.png';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);

            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src={logo} alt="Netflix Logo" />
            <img className="nav__avatar" src={logo2} alt="Netflix Avatar" />

        </div>
    )
}

export default Nav
