import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navebar.css";
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
} from "@fortawesome/free-solid-svg-icons";
const Navebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center sticky top-0 h-20 px-6 bg-[#BAD4B6] justify-between text-white  z-40">
      <h2 className=" text-black text-4xl logo">EVENTY</h2>

      <div className="flex-1 justify-center items-center hidden lg:flex">
        <Link
          to="/"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faHome} className=" mr-2" />
          Home
        </Link>
        <Link
          to="/dashboard"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faDashboard} className=" mr-2" />
          Dashboard
        </Link>
        <Link
          to="/about-us"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faBox} className=" mr-2" />
          About Us
        </Link>

        <Link
          to="/contact-us"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faBlog} className=" mr-2" />
          Cantact Us
        </Link>
      </div>
      {/* <div className="items-center hidden lg:flex">
      {user ? (
        <Button
          onClick={logout}
          className=" text-black bg-red-600 bottom-1 border-0 hover:bg-white hover:text-black"
          text="Sign out"
          size="sm"
        />
      ) : (
        <Button
          onClick={handlelogin}
          className=" text-black bg-transparent bottom-1   hover:bg-white hover:text-black"
          text="Log in"
          size="sm"
        />
      )}
      <span className="px-4 caret-black text-black">|</span>
      <Button
        onClick={handleRegister}
        className="text-black bg-transparent bottom-1 border-0 hover:bg-green-600   "
        text="Register"
        size="sm"
      />
      <FontAwesomeIcon
        onClick={handleGotocart}
        icon={faCartShopping}
        className="ml-6 text-2xl cursor-pointer text-gray-700"
      />
      <div className="badge badge-sm mb-9 bg-white text-black ">
        {carts?.length}
      </div>
      <FontAwesomeIcon
        icon={faBell}
        className="ml-6 text-2xl cursor-pointer text-gray-700"
      />
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
      )}
    </div> */}
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-black text-3xl cursor-pointer lg:hidden"
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
              Cantact Us
            </Link>
            {/* <div className="flex">
            {user ? (
              <Button
                onClick={logout}
                className=" text-gray-200 bg-red-500 border-0 bottom-1
                    mt-6 hover:bg-white hover:text-black"
                text="Sign Out"
                size="sm"
              />
            ) : (
              <Button
                onClick={handlelogin}
                className=" text-gray-200 bg-transparent bottom-1 border-gray-200 mt-6 hover:bg-white hover:text-black"
                text="Login"
                size="sm"
              />
            )}{" "}
            <span className="px-4 mt-5 text-3xl text-white caret-black ">
              |
            </span>
            <Button
              onClick={handleRegister}
              className=" text-black bg-transparent bottom-1 mt-6  border-green-600 hover:bg-green-600 hover:text-white"
              text="Register"
              size="sm"
            />
          </div> */}
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
    </div>
  );
};

export default Navebar;
