import React, { useState } from 'react';
import './App.css';



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


      </footer>
  </div>
  );
}

export default App;
