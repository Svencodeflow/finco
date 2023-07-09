import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

// Image imports
import Logo from "../../images/Logo.svg";
import profil_logo from "../../images/profilpic.png";
import income from "../../images/income.png";
import expense from "../../images/expense.png";
import Date from "../../images/date.png";
import Search from "../../images/Search.png";
import home from "../../images/home.svg";
import trans from "../../images/plus-circle.svg";
import report from "../../images/pie-chart.svg";

// CSS imports
import "semantic-ui-css/semantic.min.css";
import "../../style/transactiontotal.css";

function transactiontotal() {
    const [transaction, setTransaction] = useState([]);

    useEffect(() => {
        fetch("/api/transactions")
            .then((res) => res.json())
            .then((data) => {
                setTransaction(data);
                console.log(data);
            });
    }, []);

    console.log(transaction);

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
                                    <Link to="/onlysearch">
                                        <img src={Search} alt="Search" />
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className="container">
                            <div className="money">
                                <Image src={income} alt="income" />
                                <div className="tranacc_text">
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
            <div>
                <div className="transacc-footer-item">
                    {transaction.map((item) => (
                        <div key={item._id}>
                            <p>category: {item.category}</p>
                            <p>amount: {item.amount}</p>
                            <p>date: {new Date(item.Date)}</p>
                            <p>time: {item.time}</p>
                        </div>
                    ))}
                </div>
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
