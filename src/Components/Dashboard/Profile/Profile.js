import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Share/Loading";
import profileImg from "../../../image/employer/2.jpg";
import { FiEdit } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import "./Profile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import userIcon from '../../../image/user/1946429.png'

const Profile = () => {
  const [updateUser, setUpdateUser] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  // 
  useEffect(() => {
    // axios.get(`https://powerful-cove-50894.herokuapp.com/single-user/${email}`).then((res) => {
    //   const { data } = res;
    //   setUpdateUser(data);
    // });
    fetch(`https://powerful-cove-50894.herokuapp.com/single/${email}`)
      .then(res => res.json())
      .then(data => setUpdateUser(data))
  }, [email]);
  // console.log(updateUser[0]);
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="my-40 container mx-auto px-4">
      <div
        className="relative flex flex-col min-w-0 break-words border-2 bg-white w-full  mb-6 shadow-xl rounded-lg mt-16 "
        id="profileSection"
      >
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                {/* {user &&
                  <img
                    className="w-52 h-52 rounded-full mt-[-50%]"
                    src={updateUser[0]?.image}
                    alt=""
                  />
                }
                {
                  !updateUser[0]?.image && <span className=""><AiOutlineUser className="border-2 border-black text-black bg-white bg-opacity-50 text-4xl rounded-full w-52 h-52 rounded-full mt-[-95%]" /></span>
                } */}
                {
                  user ?
                    <img
                      className="w-52 h-52 rounded-full mt-[-50%]"
                      src={updateUser[0]?.image}
                      alt=""
                    />
                    :
                    <img
                      className="w-5 h-5 rounded-full mt-[-50%]"
                      src={userIcon}
                      alt=""
                    />
                }
              </div>
            </div>
            <div className="w-full px-4 text-start mt-[-5%]">
              <div className="flex justify-center sm:justify-start py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Booking</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    20
                  </span>
                  <span className="text-sm text-blueGray-400">Review</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
            {/* for logout button */}
            {/* className="sm:absolute sm:top-32 sm:right-20 md:top-28 md:right-40 lg:top-28 lg:right-32 xl:top-20 xl:right-48 " */}

            {/* className="sm:absolute flex w-full justify-center md:justify-end md:top-28 lg:top-20 xl:top-16"  */}
            <div className="sm:absolute sm:top-32 sm:right-0 md:top-28 md:right-4 lg:top-28 lg:right-4 xl:top-20 xl:right-4 ">
              <Link
                to={`/update-profile`}
                className="px-8 py-2 rounded text-black font-bold text-xl flex items-center gap-3 hover:text-gray-600"
              >
                <FiEdit></FiEdit> Edit Profile
              </Link>
            </div>
          </div>
          <div className="text-center mt-6">
            <div className="">
              <div className="">
                <h3 className="text-lg font-semibold leading-normal text-slate-700 mb-1">
                  Name: {user?.displayName}
                </h3>
              </div>
              <div className="text-base font-semibold leading-normal text-slate-700 mb-1">
                <span className="">Email : </span> {user?.email}
              </div>

              <div className="mb-2 text-blueGray-600 mt-0">
                <p className="text-base font-semibold leading-normal text-slate-700 mb-1">Country : {
                  updateUser[0]?.country ? updateUser[0]?.country : "Set Your City Name"
                } </p>{" "}


              </div>
              <div className="">
                <p className="text-base font-semibold leading-normal text-slate-700 mb-1">City : {updateUser[0]?.city ? updateUser[0]?.city : "Set Your City Name"}</p>
              </div>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                <p className="text-base leading-normal text-slate-700 mb-1">Address :
                  {updateUser[0]?.address ? updateUser[0]?.address : " Set Your Address"}
                </p>
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-start">
              <div className="">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="text-xl pb-5">About Me</p>
                  <p className="text-base text-slate-600 font-normal mb-1">
                    {updateUser[0]?.aboutMe ? updateUser[0]?.aboutMe : "Added About Me"}
                  </p>
                  <a
                    href="#pablo"
                    className="font-normal text-lightBlue-500"
                    onClick={(e) => e.preventDefault()}
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
