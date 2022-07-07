import React from "react";
import "../styles/Footer.css";
import Logo from "../images/logo.svg";
import * as FaIcons from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="row-footer primary">
        <div className="column-footer about-footer">
        <div className="logo-container">
        <a href="/">
          <img src={Logo} alt="logo" className="logo" />
        </a>
      </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptatem corporis error non,
          </p>

          <div className="socials">
          <FaIcons.FaInstagram />
          <FaIcons.FaWhatsapp />
          <FaIcons.FaFacebook />
          <FaIcons.FaTwitter />
          </div>
        </div>

        <div className="column-links">
          <h3 className="h3-footer">Some Links</h3>

          <ul className="ul-footer">
            <li>
              <a href="#faq">F.A.Q</a>
            </li>
            <li>
              <a href="#cookies-policy">Cookies Policy</a>
            </li>
            <li>
              <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        <div className="column-links">
          <h3 className="h3-footer">Some Links</h3>
          <ul className="ul-footer">
            <li>
              <a href="#faq">F.A.Q</a>
            </li>
            <li>
              <a href="#cookies-policy">Cookies Policy</a>
            </li>
            <li>
              <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        <div className="column-subscribe">
          <h3 className="h3-footer">Newsletter</h3>
          <div>
            <input 
              className="input-footer"
              type="email"
              placeholder="Your email id here"
            />
            <button className="button-footer">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="row-copyright">
        <div className="footer-menu">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Blog</a>
          <a href="/">Social</a>
        </div>
        <div className="p-footer">
          Copyright &copy; 2022 OLX
        </div>
      </div>
    </footer>
  );
};
export default Footer;