import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./HeaderHome.css";
import { Link } from "react-router";
import LogReg from "../LoginReg/LogReg";

function HeaderHome() {

  return (
    <div className="slide grid grid-cols-1 md:grid-cols-12  bg-[url(/src/assets/Imgs/bgslide.webp)] bg-center bg-cover bg-no-repeat relative p-4">
      {/* First Container */}
   
      <div className="md:col-span-6  z-10 flex justify-center flex-col">
        <h1 className="text-2xl font-bold font-sans text-[#3cbc1c]">
          Gaming Zone
        </h1>
        <h2 className="text-5xl font-sans font-bold text-white my-2">
          Immerse Yourself In The
          <br /> Gamiong Experience
        </h2>
        <p className="text-white my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          deserunt autem debitis, ad praesentium sed laborum recusandae
        </p>
        <Link to="/shop">
          <button
            title="Button"
            className="bg-[#3cbc1c] text-white font-bold p-2 w-[200px] flex items-center justify-center gap-2 hover:bg-white hover:text-[#3cbc1c] border-2 border-[#3cbc1c] transition-all duration-300"
          >
            SHOP NOW
            <span className="hover:text-[#3cbc1c]">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </button>
        </Link>
      </div>
      {/* Seacond Container With Image */}
      <div className="md:col-span-6 sm:col-span-12 z-10">
        <img src="/src/assets/Imgs/hero.webp" alt="" />
      </div>
    </div>
  );
}

export default HeaderHome;

// For background Image we used Seperate css file
