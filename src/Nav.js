import React, { useEffect, useState } from 'react';
import profile_logo from './profile-logo.png';
import './Nav.css';
import Netflix_logo from "./netflix-logo.png";
import { useHistory } from "react-router-dom";

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();


    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img onClick={() => history.push("/")} className="nav__logo" src={Netflix_logo} alt="Netflix Logo" />
            <img onClick={() => history.push("/profile")} className="nav__avatar" src={profile_logo} alt="Netflix Avatar" />

        </div>
    )
}

export default Nav
