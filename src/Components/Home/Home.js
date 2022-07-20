import React from "react";
import Carusel from "./Carusel/Carusel";
import Gallery from "./Gallery/Gallery";
import OurServices from "./OurServices/OurServices";
import Sponser from "./Sponser/Sponser"
import Testimonail from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Carusel></Carusel>
      <Gallery></Gallery>
      <OurServices></OurServices>
      <Sponser></Sponser>
      <Testimonail></Testimonail>
    </div>
  );
};

export default Home;
