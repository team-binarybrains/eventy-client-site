import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navebar.css";
import Button from "./Button";
import Avatar from "./Avatar";
import {
  faQuestionCircle,
  faBell,
  faBars,
  faTimes,
  faDashboard,
  faHome,
  faBox,
  faBlog,
  faCartShopping,
  faMobileAndroidAlt,
  faPhone,
  faVoicemail,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Login from "../Authentication/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";
import Profile from "../Dashboard/Profile/Profile";

const Navebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [user] = useAuthState(auth);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth);
    // localStorage.removeItem('accessToken')
  };

  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };
  const [loginModal, SetloginModal] = useState(null);

  const [currentStep, setCurrentStep] = useState(3);

  const [show, setShow] = useState("hidden");

  return (
    <div className="flex items-center sticky top-0 h-20 px-6 bg-[#BAD4B6] justify-between text-white  z-40">
      <Link to="/">
        <h2 className=" text-black text-4xl logo-1 ">EVENTY</h2>
      </Link>

      <div className="flex-1 justify-center items-center hidden lg:flex">
        <Link
          to="/"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faHome} className=" mr-2" />
          Home
        </Link>
        <Link
          to="/dashboard"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faDashboard} className=" mr-2" />
          Dashboard
        </Link>
        <Link
          to="/about-us"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faBox} className=" mr-2" />
          About Us
        </Link>

        <Link
          to="/blogs"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faBlog} className=" mr-2" />
          Blogs
        </Link>
        <Link
          to="/contact-us"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faEnvelope} className=" mr-2" />
          Contact Us
        </Link>
      </div>
      <div className="items-center hidden lg:flex ">
        <FontAwesomeIcon
          // onClick={handleGotocart}
          icon={faCartShopping}
          className="ml-6 text-2xl cursor-pointer text-gray-700"
        />

        <FontAwesomeIcon
          icon={faBell}
          className="ml-6 text-2xl cursor-pointer text-gray-700"
        />
        <span className="px-4 caret-black text-black text-2xl">|</span>
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div tabIndex="0" className=" m-1" onClick={() => {
                show === 'hidden' ? setShow('block') : setShow('hidden');
              }}>
                {user ? (
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                ) : (
                  <p className="text-2xl text-black rounded-full px-3 py-1 bg-white ">
                    {user?.displayName.slice(0, 1)}
                  </p>
                )}
              </div>

              <ul tabIndex="0" class={`dropdown-content menu p-2 shadow bg-white rounded-sm w-60 ${show} text-black text-center mt-4 -mr-5`}>

                <div className="grid gap-y-3 pt-7 pb-3">
                  <div className="bg-gray-200 grid justify-center p-4 rounded-sm">
                    <div className="flex justify-center -mt-10">
                    {user ? (
                      <img
                        src={user?.photoURL}
                        className="w-14 h-14 rounded-full"
                        alt=""
                      />
                    ) : (
                      <p className="text-3xl text-black rounded-full px-3 py-1 bg-white ">
                        {user?.displayName.slice(0, 1)}
                      </p>
                    )}
                    </div>
                    <div>
                      <p className="pt-3 ">{user.email}</p>
                    </div>
                  </div>

                  <Link to={`/manage-profile`} className='uppercase hover:text-gray-600'>Manage profile</Link>

                  <button onClick={handleSignOut} className='uppercase hover:text-gray-600'>Sign out</button>
                </div>

              </ul>
            </div>
          </>
        ) : (
          <label
            htmlFor="login-modal"
            className="text-gray-700 font-bold
          text-xl hover:text-gray-500 cursor-pointer ml-4"
          >
            Login
          </label>
        )}
      </div>

      <div className="ml-[13vh] md:ml-[40vh] lg:hidden">
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            class=" m-1"
            onClick={() => {
              show === "hidden" ? setShow("block") : setShow("hidden");
            }}
          >
            {/* <Avatar className="ml-3" size="base" image={user?.photoURL} status="online"/> */}

            {user ? (
              <img
                src={user?.photoURL}
                className="md:w-10 md:h-10 w-8 h-8 rounded-full"
                alt=""
              />
            ) : (
              <p className="text-2xl text-black rounded-full px-3 py-1 bg-white ">
                {user?.displayName.slice(0, 1)}
              </p>
            )}
          </div>

          <ul
            tabindex="0"
            class={`dropdown-content menu p-2 shadow ring-4 ring-black ring-opacity-50 bg-[#BAD4B6] rounded-sm w-52 ${show} text-black text-center mt-4 -mr-5`}
          >
            <button onClick={handleSignOut}>Sign out</button>
          </ul>
        </div>
      </div>

      <div className="">
        <FontAwesomeIcon
          icon={mobileOpen ? faTimes : faBars}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-black ml-[2vh] text-3xl cursor-pointer lg:hidden"
        />
      </div>

      {mobileOpen && (
        <div className=" absolute bg-slate-600 top-full left-0 flex flex-col w-full pb-8 lg:hidden">
          <div className="flex-1 flex  flex-col items-center text-xl">
            <Link
              to="/"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
          text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faHome} className=" mr-2 mt-6 " />
              Home
            </Link>

            <Link
              to="/products"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
          text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faBox} className=" mr-2 mt-6 " />
              About Us
            </Link>
            <Link
              to="/dashboard"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
          text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faDashboard} className=" mr-2 mt-6 " />
              Dashboard
            </Link>
            <Link
              to="/dashboard"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
          text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faDashboard} className=" mr-2 mt-6 " />
              Contact Us
            </Link>
            <div className="flex">
              {!user && (
                <label
                  htmlFor="login-modal"
                  className="text-gray-200 font-bold
                    text-xl hover:text-gray-500"
                >
                  Login
                </label>
              )}
            </div>
          </div>
        </div>
      )}
      <Login SetloginModal={SetloginModal}></Login>
    </div>
  );
};

export default Navebar;
