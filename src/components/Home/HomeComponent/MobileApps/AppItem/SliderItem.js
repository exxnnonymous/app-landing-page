import React from "react";
import "./SliderItem.css";

function SliderItem(props) {
  return (
    <div className="item">
      <img src={props.imgUrl} alt="" />
    </div>
  );
}

export default SliderItem;
