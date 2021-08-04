import React from "react";
import Item from "./FeaturesItem/Item";
import "./Features.css";

const featuresData = [
  {
    title: "Easy to Customize",
    description: "Aorem psum olorsit amet ectetur adipiscing elit, sed dov.",
  },
  {
    title: "Extreme Security",
    description: "Aorem psum olorsit amet ectetur adipiscing elit, sed dov.",
  },
  {
    title: "Cusotmer Support",
    description: "Aorem psum olorsit amet ectetur adipiscing elit, sed dov.",
  },
  {
    title: "Creative Design",
    description: "Aorem psum olorsit amet ectetur adipiscing elit, sed dov.",
  },
];

function Features() {
  return (
    <div className="features" id="features">
      <div className="container">
        <div className="row">
          <div className="col-left">
            <img src="./images/features.webp" alt="features-img" />
          </div>
          <div className="col-right">
            <div className="features_head">
              <h1>
                Some of the best features Of Our App!
              </h1>
            </div>
            <div className="features_items_container">
              {featuresData.map((data, index) => (
                <Item
                  key={index}
                  title={data.title}
                  description={data.description}
                  icon="flaticon-support"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
