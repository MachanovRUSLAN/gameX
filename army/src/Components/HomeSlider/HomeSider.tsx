import React from "react";
 
import "./Slider.css";

import Slider from "react-slick";


function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container bg-black py-[80px] px-2">
      <Slider {...settings}>
        <div>
          <img src="/src/assets/Imgs/brand-01.webp" alt="" />
        </div>
        <div>
          <img src="/src/assets/Imgs/brand-02.avif" alt="" />
        </div>
        <div>
          <img src="/src/assets/Imgs/brand-03 (1).avif" alt="" />
        </div>
        <div>
          <img src="/src/assets/Imgs/brand-04.webp" alt="" />
        </div>
        <div>
          <img src="/src/assets/Imgs/brand-05.webp" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
