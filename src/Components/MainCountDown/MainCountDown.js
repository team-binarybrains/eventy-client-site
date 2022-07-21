import React from "react";
import CountDown from "../Home/CountDown/CountDown";

const MainCountDown = () => {
  return (
    <div>
      <div>
        <div className="grid md:grid-cols-2 bg-[#f8f9fa] mt-10 ">
          <div className="">
            <img src="https://i.ibb.co/dt1KrNy/deal-ofthe-week.png" alt="" />
          </div>
          <div className="text-center mt-20 pb-9">
            <h1 className="text-center  text-black font-bold  pt-8  mb-20 text-4xl uppercase  title_line" >
              Our Next Event
            </h1>
            <CountDown></CountDown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCountDown;
