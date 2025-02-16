import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ResMenu from "../ResponsiveMenu/ResMenu";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { counter } from "@fortawesome/fontawesome-svg-core";
import SearchInput from "../SearchInput/searchInput";
import LogReg from "../LoginReg/LogReg";

interface SearchProps {
  Open: () => void; // Function prop to close menu
}

const Navbar: React.FC<SearchProps> = ({ Open }) => {
  const [openLog, setOpenLog] = useState(false);

  const toggleOpenLogin = () => {
    setOpenLog(!openLog);
  };

  // statement managment for Responsive menu and Quantity of total products

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [quantity, setQuantity] = useState(0);
  // select Cart items from redux slice component
  const cartItems = useSelector((state: RootState) => state.counter.cartItems);

  useEffect(() => {
    // variable for total products
    // starting quantity from 0
    let total = 0;
    // and adding to total variable to your items
    cartItems.forEach((item) => (total += item.quantity));
    setQuantity(total);
  }, [cartItems]);

  // open and close responsive menu system
  const openBar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex justify-between items-center w-full p-4 relative">
      {/* Responsive Menu Button */}
      <div
        onClick={openBar}
        className="w-[50px] h-[50px] lg:hidden cursor-pointer"
      >
        <div className="w-full bg-[#3cbc1c] h-[3px]"></div>
        <div className="w-8 bg-[#3cbc1c] h-[3px] my-4"></div>
        <div className="w-10 bg-[#3cbc1c] h-[3px]"></div>
      </div>

      {/* Login Register part */}
      <div
        className={`${
          openLog ? "blok" : "hidden"
        } absolute left-0 top-0 w-full h-[100vh] z-30 backdrop-blur-lg bg-black-100/500`}
      >
        <LogReg openLogin={toggleOpenLogin} />
      </div>
      {/* Responsive Menu */}
      {openMenu && (
        <div className="absolute z-20 top-0 left-0 w-full h-[100vh]">
          <ResMenu closeMenu={openBar} />
        </div>
      )}

      {/* Navbar Logo */}
      <Link to="/">
        <div className="p-4 w-[200px] h-[40px] flex justify-center items-center lg:m-0 m-auto">
          <img
            src="/src/assets/Imgs/logo.wbpt.webp"
            alt="Logo"
            className="w-full"
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="bg-[#2c2d2f] rounded-tl-[30px] rounded-br-[30px] overflow-hidden z-50">
        <ul className="lg:flex hidden">
          <li className="p-4 hover:bg-[#3cbc1c] text-white font-bold">
            <Link to="/">HOME</Link>
          </li>
          <li className="p-4 hover:bg-[#3cbc1c] text-white font-bold group">
            <Link to="/shop">SHOP</Link>

            <div className="bg-[#2c2d2f] absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 bottom-[-110px] left-[40%] shadow-2xl">
              {/* dropdown menu */}
              <ul className="px-6]">
                <li className="p-2">PRODUCT</li>
                <li className="p-2">PRODUCT DETAIL</li>
                <li className="p-2">CART</li>
              </ul>
            </div>
          </li>
          <Link to="/aboutus">
            <li className="p-4 hover:bg-[#3cbc1c] text-white font-bold">
              ABOUT US
            </li>
          </Link>
          <Link to="/blogs">
            <li className="p-4 hover:bg-[#3cbc1c] text-white font-bold">
              BLOG
            </li>
          </Link>
          <Link to="/contactus">
            <li className="p-4 hover:bg-[#3cbc1c] text-white font-bold">
              CONTACT US
            </li>
          </Link>
        </ul>
      </div>

      {/* Search, Profile, Favorite, and Shopping Bag Icons */}
      <div className="left-part flex">
        {/* Search Icon AND open SearchBar */}
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={Open}
          className="text-white m-2 text-[25px]"
        />
        <div className="lg:flex hidden" onClick={toggleOpenLogin}>
          <FontAwesomeIcon
            icon={faUser}
            className="text-white m-2 text-[25px]"
          />
        </div>
        <Link to="/cart">
          <div className="lg:flex hidden">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-white m-2 text-[25px]"
            />
          </div>
        </Link>
        <div className="relative">
          {/* Shoping BAg and Link to Cart component */}
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="text-white m-2 text-[25px]"
            />
          </Link>
          <div className="absolute  top-0 left-0 text-green-500">
            {/* quantity of products */}
            {quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
