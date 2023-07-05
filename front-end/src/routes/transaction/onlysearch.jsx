import React from "react";

import {
    Image, Input
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../style/transactiontotal.css";
import "../../style/addincome.css";
import Logo from "../../images/Logo.svg";
import profil_logo from "../../images/profil_logo.svg";
import Date from "../../images/date.png";
import Search from "../../images/Search.png";



function onlysearch() {
    return (
        <>
        <div>
            <header id="income_header">
                <div className="income_back">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="income_profil">
                    <img src={profil_logo} alt="profil_logo" />
                </div>
            </header>

            <main>
                <div>
                    <div className="allbutton">
                        <h1> S</h1>
                        <div className="button">
                            <button className="seacabutton">
                                <img src={Date} alt="Date" />
                            </button>
                            <div className="search-bar">
                                <Input icon={<img src={Search} alt="Search" />} placeholder="Search..." />
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div >
      </>
  );
}

export default onlysearch;