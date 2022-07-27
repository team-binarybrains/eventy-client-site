import React from "react";
import MainCountDown from "../MainCountDown/MainCountDown";

import BestEvent from "./BestEvent/BestEvent";
import OurEmployer from "./OurEmployer/OurEmployer";
import Carusel from "./Carusel/Carusel";
import Gallery from "./Gallery/Gallery";
import OurServices from "./OurServices/OurServices";
import Sponser from "./Sponser/Sponser";
import Testimonail from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Carusel></Carusel>
      <BestEvent></BestEvent>
      <MainCountDown></MainCountDown>
      <Gallery></Gallery>
      <OurServices></OurServices>
      <OurEmployer />
      <Sponser></Sponser>
      <Testimonail></Testimonail>
    </div>
  );
};

export default Home;
