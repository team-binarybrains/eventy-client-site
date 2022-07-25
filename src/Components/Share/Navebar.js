import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navebar.css";
import Button from "./Button";
import Avatar from "./Avatar";
import { faQuestionCircle, faBell, faBars, faTimes, faDashboard, faHome, faBox, faBlog, faCartShopping, faMobileAndroidAlt, } from "@fortawesome/free-solid-svg-icons";
import Login from "../Authentication/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";


const Navebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
    // localStorage.removeItem('accessToken')
  }

  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };
  const [loginModal, SetloginModal] = useState(null);
  return (
    <div className="flex items-center sticky top-0 h-20 px-6 bg-[#BAD4B6] justify-between text-white  z-40">
      <h2 className=" text-black text-4xl logo-1 ">EVENTY</h2>

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
          to="/contact-us"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faBlog} className=" mr-2" />
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
        {user ? (<>
          <div class="dropdown dropdown-end">
            <Avatar
              tabindex="0"
              className="ml-3 dropdown dropdown-end"
              size="base"
              image={user?.image}
              status="online" />
            <ul tabindex="0" class="text-black dropdown-content menu p-2 shadow bg-base-100 rounded-sm mt-4 -mr-5 w-60">
              <button onClick={handleSignOut}>Sign out</button>
            </ul>
          </div>
        </>
        ) : (
          <label
            for="login-modal"
            className="text-gray-700 font-bold
          text-xl hover:text-gray-500 cursor-pointer ml-4"
          >
            Login
          </label>
        )}
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-black ml-[45vw] md:ml-[70vw] text-3xl cursor-pointer lg:hidden"
      />
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
              <Button
                // onClick={logout}
                className=" text-gray-200 bg-red-500 border-0 bottom-1
                    mt-6 hover:bg-white hover:text-black"
                text="Sign Out"
                size="sm"
              />

              <label
                for="login-modal"
                className="text-gray-700 font-bold
                    text-xl hover:text-gray-500"
              >
                Login
              </label>
              <Button
                // onClick={handlelogin}
                className=" text-gray-200 bg-transparent bottom-1 border-gray-200 mt-6 hover:text-green-400 cursor-pointer"
                text="Login"
                size="sm"
              />
              {/* <span className="px-4 mt-5 text-3xl text-white caret-black ">
                |
              </span> */}
            </div>
            {/* <div className="my-5  flex justify-center">
            <FontAwesomeIcon
              onClick={handleGotocart}
              icon={faCartShopping}
              className="text-2xl mx-2 cursor-pointer"
            />
            <div className="badge badge-sm ">{carts.length}</div>
            <FontAwesomeIcon
              icon={faBell}
              className="text-2xl mx-2 cursor-pointer mb-3"
            />
          </div>
          {user ? (
            <Avatar
              className="ml-3"
              size="base"
              image={user?.image}
              status="online"
            />
          ) : (
            <Avatar
              className="ml-3"
              size="base"
              image={user?.image}
              status="busy"
            />
          )} */}
          </div>
        </div>
      )}
      <Login SetloginModal={SetloginModal}></Login>
    </div>
  );
};

export default Navebar;
