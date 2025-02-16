import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faCartShopping,
  faFontAwesome,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LastesNews() {
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
    <div className="slider-container py-[120px] bg-black">
      <h2 className="ml-5 py-6 text-4xl font-bold text-white my-8">
        Lastes New
      </h2>
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div className="px-4">
          <div className="bg-[#2c2d2f] relative">
            <img src="/src/assets/Imgs/b-6_1024x1024.webp" alt="" />
            <div className="absolute top-6 left-6 text-green-500 font-bold text-2xl">
              News
            </div>

            <div className="absolute flex flex-col bottom-4  w-full px-6">
              <div className="font-bold  text-white">Sep 19/24</div>
              <div className="text-white font-bold text-xl">
                Uprage Your Console With These Pro Gaming Acesories
              </div>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="bg-[#2c2d2f] relative">
            <img src="/src/assets/Imgs/game.webp" alt="" />
            <div className="absolute top-6 left-6 text-green-500 font-bold text-2xl">
              News
            </div>

            <div className="absolute flex flex-col bottom-4  w-full px-6">
              <div className="font-bold  text-white">Sep 19/24</div>
              <div className="text-white font-bold text-xl">
                Uprage Your Console With These Pro Gaming Acesories
              </div>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="bg-[#2c2d2f] relative">
            <img src="/src/assets/Imgs/table.webp" alt="" />
            <div className="absolute top-6 left-6 text-green-500 font-bold text-2xl">
              News
            </div>

            <div className="absolute flex flex-col bottom-4  w-full px-6">
              <div className="font-bold  text-white">Sep 19/24</div>
              <div className="text-white font-bold text-xl">
                Uprage Your Console With These Pro Gaming Acesories
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default LastesNews;
