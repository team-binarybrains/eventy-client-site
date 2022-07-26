import React from 'react';
import {Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Dashboard.css'
// for hero icon 
// import { ChevronRightIcon } from '@heroicons/react/solid'

const DashBoard = () => {

  return (
    <>
      <div className="mx-auto px-2 lg:px-0">
        <div className="drawer drawer-mobile bg-slate-200">
          <input id="open-dashboard-menu" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  flex flex-col">
            {/* <!-- Page content here --> */}
            {/* <ChevronRightIcon /> */}
            <div className="text-left mt-4 ">
              <label htmlFor="open-dashboard-menu" className="w-10 rounded h-10 inline-block cursor-pointer bg-blue-500 hover:bg-blue-800 text-white lg:hidden"><span>x</span> </label>
            </div>
            <div className="text-center ">
              <div id="header" className='py-6'>
                {/* <h1 className='text-4xl font-bold font-serif text-slate-300'>Dash Board </h1> */}
              </div>
              <div className="text-left px-3">
                <Outlet></Outlet>
              </div>
            </div>

          </div>
          <div className="drawer-side">
            <label htmlFor="open-dashboard-menu" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-slate-100 border-r-1 shadow-lg  text-zinc-800">
              {/* <!-- Sidebar content here --> */}
              <li className='py-1 text-lg hover:bg-slate-300 rounded'><CustomLink className='' to={'/dashboard'}>Booking</CustomLink></li>
              <li className='py-1 text-lg hover:bg-slate-300 rounded'><CustomLink className='' to={'/dashboard/my-booking'}>My Booking</CustomLink></li>
              <li className='py-1 text-lg hover:bg-slate-300 rounded'><CustomLink className='' to={'/dashboard/review'}>Review</CustomLink></li>
              <li className='py-1 text-lg hover:bg-slate-300 rounded'><CustomLink className='' to={'/dashboard/add-review'}>Add Review</CustomLink></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
