import React from "react";
import "./../../style/onboard.css";
import card from "./../../images/giftcard.svg";
import { Link } from "react-router-dom";

export default function Onboard2() {
    return (
        <div id="onboard_1">
            <div className="onboard_1_img">
                <img src={card} alt="card" />
            </div>
            <div className="onboard_1_text">
                <h1>Analyze your spending</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt et.
                </p>
            </div>
            <div className="onboard_1_btn">
                <Link to="/register">
                    <button>
                        Get Started<span>&#8594;</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
