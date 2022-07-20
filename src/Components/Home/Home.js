import React from "react";
import BestEvent from "./BestEvent/BestEvent";
import CountDown from "./CountDown/CountDown";

const Home = () => {
  return (
    <div>
      <h1>this is home section</h1>
      <BestEvent></BestEvent>

      <div>
        <div className="grid md:grid-cols-2 bg-[#f8f9fa] mt-10 ">
          <div className="">
            <img src="https://i.ibb.co/dt1KrNy/deal-ofthe-week.png" alt="" />
          </div>
          <div className="grid justify-center mt-[10] mb-4 pb-9">
            <h1 className="text-center text-2xl text-green-400 font-bold  p-8">
              hello
            </h1>
            <CountDown></CountDown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
