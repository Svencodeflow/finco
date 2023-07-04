import React from "react";
import { Link } from "react-router-dom";
import home from "../../images/home.svg";
import alltransact from "../../images/credit-card.svg";
import trans from "../../images/plus-circle.svg";
import "../../style/footernav.css";

function App() {
    return (
        <div className="nav-footer">
            <div className="nav-footer-item">
                <Link to="/">
                    <img src={home} alt="home" />
                </Link>
                <Link to="/alltransact">
                    <img src={alltransact} alt="alltransact" />
                </Link>
                <Link to="/addtransaction">
                    <img src={trans} alt="transaction" />
                </Link>
                <div className="nav_add_underline">
                    <p>Reports</p>
                    <div className="nav_blue_line"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
