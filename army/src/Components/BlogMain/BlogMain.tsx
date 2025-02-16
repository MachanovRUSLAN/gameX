import React from "react";
import blogData from "../../BlogsData/blogsData";

function BlogMain() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 bg-black p-5">
      {blogData.map((item, id) => (
        <div className="col-span-4" key={id}>
          <div className="bg-[#2c2d2f] relative">
            <img src={item.img} alt="" />
            <div className="absolute top-6 left-6 text-green-500 font-bold text-2xl">
              News
            </div>

            <div className="absolute flex flex-col bottom-4  w-full px-6">
              <div className="font-bold  text-white">Sep 19/24</div>
              <div className="text-white font-bold text-xl">
                Uprage Your Console With These Pro Gaming Acesories
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogMain;
