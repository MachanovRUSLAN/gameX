import React from "react";
import "./categories.css";

function Categories() {
  return (
    <div className="bg-black">
      <div className="px-10 py-4 font-bold text-4xl text-white">Categories</div>
      <div className="grid lg:grid-cols-12 px-6">
        <div className="holographic-card col-span-3 m-4 relative">
          <img
            src="/src/assets/Imgs/gp-1.webp"
            alt=""
            className="w-full h-full  transition-transform duration-1500 ease-in-out hover:scale-125"
          />
          <div className="absolute text-center  bottom-6 left-[17%]">
            <h4 className="font-bold text-white text-3xl my-4">Rugbg Games</h4>
            <button
              title="button"
              className="p-2 bg-[#3cbc1c] text-white font-bold"
            >
              Shop Know
            </button>
          </div>
        </div>

        <div className="div relative m-4 col-span-3 holographic-card ">
          <img
            src="/src/assets/Imgs/gp-2.png"
            alt=""
            className="w-full h-full   transition-transform duration-1500 ease-in-out hover:scale-125"
          />
          <div className="absolute text-center  bottom-6 left-3/12">
            <h4 className="font-bold text-white text-3xl my-4">Rugbg Games</h4>
            <button
              title="button"
              className="p-2 bg-[#3cbc1c] text-white font-bold"
            >
              Shop Know
            </button>
          </div>
        </div>
        <div className="div relative m-4 col-span-3 holographic-card ">
          <img
            src="/src/assets/Imgs/gp-3.webp"
            alt=""
            className="w-full h-full   transition-transform duration-1500 ease-in-out hover:scale-125"
          />
          <div className="absolute text-center  bottom-6 left-3/12">
            <h4 className="font-bold text-white text-3xl my-4">Rugbg Games</h4>
            <button
              title="button"
              className="p-2 bg-[#3cbc1c] text-white font-bold"
            >
              Shop Know
            </button>
          </div>
        </div>
        <div className="div relative col-span-3 m-4 holographic-card ">
          <img
            src="/src/assets/Imgs/gp-4.webp"
            alt=""
            className="w-full h-full   transition-transform duration-1500 ease-in-out hover:scale-125"
          />
          <div className="absolute text-center  bottom-6 left-3/12">
            <h4 className="font-bold text-white text-3xl my-4">Rugbg Games</h4>
            <button
              title="button"
              className="p-2 bg-[#3cbc1c] text-white font-bold"
            >
              Shop Know
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
