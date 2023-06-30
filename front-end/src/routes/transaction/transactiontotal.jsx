import React, { useState } from 'react';
import './style/home.css';
import Logo from './images/Logo.svg';
import profil_logo from './images/profil_logo.svg';
import income from './images/income.png';
import expense from './images/expense.png';


function App() {


  return (
    <>
      <div>
        <header>
        <img src={Logo} alt="Logo" />
        <img src={profil_logo} alt="profil_logo" />
        </header>

        <main>
          <div>
            <h1>All Transaction </h1>
          </div>
          <div className="income">
            <img src={income} alt="Income" />
            <p>Income</p>
            {/* Platzhalter Einnahmen */}
          </div>

          <div className="expense">
          <img src={expense} alt="expense" />
            <p>Expense</p>
            {/* Platzhalter Ausgaben */}

            {/* Platzhalter Datumsabfrage */}
            {/* Platzhalter Datenbank */}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

