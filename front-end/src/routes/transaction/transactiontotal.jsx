import React, { useState } from 'react';
import './style/home.css';
import Logo from './assets/Logo.svg';
import profil_logo from './assets/profil_logo.svg';
import income from './assets/income.svg';
import expense from './assets/expense.svg';


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
            <img src="/images/income.png" alt="Income" />
            <img src={income} alt="Income" />
            <p>Income</p>
            {/* Platzhalter Einnahmen */}
          </div>

          <div className="expense">
            <img src="/images/expense.png" alt="Expense" />
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

