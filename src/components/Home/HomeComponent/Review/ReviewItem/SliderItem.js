import React from "react";
import "./SliderItem.css";

function SliderItem(props) {
  return (
    <div className="review-card">
      <img src={props.imgUrl} className="review-img" alt="" />
      <h1>{props.title}</h1>
      <p>{props.caption}</p>
    </div>
  );
}

export default SliderItem;
