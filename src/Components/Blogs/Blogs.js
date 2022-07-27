import React, { useEffect, useState } from "react";
import ReadMoreAndLess from "react-read-more-less";
const Blogs = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
            This Week Blogs
          </h1>
          <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            Write something here
          </p>
        </div>
        <div className="lg:flex items-stretch md:mt-12 mt-8">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              <div className="sm:w-1/2 relative">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold  text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <div className="flex items-center mt-4 cursor-pointer text-white  ">
                      {/* <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p> */}
                      <ReadMoreAndLess
                        className="pr-2 text-sm font-medium  read-more-content
                    
                         bottom text-[#bad4b6]
                        "
                        charLimit={40}
                        readMoreText="Read more"
                        readLessText="Read less"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga amet quibusdam earum officia eligendi repudiandae?
                        Eligendi eveniet labore, quia sapiente laborum, dolore
                        quisquam modi placeat,
                      </ReadMoreAndLess>

                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/D45D2Bc/0070f41c0e61c5fc8729aac0ad721b40.jpg"
                  className="w-full"
                  alt="chair"
                />
              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <div className="flex items-center mt-4 cursor-pointer text-white  ">
                      {/* <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p> */}
                      <ReadMoreAndLess
                        className="pr-2 text-sm font-medium  read-more-content
                    
                         bottom text-[#bad4b6]
                        "
                        charLimit={40}
                        readMoreText="Read more"
                        readLessText="Read less"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga amet quibusdam earum officia eligendi repudiandae?
                        Eligendi eveniet labore, quia sapiente laborum, dolore
                        quisquam modi placeat,
                      </ReadMoreAndLess>

                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/sVqPxM3/SL-010721-39730-51.jpg"
                  className="w-full"
                  alt="wall design"
                />
              </div>
            </div>
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2021
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    The Decorated Ways
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    Dive into minimalism
                  </p>
                  <div className="flex items-center mt-4 cursor-pointer text-white  ">
                    {/* <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p> */}
                    <ReadMoreAndLess
                      className="pr-2 text-sm font-medium  read-more-content
                    
                         bottom text-[#bad4b6]
                        "
                      charLimit={40}
                      readMoreText="Read more"
                      readLessText="Read less"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga amet quibusdam earum officia eligendi repudiandae?
                      Eligendi eveniet labore, quia sapiente laborum, dolore
                      quisquam modi placeat,
                    </ReadMoreAndLess>

                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <img
                src="https://i.ibb.co/ZcKGxjG/3593747.jpg"
                alt="sitting place"
                className="w-full h-[500px] mt-8 md:mt-6 hidden sm:block"
              />
              <img
                className="w-full mt-4 sm:hidden"
                src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                alt="sitting place"
              />
            </div>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2021
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    The Decorated Ways
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    Dive into minimalism
                  </p>
                  <div className="flex items-center mt-4 cursor-pointer text-white  ">
                    {/* <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p> */}
                    <ReadMoreAndLess
                      className="pr-2 text-sm font-medium  read-more-content
                    
                         bottom text-[#bad4b6]
                        "
                      charLimit={40}
                      readMoreText="Read more"
                      readLessText="Read less"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga amet quibusdam earum officia eligendi repudiandae?
                      Eligendi eveniet labore, quia sapiente laborum, dolore
                      quisquam modi placeat,
                    </ReadMoreAndLess>

                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <img
                src="https://i.ibb.co/MnNjHJy/6128160.jpg"
                alt="sitting place"
                className="w-full h-[500px] sm:block hidden"
              />
              <img
                className="w-full sm:hidden"
                src="https://i.ibb.co/FgM9kBC/15894692-1117517468374749-5249705379307037174-n.jpg"
                alt="sitting place"
              />
            </div>
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              <div className="relative w-full">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <div className="flex items-center mt-4 cursor-pointer text-white  ">
                      {/* <p className="pr-2 text-sm font-medium leading-none">
                        Read
                      </p>
                       */}
                      <ReadMoreAndLess
                        className="pr-2 text-sm font-medium  read-more-content
                    
                         bottom text-[#bad4b6]
                        "
                        charLimit={40}
                        readMoreText="Read more"
                        readLessText="Read less"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga amet quibusdam earum officia eligendi repudiandae?
                        Eligendi eveniet labore, quia sapiente laborum, dolore
                        quisquam modi placeat,
                      </ReadMoreAndLess>

                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/p2yfpZg/invitation-card-01.jpg"
                  className=" w-full h-[284px] "
                  alt="chair"
                />
              </div>
              <div className="relative w-full sm:mt-0 mt-4">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <div className="flex items-center mt-4 cursor-pointer text-white  ">
                      {/*                      
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>  */}
 <ReadMoreAndLess
                        className="pr-2 text-sm font-medium  read-more-content
                    
                         bottom text-[#bad4b6]
                        "
                        charLimit={40}
                       
                        readMoreText="Read more"
                        readLessText="Read less"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga amet quibusdam earum officia eligendi repudiandae?
                        Eligendi eveniet labore, quia sapiente laborum, dolore
                        quisquam modi placeat, 
                      </ReadMoreAndLess>


                     <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg> 
                    </div>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/C7jM3jB/25659423-175199439745803-2051114183330359789-n-15-59975.jpg"
                  className=" w-full h-[284px]"
                  alt="wall design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
