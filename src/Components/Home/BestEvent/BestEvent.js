import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import Typed from 'react-typed';
import "react-tabs/style/react-tabs.css";
import "./BestEvent.css";
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
            <Tab>Last Week</Tab>
            <Tab>Las Month</Tab>
            <Tab>Las Year</Tab>
          </TabList>
          <TabPanel>
            <h2 className="text-4xl">Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BestEvent;