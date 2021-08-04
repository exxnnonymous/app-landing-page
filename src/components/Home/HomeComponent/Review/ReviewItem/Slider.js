import React, { useState, useEffect } from "react";
import SliderItem from "./SliderItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Slider.css";

const reviewsData = [
  {
    imgUrl: "./images/review1.webp",
    title: "Welcome To The Best Model Winner Contest",
    caption:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita animi deleniti facere commodi at distinctio nobis eius veniam, repudiandae recusandae.",
  },
  {
    imgUrl: "./images/review2.webp",
    title: "Welcome To The Best Model Winner Contest",
    caption:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita animi deleniti facere commodi at distinctio nobis eius veniam, repudiandae recusandae.",
  },
  {
    imgUrl: "./images/review3.webp",
    title: "Welcome To The Best Model Winner Contest",
    caption:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita animi deleniti facere commodi at distinctio nobis eius veniam, repudiandae recusandae.",
  },
  {
    imgUrl: "./images/review1.webp",
    title: "Welcome To The Best Model Winner Contest",
    caption:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita animi deleniti facere commodi at distinctio nobis eius veniam, repudiandae recusandae.",
  },
  {
    imgUrl: "./images/review2.webp",
    title: "Welcome To The Best Model Winner Contest",
    caption:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita animi deleniti facere commodi at distinctio nobis eius veniam, repudiandae recusandae.",
  },
  {
    imgUrl: "./images/review3.webp",
    title: "Welcome To The Best Model Winner Contest",
    caption:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita animi deleniti facere commodi at distinctio nobis eius veniam, repudiandae recusandae.",
  },
];

function Slider() {

  const [itemCount, setItemCount] = useState(3)

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 700) {
      setItemCount(1)
    }
    else if (window.innerWidth <= 1000) {
      setItemCount(2)
    }
    else if (window.innerWidth >= 1024) {
      setItemCount(3)
    }
  });

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setItemCount(1)
    }
    else if (window.innerWidth <= 1000) {
      setItemCount(2)
    }
    else if (window.innerWidth >= 1024) {
      setItemCount(3)
    }
  }, [])


  return (
    <div className="review-slider">
      <OwlCarousel className="owl-theme" dotsEach={true} items={itemCount}>
        {reviewsData.map((data, index) => (
          <SliderItem
            key={index}
            imgUrl={data.imgUrl}
            title={data.title}
            caption={data.caption}
          />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default Slider;
