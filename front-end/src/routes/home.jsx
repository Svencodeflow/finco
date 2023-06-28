import React, { useState } from 'react';
import './App.css';



function App() {


  return (
    <div>
      <header>
        <h1>Welcome back</h1>
        {/* Platzhalter Name */}
        <img src="/images/profilpic.png" alt="profilpic" />
      </header>

      <main className="wallet">

        <div className="creditcard">
        <img src="/images/kreditcardbluefinal.png" alt="kreditcardbluefinal" />
        </div>

        <h3>Total wallet</h3>
        <div className='flex'>
          
        <div className="income">
        <img src=".\images" alt="income" />
          <p>Income</p>
          {/* Platzhalter income */}
          <p>+50000</p>
        </div>

        <div className="expense">
        <img src="/images/expense.png" alt="expense" />
          <p>Expense</p>
          {/* Platzhalter expense */}
          <p>+50000</p>
        </div>

        <div className="monthlyLimit">
        <img src="/images/monthly.png" alt="monthly" />
        <p>Monthly spending limit</p>
          {/* Platzhalter monthly */}
          <p>+50000</p>
        </div>
        </div>
    </main>
    
    <footer className="footerNav">


      </footer>
  </div>
  );
}

export default App;
