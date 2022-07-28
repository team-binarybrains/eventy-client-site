import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../Share/Loading';
import profileImg from '../../../image/employer/2.jpg'
import { FiEdit } from 'react-icons/fi';

import './Profile.css'
import { Link } from 'react-router-dom';

const Profile = () => {
   const [user, loading, error] = useAuthState(auth);
   if (loading) {
      return <Loading />
   }
   return (
      <section className='my-40 container mx-auto px-4'>
         <div className="relative flex flex-col min-w-0 break-words bg-white w-full  mb-6 shadow-xl rounded-lg mt-16 " id='profileSection'>
            <div className="px-6">
               <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 flex justify-center">
                     <div className="relative">
                        {
                           user?

                              <img className='w-52 h-52 rounded-full mt-[-50%]' src={user?.photoURL} alt="profile photos" />
                              :
                              <img className='w-52 h-52 rounded-full mt-[-50%]' src={profileImg} alt="" />
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
                     <Link to={`/update-profile`} className='px-8 py-2 rounded text-black font-bold text-xl flex items-center gap-3 hover:text-gray-600'><FiEdit></FiEdit> Edit Profile</Link>
                  </div>
               </div>
               <div className="text-center mt-12">
                  <h3 className="text-xl font-semibold leading-normal  text-blueGray-700 mb-2">
                     Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                     <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                     Los Angeles, California
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                     <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                     Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                     <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                     University of Computer Science
                  </div>
               </div>
               <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                     <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                           An artist of considerable range, Jenna the name taken by
                           Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                           and records all of his own music, giving it a warm, intimate
                           feel with a solid groove structure. An artist of considerable
                           range.
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
      </section>
   );
};

export default Profile;