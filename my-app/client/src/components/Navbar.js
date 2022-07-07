import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Logo from "../images/logo.svg";
import "../styles/navbar.css";
import * as FaIcons from "react-icons/fa";
import {useSelector} from 'react-redux'
import axios from 'axios'

function Navbar() {
  const auth = useSelector(state => state.auth)

  const {isLogged} = auth

  const handleLogout = async () => {
    try {
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/";
    } catch (err) {
        window.location.href = "/";
    }
}

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="top-header">
      <div className="logo-container">
        <Link to = "/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
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
          <div className="dash-dropdown">
            <div className="dashbtn">
              <FaIcons.FaUserCircle className="nav-icon" />
              <p className="nav-name">DASHBOARD</p>
            </div>
            <div className="dash-dropdown-content">
              <Link to ="/profile">Profile</Link>
              <a href="/">Wishlist</a>
              <a href="/">My Listings</a>
              <Link to="/" onClick={handleLogout}>Logout</Link>
            </div>
          </div>
        </div>
        <div className="option" onClick={closeMobileMenu}>
          {
            isLogged
            ?<Link to="/" onClick={handleLogout}><p className="login">LOGOUT</p></Link>
            :<Link to = "/login"><p className="login">LOGIN</p></Link>
          } 
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
