import React from "react";

import {
    Container,
    Header,
    Image,
    Segment,
    Grid,
    Button,
    Icon,
    ButtonGroup,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../style/transactiontotal.css";
import Logo from "../../images/Logo.svg";
import profil_logo from "../../images/profil_logo.svg";
import income from "../../images/income.png";
import expense from "../../images/expense.png";
import Date from "../../images/date.png";
import Search from "../../images/Search.png";



function transactiontotal() {
    return (
        <>
            <div>
                <div className="header">
                    <aside>
                        <Image src={Logo} alt="Logo" />
                    </aside>
                    <section>
                        <Image src={profil_logo} alt="profil_logo" />
                    </section>
                </div>

                <main>
                 <div>
                        <div className="allbutton">
                            <h1> All Transaction</h1>
                            <div className="button">
                            <button className="seacabutton">
                            <img src={Date} alt="Date" />
                            </button>
                            <button className="seacabutton">
                            <img src={Search} alt="Search" />
                            </button>
                            </div>
                </div> 
                   
                   

                        <div className="container">
                          <div className="money">
                          <Image src={income} alt="income" />
                          <div className="text">
                          <p>Income</p>
                          <p>+50000</p>
                          </div>
                          </div>

                          <div className="money">
                          <Image src={expense} alt="expense" />
                          <div className="text">
                          <p>Expense</p>
                          <p>+50000</p>
                          </div>
                          </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default transactiontotal;
