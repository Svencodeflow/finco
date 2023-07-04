import React from "react";
import { Link } from "react-router-dom";
// import home from "../images/home.svg";
import alltransact from "../../images/credit-card.svg";
import trans from "../../images/plus-circle.svg";
import report from "../../images/pie-chart.svg";
import "../../style/footernav.css";

function App() {
    return (
        <div className="nav-footer">
            <div className="nav-footer-item">
                <div className="nav_add_underline">
                    <p>Home</p>
                    <div className="nav_blue_line"></div>
                </div>
                <Link to="/transactiontotal">
                    <img src={alltransact} alt="alltransact" />
                </Link>
                <Link to="/addtransaction">
                    <img src={trans} alt="transaction" />
                </Link>
                <Link to="/reports">
                    <img src={report} alt="transaction" />
                </Link>
            </div>
        </div>
    );
}

export default App;
