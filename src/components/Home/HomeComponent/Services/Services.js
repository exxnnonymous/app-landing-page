import React from "react";
import Card from "./ServiceItem/Card";
import "./Services.css";

const cardData = [
  {
    title: "Easily Manage",
    icon: "flaticon-approved",
    caption:
      "Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
  },
  {
    title: "Get Payments Easily",
    icon: "flaticon-business-and-finance",
    caption:
      "Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
  },
  {
    title: "Quick Messaging",
    icon: "flaticon-paper-plane",
    caption:
      "Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
  },
];

function Services() {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="heading">
          <h1>How Can We HelpYour <br /> with Appco!</h1>
        </div>
        <div className="card_row">
          {cardData.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              caption={data.caption}
              icon={data.icon}
              id={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
