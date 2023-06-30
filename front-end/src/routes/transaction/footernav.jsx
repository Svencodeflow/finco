import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../assets/home.svg';
import alltransact from '../../assets/alltransact.svg';
import report from '../../assets/report.svg';
import './footernav.css';



const NavItem = ({ text }) => {
  return <li>{text}</li>;
};

const FooterNavbar = () => {
  return (
    <nav>
      <ul>
        <NavItem text="Home" />
        <NavItem text="About" />
        <NavItem text="Services" />
        <NavItem text="Contact" />
        <NavItem text="FAQ" />
      </ul>
    </nav>
  );
};


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
