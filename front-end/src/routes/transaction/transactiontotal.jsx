import React, { useState } from 'react';
import './style/home.css';


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
            <img src={expense} alt="Expense" />
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

