import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import 'animate.css/animate.min.css';
import "./Hero.css";

function Hero() {

  const [animate, setAnimate] = useState()

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 700) {
      setAnimate(false)
    }
    else {
      setAnimate(true)
    }
  });

  useEffect(() => {

    if (window.innerWidth <= 700) {
      setAnimate(false)
    }
    else {
      setAnimate(true)
    }
  }, [])


  return (
    <Router>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <h1 className={animate && "animate__animated animate__fadeInUp"}>Get things done <br /> with Appco</h1>
              <p className={animate && "animate__animated animate__fadeInUp"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Labore, quas numquam! Accusamus quae perspiciatis porro
                corrupti.
              </p>

              <Link className={animate && "animate__animated animate__fadeInLeft animate__delay-1s"}>Download</Link>
            </div>
            <div className={animate ? "col-right animate__animated animate__backInRight" : "col-right"}>
              <img src="./images/hero1.png" alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Hero;
