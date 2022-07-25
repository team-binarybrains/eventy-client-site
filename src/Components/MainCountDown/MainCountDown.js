import React from "react";
import CountDown from "../Home/CountDown/CountDown";

const MainCountDown = () => {
  return (
    <div>
      <div className="px-4 lg:mt-20">
        <div className="grid md:grid-cols-2 bg-[#f8f9fa] mt-10 ">
          <div className="">
            <img src="https://i.ibb.co/ZdhRpq8/count-down.jpg" alt="" className="rounded-tl-[30px] rounded-br-[30px]" />
          </div>
          <div className="text-center lg:mt-20 pb-9">
            <h1 className="text-center text-black font-bold  pt-8  lg:mb-20 lg:text-4xl md:text-3xl text-[27px] uppercase  title_line" >
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
