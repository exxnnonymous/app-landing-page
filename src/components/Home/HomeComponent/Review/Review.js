import React from "react";
import Slider from "./ReviewItem/Slider";
import "./Review.css";

function Review() {
  return (
    <div className="reviews">
      <div className="container">
        <div className="heading">
          <h1>
            What Our Customers <br /> Have to Say
          </h1>
        </div>

        <div className="reviews_container">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Review;
