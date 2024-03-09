import React, { Component } from "react";
import { contactIcons } from "../../constant";
import { IContact } from "../../types";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_top">
          <div>
            <div className="contact">
              <h6>Contact Info</h6>
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i>&nbsp; 123
                  Street,Old Trafford, NewYork,USA
                </li>
                <li>
                  <i className="fa-regular fa-envelope"></i>&nbsp;
                  info@sitename.com
                </li>
                <li>
                  <i className="fa-solid fa-mobile-screen"></i>&nbsp; +457 581
                  881 52
                </li>
              </ul>
            </div>
            <div className="contact_icons">
              {contactIcons.map((icon: IContact) => {
                return (
                  <span key={icon.url}>
                    <i className={icon.icon}></i>
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <h6>Useful Links</h6>
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Location</li>
              <li>Affiliates</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h6>My Account</h6>
            <ul>
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div className="subscribe">
            <h6>Subscribe Our Newsletter</h6>
            <p>
              If you want to get an email from us every time we have a new
              special offer, then sign up here!
            </p>
            <form action="index.html" method="get">
              <input type="email" placeholder="Enter Email Address" />
              <div className="icon">
                <i className="fa-solid fa-envelope-open-text"></i>
              </div>
            </form>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="part_one">
            &copy; 2023 All Rights Reserved by Bestwebcreator
          </div>
          <div className="part_two">
            <img src="Images/master_card.png" alt="" />
            <img src="Images/paypal.png" alt="" />
            <img src="Images/visa.png" alt="" />
            <img src="Images/amarican_express.png" alt="" />
            <img src="Images/discover.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
