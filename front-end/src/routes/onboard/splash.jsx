import React from "react";
import Logo from "../../images/Logo.png";
import "../../style/splash.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Splash() {
    const navigate = useNavigate(); // get the navigate function
    const location = useLocation(); // get the location object
    const handleClick = () => {
        navigate("/Onboard1"); // navigate to the relative path
        console.log(location.pathname); // log the current path
    };

    let text =
        "Ich liebe Katzen. Katzen sind sehr leicht zu lieben. Katzen sind sehr beliebt.";
    let arr2 = [];

    const iterator = text.matchAll("Katzen");
    const ibo = text.matchAll("sehr");

    arr2.push(ibo);

    console.log(arr2.toString());

    return (
        <div id="splash">
            <img src={Logo} alt="logo" onClick={handleClick} />
        </div>
    );
}
