import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResultYear() {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container py-12 bg-black">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div className="px-4">
          <div className="bg-[#2c2d2f] relative py-16 flex flex-col items-center text-center">
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
              <img src="/src/assets/Imgs/service-icon.png" alt="" />
            </div>
            <h1 className="text-[#3cbc1c] text-4xl font-bold">12K</h1>
            <h3 className="text-white font-bold text-2xl">
              Satisfied Customers
            </h3>
          </div>
        </div>
        <div className="px-4">
          <div className="bg-[#2c2d2f] relative py-16 flex flex-col items-center text-center">
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
              <img src="/src/assets/Imgs/service-icon.png" alt="" />
            </div>
            <h1 className="text-[#3cbc1c] text-4xl font-bold">1.5K</h1>
            <h3 className="text-white font-bold text-2xl">Game Collection</h3>
          </div>
        </div>
        <div className="px-4">
          <div className="bg-[#2c2d2f] relative py-16 flex flex-col items-center text-center">
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
              <img src="/src/assets/Imgs/service-icon.png" alt="" />
            </div>
            <h1 className="text-[#3cbc1c] text-4xl font-bold">98%</h1>
            <h3 className="text-white font-bold text-2xl">Our Rating</h3>
          </div>
        </div>
        <div className="px-4">
          <div className="bg-[#2c2d2f] relative py-16 flex flex-col items-center text-center">
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
              <img src="/src/assets/Imgs/service-icon.png" alt="" />
            </div>
            <h1 className="text-[#3cbc1c] text-4xl font-bold">20</h1>
            <h3 className="text-white font-bold text-2xl">
              Year Of Experience
            </h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ResultYear;
