import React from "react";
import PricingCard from "./PricingItem/PricingCard";
import "./Pricing.css";

const pricingData = [
  {
    time: "2",
    price: "05",
    features: [
      "Increase traffic 50%",
      "E-mail support",
      "10 Free Optimization",
      "24/7 support",
    ],
  },
  {
    time: "2",
    price: "05",
    features: [
      "Increase traffic 50%",
      "E-mail support",
      "10 Free Optimization",
      "24/7 support",
    ],
  },
  {
    time: "2",
    price: "05",
    features: [
      "Increase traffic 50%",
      "E-mail support",
      "10 Free Optimization",
      "24/7 support",
    ],
  },
];

function Pricing() {
  return (
    <div className="pricing" id="pricing">
      <div
        className="pricing-background"
        style={{ background: "url('./images/pricing.webp')" }}
      >
        <div className="container">
          <div className="heading">
            <h1>Choose Your Very Best Pricing Plan.</h1>
          </div>
        </div>
      </div>

      <div className="container" id="container">
        <div className="pricing_card_container">
          {pricingData.map((data, index) => (
            <PricingCard
              key={index}
              time={data.time}
              price={data.price}
              features={data.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
