import React, { useState } from "react";
import NavItem from "./NavItem";
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
      <div className="logo">
        <img src="./images/logo.png" alt="" />
      </div>
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
