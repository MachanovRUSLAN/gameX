import React from "react";

function Contact() {
  return (
    <div className="grid lg:grid-cols-12 bg-black p-4 lg:gap-0 gap-10">
      <div className="col-span-4 flex justify-center items-center">
        <div className="p-5 text-white bg-[#2c2d2f]">
          123 Main Street, Anytown, USA.
        </div>
      </div>
      <div className="col-span-4 flex justify-center items-center">
        <div className="p-5 text-white bg-[#2c2d2f]">+1 233 898 0897</div>
      </div>
      <div className="col-span-4 flex justify-center items-center">
        <div className="p-5 text-white bg-[#2c2d2f]">help@example.com</div>
      </div>
    </div>
  );
}

export default Contact;
