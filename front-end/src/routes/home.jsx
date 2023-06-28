import React, { useState } from 'react';
import './style/home.css';
import { Link } from 'react-router-dom';



function App() {


  return (
    <div>
      <header>
        <h1>Welcome back</h1>
        {/* Platzhalter Name */}
      </header>

      <main className="wallet">

        <div className="creditcard">
        <img src="/images/kreditcardbluefinal.png" alt="kreditcardbluefinal" />
        </div>

        <h3>Total wallet</h3>

        <div className="income">
        <img src="/images/income.png" alt="income" />
          <p>Income</p>
          {/* Platzhalter income */}
        </div>

        <div className="expense">
        <img src="/images/expense.png" alt="expense" />
          <p>Expense</p>
          {/* Platzhalter expense */}
        </div>

        <div className="monthlyLimit">
        <img src="/images/monthly.png" alt="monthly" />
        <p>Monthly spending limit</p>
          {/* Platzhalter monthly */}
        </div>
    </main>
    
    <footer className="footerNav">


      </footer>
  </div>
  );
}

export default App;
