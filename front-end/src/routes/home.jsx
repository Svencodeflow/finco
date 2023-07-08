import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Grid, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../style/home.css";
import kreditcardbluefinal from "../images/kreditcardbluefinal.png";
import income from "../images/income.png";
import expense from "../images/expense.png";
import monthly from "../images/monthly.png";
//import profil_logo from "../images/profil_logo.svg";
import Footernavbar from "./transaction/footernav.jsx";

export default function Home() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        axios
            .get("/api/users")
            .then((response) => {
                setUserData(response.data);
                console.log("responseDta", response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div id="home">
            <header className="home_header">
                <aside>
                    <h1>Welcome back</h1>
                    <p>{userData?.name}</p>
                    {/* {console.log(User.name)} */}
                </aside>
                <section>
                    <img src={userData?.avatar} alt="avatar" />
                </section>
            </header>

            <main className="home_main">
                <div id="kreditcard">
                    <img
                        src={kreditcardbluefinal}
                        width="350"
                        height="auto"
                        alt="kreditcardbluefinal"
                    />
                </div>

                <Grid verticalAlign="center" textAlign="center">
                    <Grid.Row>
                        <Grid.Column width={6} position="left">
                            <Segment style={{ borderRadius: "30px" }}>
                                <img
                                    src={income}
                                    width="107"
                                    height="auto"
                                    alt="income"
                                />
                                <p>Income</p>
                                <p>+50000</p>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column
                            width={6}
                            verticalAlign="center"
                            textAlign="center"
                        >
                            <Segment style={{ borderRadius: "30px" }}>
                                <img src={expense} alt="expense" />
                                <p>Expense</p>
                                <p>+50000</p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12} verticalAlign="center">
                            <Segment style={{ borderRadius: "30px" }}>
                                <img src={monthly} alt="monthlyLimit" />
                                <p>Monthly spending limit</p>
                                <p>+50000</p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </main>
            <footer className="footerNav">
                <Footernavbar />
            </footer>
        </div>
    );
}
