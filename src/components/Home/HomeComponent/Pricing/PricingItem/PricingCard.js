import React from "react";
import "./PricingCard.css";

function PricingCard(props) {
  return (
    <div className="col">
      <div className="pricing__card">
        <h3>{props.time} Years</h3>
        <h2>
          ${props.price} <span>/ month</span>{" "}
        </h2>
        <ul className="pricing_features">
          {props.features.map((data) => (
            <li>{data}</li>
          ))}
        </ul>
        <a href="/" className="btn">GET STARTED</a>
      </div>
    </div>
  );
}

export default PricingCard;
