import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faCartShopping,
  faFontAwesome,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

function AutoPlayMethods() {
  const [heart, setHeart] = useState(false);

  // when you click heart icon changing color and back
  const toggleClickHeart = () => {
    setHeart(!heart);
  };

  // slide coming from React Stick lib
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="slider-container py-8 bg-black">
      <h2 className="ml-5 py-6 text-4xl font-bold text-white">Accessories</h2>
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div className="px-4">
          <div className="bg-[#2c2d2f] relative">
            <Link to="/shop">
              <div className="p-[70px]">
                <img
                  src="https://gamerx-demo.myshopify.com/cdn/shop/files/pro-04.png?v=1725869213"
                  alt=""
                />
              </div>
            </Link>
            <div className="absolute top-6 left-6 text-white font-bold text-2xl">
              RazorFire Trupm Grips
            </div>
            <div
              onClick={toggleClickHeart}
              className={`${
                heart ? "text-green-500" : "text-white"
              } absolute top-2 right-6 text-2xl`}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="absolute flex justify-between items-center bottom-4  w-full px-6">
              <div className="font-bold text-2xl text-white">$19.66</div>
              <button
                title="Button"
                className="bg-[#3cbc1c] text-white font-bold p-2 w-[160px] flex items-center justify-center gap-2 hover:bg-white hover:text-[#3cbc1c] border-2 border-[#3cbc1c] transition-all duration-300"
              >
                SHOP NOW
                <span className="hover:text-[#3cbc1c]">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="bg-[#2c2d2f]  relative">
            <Link to="/shop">
              <div className="p-[70px]">
                <img
                  src="https://gamerx-demo.myshopify.com/cdn/shop/files/pro-07.png?v=1725869086"
                  alt=""
                />
              </div>
            </Link>
            <div className="absolute top-6 left-6 text-white font-bold text-2xl">
              RazorFire Trupm Grips
            </div>
            <div
              onClick={toggleClickHeart}
              className={`${
                heart ? "text-green-500" : "text-white"
              } absolute top-2 right-6 text-2xl`}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="absolute flex justify-between items-center bottom-4  w-full px-6">
              <div className="font-bold text-2xl text-white">$19.66</div>
              <button
                title="Button"
                className="bg-[#3cbc1c] text-white font-bold p-2 w-[160px] flex items-center justify-center gap-2 hover:bg-white hover:text-[#3cbc1c] border-2 border-[#3cbc1c] transition-all duration-300"
              >
                SHOP NOW
                <span className="hover:text-[#3cbc1c]">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="bg-[#2c2d2f] relative">
            <Link to="/shop">
              <div className="p-[70px]">
                <img
                  src="https://gamerx-demo.myshopify.com/cdn/shop/files/p-02.png?v=1725869724"
                  alt=""
                />
              </div>
            </Link>
            <div className="absolute top-6 left-6 text-white font-bold text-2xl">
              RazorFire Trupm Grips
            </div>
            <div
              onClick={toggleClickHeart}
              className={`${
                heart ? "text-green-500" : "text-white"
              } absolute top-2 right-6 text-2xl`}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="absolute flex justify-between items-center bottom-4  w-full px-6">
              <div className="font-bold text-2xl text-white">$19.66</div>
              <button
                title="Button"
                className="bg-[#3cbc1c] text-white font-bold p-2 w-[160px] flex items-center justify-center gap-2 hover:bg-white hover:text-[#3cbc1c] border-2 border-[#3cbc1c] transition-all duration-300"
              >
                SHOP NOW
                <span className="hover:text-[#3cbc1c]">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="bg-[#2c2d2f] relative">
            <Link to="/shop">
              <div className="p-[70px]">
                <img src="/src/assets/Imgs/pro-08.webp" alt="" />
              </div>
            </Link>
            <div className="absolute top-6 left-6 text-white font-bold text-2xl">
              RazorFire Trupm Grips
            </div>
            <div
              onClick={toggleClickHeart}
              className={`${
                heart ? "text-green-500" : "text-white"
              } absolute top-2 right-6 text-2xl`}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="absolute flex justify-between items-center bottom-4  w-full px-6">
              <div className="font-bold text-2xl text-white">$19.66</div>
              <button
                title="Button"
                className="bg-[#3cbc1c] text-white font-bold p-2 w-[160px] flex items-center justify-center gap-2 hover:bg-white hover:text-[#3cbc1c] border-2 border-[#3cbc1c] transition-all duration-300"
              >
                SHOP NOW
                <span className="hover:text-[#3cbc1c]">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="bg-[#2c2d2f] relative">
            <Link to="/shop">
              <div className="p-[70px]">
                <img
                  src="https://gamerx-demo.myshopify.com/cdn/shop/files/p-01.png?v=1725869756"
                  alt=""
                />
              </div>
            </Link>
            <div className="absolute top-6 left-6 text-white font-bold text-2xl">
              RazorFire Trupm Grips
            </div>
            <div
              onClick={toggleClickHeart}
              className={`${
                heart ? "text-green-500" : "text-white"
              } absolute top-2 right-6 text-2xl`}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="absolute flex justify-between items-center bottom-4  w-full px-6">
              <div className="font-bold text-2xl text-white">$19.66</div>
              <button
                title="Button"
                className="bg-[#3cbc1c] text-white font-bold p-2 w-[160px] flex items-center justify-center gap-2 hover:bg-white hover:text-[#3cbc1c] border-2 border-[#3cbc1c] transition-all duration-300"
              >
                SHOP NOW
                <span className="hover:text-[#3cbc1c]">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default AutoPlayMethods;
