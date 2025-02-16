import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
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
    <div className="slider-container py-14 px-4 bg-black">
      <div className="text-white ml-4 my-[60px] text-5xl font-bold">
        Testomania
      </div>
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div className="px-4">
          <div className="px-6 relative bg-[#2c2d2f] py-6">
            <div className="absolute right-0 top-0">
              <img src="/src/assets/Imgs/quote-icon.png" alt="" />
            </div>
            <div className="flex justify-start items-center">
              <div className="logo overflow-hidden rounded-[50%] border-2 w-[100px] border-amber-600">
                <img
                  className="w-full"
                  src="/src/assets/Imgs/u-2.avif"
                  alt=""
                />
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-white font-bold text-2xl">
                  Alexander Taylor
                </p>
                <div className="flex my-2">
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                </div>
              </div>
            </div>
          </div>

          <div className="py-2 text-white bg-[#2c2d2f] px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            labore rem sapiente error quo, obcaecati numquam optio deserunt
            quaerat consectetur accusamus laboriosam adipisci quos perspiciatis
            quidem beatae doloremque nobis vitae!
          </div>
        </div>

        <div className="px-4">
          <div className="px-6 relative bg-[#2c2d2f] py-6">
            <div className="absolute right-0 top-0">
              <img src="/src/assets/Imgs/quote-icon.png" alt="" />
            </div>
            <div className="flex justify-start items-center">
              <div className="logo overflow-hidden rounded-[50%] border-2 w-[100px] border-amber-600">
                <img
                  className="w-full"
                  src="https://gamerx-demo.myshopify.com/cdn/shop/files/u-1.png?v=1725798247"
                  alt=""
                />
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-white font-bold text-2xl">
                  Alexander Taylor
                </p>
                <div className="flex my-2">
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                </div>
              </div>
            </div>
          </div>

          <div className="py-2 text-white bg-[#2c2d2f] px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            labore rem sapiente error quo, obcaecati numquam optio deserunt
            quaerat consectetur accusamus laboriosam adipisci quos perspiciatis
            quidem beatae doloremque nobis vitae!
          </div>
        </div>


        <div className="px-4">
          <div className="px-6 relative bg-[#2c2d2f] py-6">
            <div className="absolute right-0 top-0">
              <img src="/src/assets/Imgs/quote-icon.png" alt="" />
            </div>
            <div className="flex justify-start items-center">
              <div className="logo overflow-hidden rounded-[50%] border-2 w-[100px] border-amber-600">
                <img
                  className="w-full"
                  src="/src/assets/Imgs/u-2.avif"
                  alt=""
                />
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-white font-bold text-2xl">
                  Alexander Taylor
                </p>
                <div className="flex my-2">
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                  <FontAwesomeIcon className="text-green-500" icon={faStar} />
                </div>
              </div>
            </div>
          </div>

          <div className="py-2 text-white bg-[#2c2d2f] px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            labore rem sapiente error quo, obcaecati numquam optio deserunt
            quaerat consectetur accusamus laboriosam adipisci quos perspiciatis
            quidem beatae doloremque nobis vitae!
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
