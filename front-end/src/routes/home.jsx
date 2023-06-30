import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './home.css';
import kreditcardbluefinal from './assets/kreditcardbluefinal.svg';
import income from './images/income.svg';
import expense from './images/expense.svg';
import monthly from './images/monthly.svg';
import profil_logo from './images/profil_logo.svg';


function App() {


  return (
    <div>
      <header>
        <h1>Welcome back</h1>
        {/* Platzhalter Name */}
        <img src={profil_logo} alt="profil_logo" />
      </header>

      <main className="wallet">

        <div className="kreditcardbluefinal">
        <img src={kreditcardbluefinal} alt="kreditcardbluefinal" />
        </div>

        <h3>Total wallet</h3>

        <div className='flex'>

        <div className="income">
        <img src={income} alt="income" />
          <p>Income</p>
          {/* Platzhalter income */}
          <p>+50000</p>
        </div>

        <div className="expense">
        <img src={expense} alt="expense" />
          <p>Expense</p>
          {/* Platzhalter expense */}
          <p>+50000</p>
        </div>

        <div className="monthlyLimit">
        <img src={monthly} alt="monthlyLimit" />
        <p>Monthly spending limit</p>
          {/* Platzhalter monthly */}
          <p>+50000</p>
        </div>
        </div>
    </main>
    
    <footer className="footerNav">
      <FooterNavbar />
    </footer>
  </div>
  );
}

export default App;
