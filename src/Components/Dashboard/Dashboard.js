import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../Hooks/useAdmin";
import auth from "../../Firebase/Firebase.init";

const DashBoard = () => {
  const [user,] = useAuthState(auth);
  const [admin,] = useAdmin(user);
  // console.log(admin);

  return (
    <>
      <div className="mx-auto px-2 lg:px-0">
        <div className="drawer drawer-mobile bg-slate-100" id="dashboard_dower">
          <input
            id="open-dashboard-menu"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content  flex flex-col" id="drawer">
            {/* <!-- Page content here --> */}
            {/* <ChevronRightIcon /> */}
            {/* fa-solid fa-square-arrow-right */}
            <div className="text-left mt-4 z-10">
              <label
                htmlFor="open-dashboard-menu"
                className="rounded inline-block cursor-pointer text-white lg:hidden z-50"
              >
                <span className="text-2xl bg-green-400 hover:bg-green-500 px-4 py-2 rounded ">
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>{" "}
              </label>
            </div>
            <div className="">
              <div className="text-left -mt-12 lg:-mt-4 w-full">

                {/* <div className="bg-[#0284C7] h-[500px] lg:-mr-3">
                  <div className="pt-20 flex justify-center">
                    <Count></Count>
                  </div> */}

                  <Outlet></Outlet>
                {/* </div> */}

              </div>
            </div>
          </div>
          <div className="drawer-side w-[180px]">
            <label
              htmlFor="open-dashboard-menu"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 overflow-y-auto  bg-slate-200 border-r-1 shadow-lg  text-zinc-800">
              {/* <!-- Sidebar content here --> */}
              {<li className="py-1 text-lg hover:bg-slate-300 rounded">
                <CustomLink className="" to={"/dashboard"}>
                  Dashboard
                </CustomLink>
              </li>}
              {admin && <li className="py-1 text-lg hover:bg-slate-300 rounded">
                <CustomLink className="" to={"/dashboard/booking"}>
                  Booking
                </CustomLink>
              </li>}
              {admin || <li className="py-1 text-lg hover:bg-slate-300 rounded">
                <CustomLink className="" to={"/dashboard/my-booking"}>
                  My Booking
                </CustomLink>
              </li>}
              {admin || <li className="py-1 text-lg hover:bg-slate-300 rounded">
                <CustomLink className="" to={"/dashboard/review"}>
                  My Review
                </CustomLink>
              </li>}
              {admin || <li className="py-1 text-lg hover:bg-slate-300 rounded">
                <CustomLink className="" to={"/dashboard/add-review"}>
                  Add Review
                </CustomLink>
              </li>}
              {admin && <li className="py-1 text-lg hover:bg-slate-300 rounded">
                <CustomLink className="" to={"/dashboard/total-user"}>
                  All Users
                </CustomLink>
              </li>}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
