import React from "react";
import "./Copyright.css";

function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer_copyright">
      <p> Copyright &copy;{currentYear} All rights reserved | www.appco.com</p>
    </div>
  );
}

export default Copyright;
