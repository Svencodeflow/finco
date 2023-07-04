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
                    <Container>
                        <Header as="h2">
                            All Transaction
                            <ButtonGroup floated="right">
                                <Button icon labelPosition="left">
                                    <Icon name="search" />
                                </Button>
                                <Button icon labelPosition="right">
                                    <Icon name="calendar" />
                                </Button>
                            </ButtonGroup>
                        </Header>

                        <div className="container">
                            <Grid columns={2}>
                                <Grid.Column width={7} textAlign="right">
                                    <Segment style={{ borderRadius: "50px" }}>
                                        <Image
                                            src={income}
                                            width="107"
                                            height="auto"
                                            alt="income"
                                        />
                                        <p>Income</p>
                                        <p>+50000</p>
                                    </Segment>
                                </Grid.Column>

                                <Grid.Column width={7} textAlign="left">
                                    <Segment style={{ borderRadius: "50px" }}>
                                        <Image
                                            src={expense}
                                            width="107"
                                            height="auto"
                                            alt="expense"
                                        />
                                        <p>Expense</p>
                                        <p>+50000</p>
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </div>
                    </Container>
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
