import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="col">
      <div className="features_item">
        <div className="features_icon">
          <span className={props.icon}></span>
        </div>
        <div className="features_caption">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
