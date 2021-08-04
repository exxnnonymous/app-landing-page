import React from "react";
import FooterRow from "./FooterItem/FooterRow";
import Copyright from "./FooterItem/Copyright";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <FooterRow />
        <Copyright />
      </div>
    </div>
  );
}

export default Footer;
