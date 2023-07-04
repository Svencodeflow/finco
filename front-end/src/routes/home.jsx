import React from "react";
import { Image, Grid, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../style/home.css";
import kreditcardbluefinal from "../images/kreditcardbluefinal.png"; 
import income from "../images/income.png";
import expense from "../images/expense.png";
import monthly from "../images/monthly.png";
import profil_logo from "../images/profil_logo.svg";
import Footernavbar from "./transaction/footernav.jsx";

export default function home() {
    return (
        <div id="home">
            <header className="home_header">
                <aside>
                    <h1>Welcome back</h1>
                    <p>Kevin Kasperek</p>
                </aside>
                <section>
                    <img src={profil_logo} alt="profil_logo" />
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
            <Footernavbar />
        </div>
    );
}
