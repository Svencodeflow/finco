import React from 'react';
import { Header, Image, Grid, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import kreditcardbluefinal from './images/kreditcardbluefinal.png';
import income from './images/income.png';
import expense from './images/expense.png';
import monthly from './images/monthly.png';
import profil_logo from './images/profil_logo.svg';


function App() {
  return (
    <div>
      <header>
        <aside>   
        <h1>Welcome back</h1> 
        <p>Kevin Kasperek</p>
        </aside>
        <section> 
        <img src={profil_logo} alt="profil_logo" />
       </section>
      </header>

      <main >

        <div>
          <img src={kreditcardbluefinal} width="350" height="auto" alt="kreditcardbluefinal" id='kreditcard' />
        </div>

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <img src={income} alt="income" />
                <p>Income</p>
                <p>+50000</p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <img src={expense} alt="expense" />
                <p>Expense</p>
                <p>+50000</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <img src={monthly} alt="monthlyLimit" />
                <p>Monthly spending limit</p>
                <p>+50000</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </main>
      
      <footer className="footerNav">
       
      </footer>
    </div>
  );
}

export default App;
