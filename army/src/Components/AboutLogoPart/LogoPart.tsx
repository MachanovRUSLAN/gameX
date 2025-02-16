import React from "react";

function LogoPart() {
  return (
    <div className="grid lg:grid-cols-12 bg-black">
      <div className="col-span-4 flex justify-center  items-center flex-col">
        <div className="text-white">
          <p className="font-bold text-2xl">
            Immerse Yourself in the Gaming Experience
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tristique potenti est
            integer egestas enim pellentesque scelerisque vitae velit. Mauris
            eget massa egestas diam pretium. Lorem ipsum dolor sit amet
            consectetur. Mauris sit non turpis orci at molestie. Ut nunc nec a
            maecenas augue ut mauris.
          </p>
        </div>
      </div>
      <div className="col-span-4">
        <img src="/src/assets/Imgs/filter.webp" alt="" />
      </div>
      <div className="col-span-4 flex justify-center items-center">
        <div className="text-white">
          <p className="font-bold text-2xl">
            Beyond Boundaries: Where Gaming Dreams Come True
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Diam nunc donec tempor nisi
            massa diam. Hac felis fringilla dignissim proin pellentesque eu
            neque integer. Eu sapien quis ut molestie lectus faucibus. Lorem
            ipsum dolor sit amet consectetur. In blandit sit semper amet.
            Aliquam lacus sed aenean consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogoPart;
