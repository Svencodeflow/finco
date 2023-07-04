import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import home from "../../images/home.svg";
import alltransact from "../../images/credit-card.svg";
import report from "../../images/pie-chart.svg";
import "../../style/addtransacc.css";

export default function Addtransaction() {
    return (
        <div>
            <div className="addtransaction">
                <Outlet />
            </div>
            <div className="nav-footer">
                <div className="nav-footer-item">
                    <Link to="/">
                        <img src={home} alt="home" />
                    </Link>
                    <Link to="/transactiontotal">
                        <img src={alltransact} alt="alltransact" />
                    </Link>
                    <div className="nav_add_underline">
                        <p>Add</p>
                        <div className="nav_blue_line"></div>
                    </div>
                    <Link to="/reports">
                        <img src={report} alt="report" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
