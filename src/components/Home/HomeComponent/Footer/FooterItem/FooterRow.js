import React from "react";
import "./FooterRow.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function FooterRow() {
  return (
    <Router>
      <div className="footer_row">
        <div className="col col1">
          <div className="logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="col col2">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Features</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>Download</Link>
            </li>
            <li>
              <Link>Reviews</Link>
            </li>
          </ul>
        </div>
        <div className="col col3">
          <h4>Support</h4>
          <ul className="footer-links">
            <li>
              <Link>Report a bug</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
            <li>
              <Link>Sitemap</Link>
            </li>
            <li>
              <Link>FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="col col4">
          <h4>Newsletter</h4>
          <p>Heaven fruitful doesn't over lesser in days. Appear</p>
          <form action="#" className="myForm">
            <input type="email" placeholder="Email Address" />
            <button type="submit">
              <span className="flaticon-paper-plane-1"></span>
            </button>
          </form>
        </div>
      </div>

      
    </Router>
  );
}

export default FooterRow;
