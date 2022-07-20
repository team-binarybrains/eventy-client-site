import React from "react";
import OurEmployer from "./OurEmployer/OurEmployer";
import Carusel from "./Carusel/Carusel";
import Gallery from "./Gallery/Gallery";
import OurServices from "./OurServices/OurServices";
import Sponser from "./Sponser/Sponser"
import Testimonail from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <OurEmployer/>
      <Carusel></Carusel>
      <Gallery></Gallery>
      <OurServices></OurServices>
      <Sponser></Sponser>
      <Testimonail></Testimonail>
    </div>
  );
};

export default Home;
