import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="col">
      <div className={props.id === 1 ? "service_card active" : "service_card"}>
        <div className="service_icon">
          <span className={props.icon + " icon"}></span>
        </div>
        <h2>{props.title}</h2>
        <p>{props.caption}</p>
      </div>
    </div>
  );
}

export default Card;
