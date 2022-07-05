import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Logo from "../images/logo.svg";
import "../styles/navbar.css";
import * as FaIcons from "react-icons/fa";
import {useSelector} from 'react-redux'
import axios from 'axios'

function Navbar() {
  const auth = useSelector(state => state.auth)

  const {user, isLogged} = auth

  const userLink = () => {
    return <li >
        <Link>
        <img src={user.avatar} alt=""/> {user.name} 
        </Link>
    </li>
}

// const userLink = () => {
//   return <li className="drop-nav">
//       <Link to="#" className="avatar">
//       <img src={user.avatar} alt=""/> {user.name} <i className="fas fa-angle-down"></i>
//       </Link>
//       <ul className="dropdown">
//           <li><Link to="/profile">Profile</Link></li>
//           <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
//       </ul>
//   </li>
// }
        

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0
}

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
          <div class="dash-dropdown">
            <div class="dashbtn">
              <FaIcons.FaUserCircle className="nav-icon" />
              <p className="nav-name">DASHBOARD</p>
            </div>
            <div class="dash-dropdown-content">
              <Link to ="/">Profile</Link>
              <a href="/">Wishlist</a>
              <a href="/">My Listings</a>
              <Link to ="/">Logout</Link>
            </div>
          </div>
        </div>
        <ul style={transForm}>    
             {
                    isLogged
                    ?<div className="option" onClick={closeMobileMenu}><Link to = "/login"><p className="login">LOGOUT</p></Link></div>
                    : <div className="option" onClick={closeMobileMenu}><Link to = "/login"><p className="login">LOGIN</p></Link></div>
                } 
                </ul>

                
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
