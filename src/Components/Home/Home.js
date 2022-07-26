import React from "react";
import MainCountDown from "../MainCountDown/MainCountDown";

import BestEvent from "./BestEvent/BestEvent";
import OurEmployer from "./OurEmployer/OurEmployer";
import Carusel from "./Carusel/Carusel";
import Gallery from "./Gallery/Gallery";
import OurServices from "./OurServices/OurServices";
import Sponser from "./Sponser/Sponser";
import Testimonail from "./Testimonial/Testimonial";
<<<<<<< HEAD
=======
import EventDetails from "./OurServices/EventDetails/EventDetails";
>>>>>>> 64536148262b238a3364f6b8cab0c7d62d12dd72

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
