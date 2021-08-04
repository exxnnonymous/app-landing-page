import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
import 'animate.css/animate.min.css';

function Header() {

  const [fixHeader, setFixheader] = useState(false);
  const [fixTopToBottom, setFixTopToBottom] = useState(false);

  window.addEventListener("scroll", function myFunction() {
    if (window.scrollY > 300) {
      setFixheader(true)
    } else {
      setFixheader(false)
    }

    if (window.scrollY > 600) {
      setFixTopToBottom(true);

    } else {
      setFixTopToBottom(false);

    }
  })

  return (
    <>
      <button className={fixTopToBottom ? "topTobottom show-top" : "topTobottom"} onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}>
        <i class="fas fa-arrow-up"></i>
      </button>
      <div className={fixHeader ? "header fixed-header" : "header animate__animated animate__fadeIn"}>
        <div className="container">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Header;
