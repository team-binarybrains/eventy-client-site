import React from "react";
import Carusel from "./Carusel/Carusel";
import Gallery from "./Gallery/Gallery";
import Sponser from "./Sponser/Sponser";
import Testimonail from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Carusel></Carusel>
      <Gallery></Gallery>
      <Sponser></Sponser>
      <Testimonail></Testimonail>
    </div>
  );
};

export default Home;
