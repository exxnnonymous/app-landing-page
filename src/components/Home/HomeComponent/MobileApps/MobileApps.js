import React from "react";
import Slider from "./AppItem/Slider";
import "./MobileApps.css";

function MobileApps() {
  return (
    <div className="mobileapp">
      <div className="row">
        <div className="app_info">
          <h1>
            Applic Apps <br /> Screenshot
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consecadi piscing elit, sed do eiusmod
            tempor incididunt ut ore et dolore magna aliqua. Quis ipsum
            suspendisse gravida. Risus commodo viverra maecenasan lacus vel
            facilisis.
          </p>
        </div>

        <div className="slider_container">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default MobileApps;
