import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import Typed from 'react-typed';
import "react-tabs/style/react-tabs.css";
import "./BestEvent.css";
import LasMonth from "./LasMonth/LasMonth";
import LasYear from "./LasYear/LasYear";
import ResentEvent from "./ResentEvent/ResentEvent";
const BestEvent = () => {
  const year = new Date().getFullYear();

  return (
    <div className='mt-24'>
      <h1 className="title_line text-center font-bold text-4xl uppercase ">
      {/* <Typed
                    className="text-4xl"
                    strings={["Abdullah"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  ></Typed> */}
        Our best events {year}</h1>
      <div className='mt-10'>
        <Tabs className="border-none grid justify-center">

          <TabList className="flex text-[10px] lg:text-lg md:text-lg md:pl-2 lg:pl-32 mt-7">
            <Tab><h1 className='uppercase'>Recent Event</h1></Tab>
            <Tab><h1 className='uppercase'>Last Month</h1> </Tab>
            <Tab><h1 className='uppercase'>Last Year</h1></Tab>
          </TabList>

          <TabPanel>
           <ResentEvent></ResentEvent>
          </TabPanel>

          <TabPanel>
          <LasMonth></LasMonth>
          </TabPanel>

          <TabPanel>
            <LasYear></LasYear>
          </TabPanel>

        </Tabs>
      </div>
    </div>
  );
};

export default BestEvent;