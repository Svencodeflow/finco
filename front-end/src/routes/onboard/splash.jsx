import React from "react";
import Logo from "./../../images/logo.png";
import "./../../style/splash.css";

export default function Splash() {
    const handleClick = () => {
        window.location.href = "/onboard";
    };

    return (
        <div id="splash">
            <img src={Logo} alt="logo" onClick={handleClick} />
        </div>
    );
}
