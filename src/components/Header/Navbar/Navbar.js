import React, { useState } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom"
import "./Navbar.css";


function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);

  function hideNav() {
    if (activeMenu) {
      setActiveMenu(!activeMenu)
    }
  }

  return (
    <div className="navbar ">
      <Link to="/" className="logo">
        <img src="./images/logo.png" alt="" />
      </Link>
      <ul className={activeMenu ? "navbar_items show-nav " : "navbar_items"}>
        <NavItem hideNav={hideNav} />
      </ul>
      <div
        className="hamburger-menu"
        onClick={() => {
          setActiveMenu(!activeMenu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

  );
}

export default Navbar;
