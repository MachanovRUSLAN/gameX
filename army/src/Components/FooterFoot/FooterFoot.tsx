import React from "react";

function FooterFoot() {
  return (
    <div className="border-t-1 bg-black lg:text-start text-center p-4 border-t-amber-50 flex flex-wrap justify-between items-center">
      <div className="text-white">
        © Copyright 2024 | GamerxStore By UiParadox. Powered by Shopify.
      </div>
      <div className="lg:m-0 m-auto">
        <img src="/src/assets/Imgs/pay_copyright.webp" alt="" />
      </div>
    </div>
  );
}

export default FooterFoot;
