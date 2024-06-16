import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__search">
        <input type="text" placeholder="Search..." className="navbar__input" />
      </div>
      <div className="navbar__login">
        <button className="navbar__button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

