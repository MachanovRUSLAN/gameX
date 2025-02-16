import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import LogReg from "../LoginReg/LogReg";

// Define props type
interface ResMenuProps {
  closeMenu: () => void; // Function prop to close menu
}

const ResMenu: React.FC<ResMenuProps> = ({ closeMenu }) => {
  const [hide, setHide] = useState("Menu");

  const toggleHideComponent = () => {
    setHide((prev) => (prev === "Login" ? "Menu" : "Login"));
  };

  return (
    <div className="w-full h-full transition-all duration-300 bg-gray-700">
      {/* Header */}
      <div className="header grid grid-cols-12 w-full">
        <div
          className="col-span-6 bg-white flex justify-center items-center"
          onClick={() => setHide("Menu")}
        >
          <div className="p-4">MENU</div>
        </div>
        <div
          className="col-span-6 flex justify-center items-center bg-green-500"
          onClick={() => setHide("Login")}
        >
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <div>LOGIN</div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`${hide === "Login" ? "hidden" : "flex"}  flex-col`}>
        <Link to="/">
          <div onClick={closeMenu} className="py-4 px-2 text-[#3cbc1c]">
            HOME
          </div>
        </Link>
        <Link to="/shop">
          <div onClick={closeMenu} className="py-4 px-2 text-[#3cbc1c]">
            SHOP
          </div>
        </Link>
        <Link to="/aboutus">
          <div onClick={closeMenu} className="py-4 px-2 text-[#3cbc1c]">
            ABOUT US
          </div>
        </Link>
        <Link to="/blogs">
          <div onClick={closeMenu} className="py-4 px-2 text-[#3cbc1c]">
            BLOGS
          </div>
        </Link>
        <Link to="/contactus">
          <div onClick={closeMenu} className="py-4 px-2 text-[#3cbc1c]">
            CONTACT
          </div>
        </Link>
      </div>
      {/* Close Button */}
      <div>{hide === "Login" && <LogReg />}</div>
      <div
        onClick={closeMenu} // Close menu on click
        className="h-[40px] w-full bg-[#3cbc1c] flex justify-center items-center text-white font-bold cursor-pointer"
      >
        CLOSE
      </div>
    </div>
  );
};

export default ResMenu;
