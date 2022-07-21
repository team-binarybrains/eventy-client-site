import React from "react";
import MainCountDown from "../MainCountDown/MainCountDown";

import BestEvent from "./BestEvent/BestEvent";

const Home = () => {
  return (
    <div>
      <h1>this is home section</h1>
      <BestEvent></BestEvent>
      <MainCountDown></MainCountDown>
    </div>
  );
};

export default Home;
