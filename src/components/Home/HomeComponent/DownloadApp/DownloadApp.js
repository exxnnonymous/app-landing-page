import React from "react";
import "./DownloadApp.css";

function DownloadApp() {
  return (
    <div className="downloadapp">
      <div className="container">
        <div className="animating-shape">
          <img src="./images/animate.webp" alt="" />
        </div>
        <div className="row">
          <div className="download_info">
            <h1>Our App Available For Any Device Download now</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore fug.
            </p>
            <div className="download_buttons">
              <a href="/" className="download-button">
                <div className="download-icon">
                  <span className="flaticon-apple icon"></span>
                </div>
                <div className="btn-text">
                  <span>Available on the</span>
                  <h3>App Store</h3>
                </div>
              </a>
              <a href="/" className="download-button">
                <div className="download-icon">
                  <img src="./images/google-play.png" alt="" />
                </div>
                <div className="btn-text">
                  <span>Download from</span>
                  <h3>Google Play</h3>
                </div>
              </a>
            </div>
          </div>
          <div className="download_banner">
            <img src="./images/downloadApp.png" alt="main-app" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
