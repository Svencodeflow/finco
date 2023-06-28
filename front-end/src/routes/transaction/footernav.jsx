import React from 'react';


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
    <div>
 
      <FooterNavbar />
    </div>
  );
}

export default App;
