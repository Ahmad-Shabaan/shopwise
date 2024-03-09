import React from "react";
import { navLinks } from "../../constant";
import logoDark from "/assets/logo_dark.png";
import { INavLink } from "../../types";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="firstNav">
            <div className="partOne">
              <ul>
                <li>
                  <i className="fa-solid fa-globe"></i> &nbsp; English&nbsp;
                  <i className="fa-solid fa-angle-down"></i>
                </li>
                <li>
                  USD &nbsp;<i className="fa-solid fa-angle-down"></i>
                </li>
                <li>
                  <i className="fa-solid fa-mobile-screen"></i>{" "}
                  &nbsp;123-456-789
                </li>
              </ul>
            </div>
            <div className="partTwo">
              <ul>
                <li>
                  <i className="fa-solid fa-shuffle"></i> &nbsp;Compare
                </li>
                <li>
                  <i className="fa-regular fa-heart"></i> &nbsp;Wishlist
                </li>
                <li>
                  <i className="fa-regular fa-user"></i> &nbsp;Login
                </li>
              </ul>
            </div>
          </div>
          <div className="secondNav">
            <div>
              <img src={logoDark} alt="logo" />
            </div>
            <div>
              <ul>
                {navLinks.map((link: INavLink) => (
                  <li key={link.label}>
                    <Link to={link.route}>{link.label} </Link><i className={link.icon}></i>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="orders">2</div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
