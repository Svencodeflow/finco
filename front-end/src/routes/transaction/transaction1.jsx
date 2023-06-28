import React, { useState } from 'react';
import './style/home.css';


function App() {


  return (
    <>
      <div>
        <header>
       
        </header>

        <main>
          <div>
            <h1>Alle Transaktionen</h1>
          </div>
          <div className="income">
            <img src="/images/income.png" alt="Income" />
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

