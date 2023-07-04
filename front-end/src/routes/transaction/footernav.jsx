import React from "react";
import { Link } from "react-router-dom";
// import home from "../../images/home.svg";
// import alltransact from "../../images/alltransact.svg";
// import report from "../../images/report.svg";
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
                <div className="nav_add_underline">
                    <p>Add</p>
                    <div className="nav_blue_line"></div>
                </div>
                <Link to="/reports">
                    <img src={report} alt="report" />
                </Link>
            </div>
        </div>
    );
}

export default App;
