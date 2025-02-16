import React from "react";

// HeadPage components for Shop Page 

function ShopHead() {
  return (
    <div className="text-center p-10 bg-black">
      <div className="font-bold text-5xl text-white">Products</div>
      <div className="font-bold text-xl my-4 text-white">
        Home {`>`} Products
      </div>
    </div>
  );
}

export default ShopHead;
