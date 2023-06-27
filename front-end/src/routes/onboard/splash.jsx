import React from "react";
<<<<<<< HEAD
import Logo from "../../images/logo.png";
import "../../style/splash.css";
import { useNavigate, useLocation } from "react-router-dom";
=======
import Logo from "./../../images/Logo.png";
import "./../../style/splash.css";
>>>>>>> 7a3766a2f2f401d2cd1dc6aa890502635ea84867

export default function Splash() {
    const navigate = useNavigate(); // get the navigate function
    const location = useLocation(); // get the location object
    const handleClick = () => {
        navigate("/Onboard1"); // navigate to the relative path
        console.log(location.pathname); // log the current path
    };

    return (
        <div id="splash">
            <img src={Logo} alt="logo" onClick={handleClick} />
        </div>
    );
}
