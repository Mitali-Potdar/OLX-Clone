import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="row-footer primary">
        <div className="column-footer about-footer">
          <h3>OLX</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptatem corporis error non,
          </p>

          <div className="social">
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-instagram-square"></i>
            <i class="fa-brands fa-twitter-square"></i>
            <i class="fa-brands fa-youtube-square"></i>
            <i class="fa-brands fa-whatsapp-square"></i>
          </div>
        </div>

        <div class="column links">
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

        <div class="column links">
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

        <div class="column subscribe">
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

      <div class="row copyright">
        <div class="footer-menu">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
          <a href="">Social</a>
        </div>
        <p button className="p-footer">
          Copyright &copy; 2022 OLX
        </p>
      </div>
    </footer>
  );
};
export default Footer;