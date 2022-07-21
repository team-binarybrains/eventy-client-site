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
    <div className='mt-10'>
      <h1 className="gradient-color-text text-center font-bold text-4xl">
      {/* <Typed
                    className="text-4xl"
                    strings={["Abdullah"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  ></Typed> */}
        Our best events {year}</h1>
      <div className='mt-10'>
        <Tabs className="border-none">
          <TabList className="border-none text-center">
            <Tab><p className='text-4xl font-serif'>Recent Event</p></Tab>
            <Tab><p className='text-4xl font-serif'>Last Month</p> </Tab>
            <Tab><p className='text-4xl font-serif'>Last Year</p></Tab>
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