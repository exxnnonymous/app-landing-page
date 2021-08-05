import React from "react";
import { Link } from "react-router-dom"
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
        <Link className="btn">GET STARTED</Link>
      </div>
    </div>
  );
}

export default PricingCard;
