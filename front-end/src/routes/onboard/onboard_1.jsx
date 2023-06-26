import React from "react";
import "../../style/onboard.css";
import bankcard from "../../images/onboard_bank.png";

export default function onboard_1() {
    return (
        <div id="onboard_1">
            <div className="onboard_1_img">
                <img src={bankcard} alt="bankcard" />
            </div>
        </div>
    );
}
