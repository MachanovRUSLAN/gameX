import React from "react";
import LogoPart from "../../Components/AboutLogoPart/LogoPart";
import HomeSider from "../../Components/HomeSlider/HomeSider";
import ResultYear from "../../Components/ResultYear/ResultYear";
import Testimonials from "../../Components/Testimonials/Testimonials";
import AboutHead from "../../Components/AboutHead/AboutHead";

function AboutUs() {
  return (
    <div>
        <AboutHead/>
      <HomeSider />
      <LogoPart />
      <ResultYear />
      <Testimonials />
    </div>
  );
}

export default AboutUs;
