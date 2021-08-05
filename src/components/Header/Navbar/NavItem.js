import React, { useState, useEffect } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./NavItem.css";

function NavItem({ hideNav }) {

  const [nav, setNav] = useState(true);
  const location = useLocation()



  useEffect(() => {

    if (window.location.pathname === "/")
      setNav(true)
    else {
      setNav(false)
    }
  }, [location]);

  if (nav) {
    return (
      <>
        <li className="nav_item">
          <Link to="/" className="active" onClick={hideNav}>Home</Link>
        </li>
        <li className="nav_item">
          <HashLink to="#features" onClick={hideNav}>Feature</HashLink>
        </li>
        <li className="nav_item">
          <HashLink to="#services" onClick={hideNav}>Services</HashLink>
        </li>
        <li className="nav_item">
          <HashLink to="#pricing" onClick={hideNav}>Pricing</HashLink>
        </li>
        <li className="nav_item">
          <Link to="/pages" onClick={hideNav}>Pages</Link>
        </li>
        <li className="nav_item">
          <Link to="/contact" onClick={hideNav}>Contact</Link>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className="nav_item">
          <Link to="/" onClick={hideNav}>Home</Link>
        </li>
        <li className="nav_item">
          <NavLink to="/pages" activeClassName="active" onClick={hideNav}>Pages</NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/contact" activeClassName="active" onClick={hideNav}>Contact</NavLink>
        </li>
      </>
    );
  }


}

export default NavItem;
