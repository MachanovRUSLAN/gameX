import React from "react";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import HomeSider from "../../Components/HomeSlider/HomeSider";
import Categories from "../../Components/Categories/Categories";
import Speedster from "../../Components/Speedster/Speedster";
import AutoPlayMethods from "../../Components/Accessories/Accessories";
import ResultYear from "../../Components/ResultYear/ResultYear";
import Testimonials from "../../Components/Testimonials/Testimonials";
import LastesNews from "../../Components/LastesNews/LastesNews";

function Home() {


  
  return (
    <>
      <HeaderHome />
      <HomeSider />
      <Categories />
      <Speedster />
      <AutoPlayMethods />
      <ResultYear />
      <Testimonials />
      <LastesNews />
    </>
  );
}

export default Home;
