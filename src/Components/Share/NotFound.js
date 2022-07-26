import React from "react";
import Error404 from '../../image/gif/error.gif'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center backdrop-blur-3xl h-[calc(100vh-90px)]'>
            <section className=''>
                <img className='mx-auto' src={Error404} alt="" />
                <h3 className='text-red-600 animate-pulse text-center font-medium text-3xl'>Page not Found</h3>
            </section>
        </div>
  );
};

export default NotFound;
