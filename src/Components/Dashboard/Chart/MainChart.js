import React from "react";
import Count from "../Coutn/Count";
import CardPageVisits from "./CardPageVisits";
import CardSocialTraffic from "./CardSocialTraffic";
import Chart from "./Chart";

const MainChart = () => {
  return (
    <div className="grid justify-center">

      <div className="text-left">

        <div className="bg-[#0284C7] h-[500px] lg:-mr-3 lg:w-[1650px]">
          <div className="lg:pt-20 pt-3 flex justify-center">
            <Count></Count>
          </div>

        </div>
      </div>

      <div className="lg:-mt-[450px] mt-3 lg:px-7">
        <Chart></Chart>
        <div className="grid lg:flex justify-center gap-2 overflow-x-hidden">
          <CardPageVisits></CardPageVisits>
          <CardSocialTraffic></CardSocialTraffic>
        </div>
      </div>
    </div>
  );
};

export default MainChart;
