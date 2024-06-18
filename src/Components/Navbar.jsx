import React, { useState } from 'react';
import './Navbar.scss';
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";

const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await newRequest.post("/Account/logout");
      localStorage.removeItem("currentUser");
      navigate("/"); 
    } catch (err) {
      console.error("Failed to log out:", err);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__search">
        <input type="text" placeholder="Search..." className="navbar__input" />
      </div>
      <div className="navbar__user">
        {currentUser ? (
          <>
            <button className="navbar__button" onClick={toggleDropdown}>
              {currentUser.name}
            </button>
            <ul className={`dropdown-menu${dropdownOpen ? ' show' : ''} dropdown-menu-end`} aria-labelledby="dropdownMenuButton">
              <li className="custom-dropdown-item"><Link className="dropdown-item" to="/addnotes">Add notes</Link></li>
              <li className="custom-dropdown-item"><Link className="dropdown-item" to="/addfiles">Add files</Link></li>
              <li className="custom-dropdown-item"><Link className="dropdown-item" to="/notes/id">Your notes</Link></li>
              <li className="custom-dropdown-item"><hr className="dropdown-divider" /></li>
              <li className="custom-dropdown-item">
                <button className="navbar__button" id="logout-button" onClick={handleLogout}>
                  Log out
                </button>
              </li>
            </ul>
          </>
        ) : (
          <Link to="/login">
            <button className="navbar__button">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


