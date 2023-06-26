import React from "react";
<<<<<<< Updated upstream
import "../../style/onboard.css";
import bankcard from "../../images/onboard_bank.png";
=======
import "./../../style/onboard.css";
import bankcard from "./../../images/onboard_bank.png";
import { Link } from "react-router-dom";
>>>>>>> Stashed changes

export default function onboard_1() {
    return (
        <div id="onboard_1">
            <div className="onboard_1_img">
                <img src={bankcard} alt="bankcard" />
            </div>
            <div className="onboard_1_text">
                <h1>Track your spend and income</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt et.
                </p>
            </div>
            <div className="onboard_1_btn">
                <div>
                    <Link to="/register">
                        <h2 className="onboard_skip">Skip</h2>
                    </Link>
                </div>
                <div>
                    <Link to="/onboard_1">
                        <button>
                            Next<span>&#8594;</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
