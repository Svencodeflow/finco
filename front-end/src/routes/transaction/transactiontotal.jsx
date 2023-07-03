import React from "react";
import {
    Container,
    Header,
    Image,
    Segment,
    Grid,
    Menu,
    Button,
    Icon,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../style/home.css";
import Logo from "../../images/Logo.svg";
import profil_logo from "../../images/profil_logo.svg";
import income from "../../images/income.png";
import expense from "../../images/expense.png";

function App() {
    return (
        <>
            <div>
                <Menu>
                    <Container>
                        <Menu.Item>
                            <Image src={Logo} alt="Logo" />
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Image src={profil_logo} alt="profil_logo" />
                            </Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>

                <main>
                    <Container>
                        <div className="header-section">
                            <Button.Group>
                                <Button icon labelPosition="left">
                                    <Icon name="search" />
                                </Button>
                                <Button icon labelPosition="left">
                                    <Icon name="calendar" />
                                </Button>
                            </Button.Group>
                            <Header as="h1">All Transaction</Header>
                        </div>
                        <Grid columns={2}>
                            <Grid.Column>
                                <Segment>
                                    <Image src={income} alt="Income" />
                                    <p>Income</p>
                                    {/* Platzhalter Einnahmen */}
                                </Segment>
                            </Grid.Column>

                            <Grid.Column>
                                <Segment>
                                    <Image src={expense} alt="Expense" />
                                    <p>Expense</p>
                                    {/* Platzhalter Ausgaben */}
                                    {/* Platzhalter Datumsabfrage */}
                                    {/* Platzhalter Datenbank */}
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </main>
            </div>
        </>
    );
}
export default App;
