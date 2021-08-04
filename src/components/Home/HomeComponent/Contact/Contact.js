import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <Router >
      <div className="contact" id="contact">
        <div className="main-container">
          <div className="container">
            <div className="row">
              <h1>Say Hello To The Collaboration Hub.</h1>
              <div className="contact-button">
                <Link to="/contact" className="contact-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="shaper">
            <img src="./images/rotator.png" className="animate" alt="" />
            <img src="./images/email-arrow.png" className="kite" alt="" />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Contact;
