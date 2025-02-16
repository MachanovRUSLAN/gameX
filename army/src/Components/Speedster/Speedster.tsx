import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Speedster() {
  return (
    <div className="py-12 bg-black">
      <div
        className="flex flex-col justify-center items-center
  bg-[url(/src/assets/Imgs/coming-soon-banner.webp)] w-full h-[100vh] 
  bg-cover bg-center relative bg-black
"
      >
        <div>
          <div className="text-2xl text-white font-bold">Recent Release</div>
          <div className="text-4xl text-[#3cbc1c] font-bold my-2">
            Speedster Showdown
          </div>
          <p className="my-4 text-white">
            Lorem ipsum dolor sit amet consectetur. Nascetur duis a sed
            fermentum. Netus nulla augue
            <br /> velit mus nibh faucibus eu. Vitae fusce bibendum.
          </p>
          <button
            title="Button"
            className="bg-[#3cbc1c] text-white font-bold p-2 w-[200px] flex items-center justify-center gap-2 hover:bg-white hover:text-[#3cbc1c] border-2 border-[#3cbc1c] transition-all duration-300"
          >
            SHOP NOW
            <span className="hover:text-[#3cbc1c]">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Speedster;
