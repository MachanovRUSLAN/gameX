import React from "react";
import { Link } from "react-router";

function FooterMain() {
  return (
    <div className="py-6 bg-black px-6">
      <div className="grid lg:grid-cols-12 grid-cols-3 lg:text-start text-center">
        <div className="logo-part col-span-3">
          <img
            src="/src/assets/Imgs/logo.wbpt.webp"
            className="lg:m-0 m-auto"
            alt=""
          />
          <div className="text-white my-4 font-bold">
            Sophisticated simplicity for the independent mind.
          </div>
        </div>

        <div className="col-span-3">
          <div className="text-white font-bold text-xl lg:my-0 my-2">
            Quick Links
          </div>
          <hr className="w-[30px] text-black bg-white my-2 h-[4px] lg:block hidden" />
          <ul className="text-white">
            <Link to="/">
              <li className="my-2">Home</li>
            </Link>
            <Link to="/shop">
              <li className="my-2">Shop</li>
            </Link>
            <Link to="/contactus">
              <li className="my-2">Contact Us</li>
            </Link>
            <Link to="/aboutus">
              <li className="my-2">About Us</li>
            </Link>
          </ul>
        </div>

        <div className="col-span-3">
          <div className="text-white font-bold text-xl lg:my-0 my-2">
            Genres
          </div>
          <hr className="w-[30px] text-black bg-white my-2 h-[4px] lg:block hidden" />
          <Link to="/">
            <ul className="text-white">
              <li className="my-2">PUBG MOBILE</li>
              <li className="my-2">CODE 2</li>
              <li className="my-2">CS GO</li>
              <li className="my-2">PUBG MOBILE</li>
            </ul>
          </Link>
        </div>

        <div className="col-span-3">
          <div className="text-white font-bold text-xl lg:my-0 my-2">
            Categories
          </div>
          <hr className="w-[30px] text-white my-2 h-[4px] bg-white lg:block hidden" />
          <Link to="/shop">
            <ul className="text-white">
              <li className="my-2"> Virtual Reality</li>
              <li className="my-2">First-Person Shooter</li>
              <li className="my-2">Strategy</li>
              <li className="my-2">Role-Playing</li>
            </ul>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterMain;
