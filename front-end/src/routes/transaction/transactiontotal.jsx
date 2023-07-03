import React from 'react';
import { Container, Header, Image, Segment, Grid, Button, Icon, ButtonGroup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Logo from './images/Logo.svg';
import profil_logo from './images/profil_logo.svg';
import income from './images/income.png';
import expense from './images/expense.png';

function App() {
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
                  <Segment style={{ borderRadius: '50px' }}>
                    <Image src={income} width="107" height="auto" alt="income" />
                    <p>Income</p>
                    <p>+50000</p>
                  </Segment>
                </Grid.Column>

                <Grid.Column width={7} textAlign="left">
                  <Segment style={{ borderRadius: '50px' }}>
                    <Image src={expense} width="107" height="auto" alt="expense" />
                    <p>Expense</p>
                    <p>+50000</p>
                  </Segment>
                </Grid.Column>
              </Grid>
            </div>
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;

