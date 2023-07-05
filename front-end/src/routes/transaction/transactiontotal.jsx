import React from "react";

import { Link } from "react-router-dom";

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


import home from "../../images/home.svg";
import alltransact from "../../images/credit-card.svg";
import trans from "../../images/plus-circle.svg";
import report from "../../images/pie-chart.svg";

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
            <div className="nav-footer-item">
                <Link to="/">
                    <img src={home} alt="home" />
                </Link>
                <div className="nav_add_underline">
                    <p>Transaction</p>
                    <div className="nav_blue_line"></div>
                </div>
                <Link to="/addtransaction">
                    <img src={trans} alt="transaction" />
                </Link>
                <Link to="/reports">
                    <img src={report} alt="report" />
                </Link>
            </div>
        </>
    );
}

export default transactiontotal;
