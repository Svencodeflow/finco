import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import home from "../../images/home.svg";
import alltransact from "../../images/credit-card.svg";
import report from "../../images/pie-chart.svg";

export default function Addtransaction() {
    return (
        <div>
            <div className="addtransaction">
                <Outlet />
            </div>
            <div className="addtransaction-footer">
                <div className="addtransaction-footer-item">
                    <Link to="/">
                        <img src={home} alt="home" />
                    </Link>
                    <Link to="/alltransact">
                        <img src={alltransact} alt="alltransact" />
                    </Link>
                    <p>Add</p>
                    <Link to="/reports">
                        <img src={report} alt="report" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
