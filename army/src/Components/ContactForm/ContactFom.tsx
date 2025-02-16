import React from "react";

function ContactFom() {
  return (
    <div className="bg-black py-10">
      <div className="text-center p-10 bg-black">
        <div className="font-bold text-5xl my-4 text-white">
          ContacForm
          <hr className="mx-auto my-2 w-[40px] h-[2px] bg-white" />
        </div>
      </div>
      <div className="lg:w-[80%] m-auto">
        <div className="lg:flex gap-5">
          <div className="lg:w-1/2 w-full bg-[#2c2d2f]">
            <input
              type="text"
              placeholder="Name"
              title="input"
              className="w-full px-3  h-[50px] text-white font-bold"
            />
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-4 w-full bg-[#2c2d2f] h-[50px]">
            <input
              type="text"
              placeholder="Email"
              title="input"
              className="w-full h-full  text-white font-bold px-3"
            />
          </div>
        </div>
        <div className="w-full bg-[#2c2d2f] my-5">
          <textarea
            title="text"
            className="w-full px-4 text-white font-bold"
            placeholder="Text Your Message..."
          ></textarea>
        </div>
        <button
          title="submit"
          className="w-full h-[60px] font-bold text-white bg-[#3cbc1c]"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default ContactFom;
