import React from "react";
import CardPageVisits from "./CardPageVisits";
import CardSocialTraffic from "./CardSocialTraffic";
import Chart from "./Chart";

const MainChart = () => {
  return (
    <div>
      <Chart></Chart>
      <div className="grid lg:flex gap-2 ">
        <CardPageVisits></CardPageVisits>
        <CardSocialTraffic></CardSocialTraffic>
      </div>
    </div>
  );
};

export default MainChart;
