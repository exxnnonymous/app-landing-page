import React, { useState, useEffect } from "react";
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
  const [item, setItem] = useState(3)

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 550) {
      setItem(2)
    }
    else {
      setItem(3)
    }
  });

  useEffect(() => {

    if (window.innerWidth <= 550) {
      setItem(2)
    }
    else {
      setItem(3)
    }
  }, [])

  return (
    <div className="slider">
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay
        autoplayTimeout={3000}
        smartSpeed={1000}
        items={item}
        dots={false}
      >
        {sliderData.map((data, index) => (
          <SliderItem key={index} imgUrl={data.imgUrl} />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default Slider;
