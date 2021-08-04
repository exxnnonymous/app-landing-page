import React from "react";
import SliderItem from "./SliderItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Slider.css";

const sliderData = [
  { imgUrl: "./images/slider1.png" },
  { imgUrl: "./images/slider2.png" },
  { imgUrl: "./images/slider3.png" },
];

function Slider() {
  return (
    <div className="slider">
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay
        autoplayTimeout={3000}
        smartSpeed={1000}
      >
        {sliderData.map((data, index) => (
          <SliderItem key={index} imgUrl={data.imgUrl} />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default Slider;
