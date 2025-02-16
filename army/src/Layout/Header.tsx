import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { fas } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../Components/SearchInput/searchInput";

function Header() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const openToggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className="bg-[#0d0d0d] sticky top-0 z-[999]">
      {openSearch && (
        <div className="w-full h-full top-0 left-0 z-[999] transition-all duration-1000 ease-in-out">
          {/* Searching Input is Here */}
          <SearchInput Open={openToggleSearch} />
        </div>
      )}

      <Navbar Open={openToggleSearch} />
    </div>
  );
}

export default Header;
