import { Link } from "react-router-dom";
import home from "../images/home.svg";
import alltransact from "../images/credit-card.svg";
import trans from "../images/plus-circle.svg";
import report from "../images/pie-chart.svg";
import Profil from "../images/profilpic.png";
import feather from "../images/feather.svg";
import bell from "../images/bell.svg";
import settings from "../images/settings.svg";
import faq from "../images/help-circle.svg";
import logout from "../images/log-out.svg";
import arrow from "../images/chevron-down.svg";

import "../style/accsetting.css";

export default function Accountsetting() {
    return (
        <div id="accountsetting">
            <header className="accsett-header">
                <div>
                    <h5>Welcome back</h5>
                    {/* 
                        //! Change to user's name from database 
                        //? <h3>{user.name}</h3> jenach fetch
                    */}
                    <h3>JohnDoe</h3>
                </div>
                <img src={Profil} alt="profile" />
            </header>
            <main className="accsett-main">
                <div className="accsett-main-item">
                    <div className="accsett_wallet">
                        <div className="item_eins">
                            <img src={feather} alt="wallet" />
                            <h4>My Wallet</h4>
                        </div>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="accsett_main_notify">
                        <div className="item_zwei">
                            <img src={bell} alt="notification" />
                            <h4>Notification</h4>
                        </div>
                    </div>
                    <div className="accsett_main_setting">
                        <div className="item_drei">
                            <img src={settings} alt="setting" />
                            <h4>Settings</h4>
                        </div>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="accsett_main_faq">
                        <div className="item_vier">
                            <img src={faq} alt="faq" />
                            <h4>FAQ</h4>
                        </div>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="accsett_main_logout">
                        <div className="item_fuenf">
                            <img src={logout} alt="logout" />
                            <h4>Logout</h4>
                        </div>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
            </main>
            <footer className="nav-footer-item">
                <Link to="/">
                    <img src={home} alt="home" />
                </Link>
                <Link to="/transactiontotal">
                    <img src={alltransact} alt="alltransact" />
                </Link>
                <Link to="/addtransaction">
                    <img src={trans} alt="transaction" />
                </Link>
                <Link to="/reports">
                    <img src={report} alt="transaction" />
                </Link>
            </footer>
        </div>
    );
}
