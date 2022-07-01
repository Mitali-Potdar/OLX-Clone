import React, { useState } from "react";
import Logo from "../images/logo.svg";
import "../styles/navbar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="top-header">
      <div className="logo-container">
        <a href="/">
          <img src={Logo} alt="logo" className="logo" />
        </a>
      </div>
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search.."
          name="search"
        />
        <button type="submit" className="searchButton">
          <FaIcons.FaSearch className="search-icon" />
        </button>
      </div>
      <div className={click ? "nav-options active" : "nav-options"}>
        <div className="option" onClick={closeMobileMenu}>
          <a href="/">
            <FaIcons.FaComments className="nav-icon" />
            <p className="nav-name">CHAT</p>
          </a>
        </div>
        <div className="option" onClick={closeMobileMenu}>
          <div class="dash-dropdown">
            <div class="dashbtn">
              <FaIcons.FaUserCircle className="nav-icon" />
              <p className="nav-name">DASHBOARD</p>
            </div>
            <div class="dash-dropdown-content">
              <a href="/">Profile</a>
              <a href="/">Wishlist</a>
              <a href="/">My Listings</a>
              <a href="/">Logout</a>
            </div>
          </div>
        </div>
        <div className="option" onClick={closeMobileMenu}>
          <a href="/">
            <p className="login">LOGIN</p>
          </a>
        </div>
        <div className="option" onClick={closeMobileMenu}>
          <a href="/" className="sell-btn">
            <p>SELL</p>
          </a>
        </div>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FaIcons.FaTimes className="menu-icon" />
        ) : (
          <FaIcons.FaGripLines className="menu-icon" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
