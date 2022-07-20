import React from 'react';
import employer1 from '../../../image/employer/1.jpg'
import employer2 from '../../../image/employer/2.jpg'
import employer3 from '../../../image/employer/3.jpg'
import employer4 from '../../../image/employer/4.jpg'
import employer5 from '../../../image/employer/5.jpg'
import employer6 from '../../../image/employer/6.jpg'

// css add 
import './OurEmployer.css'
const OurEmployer = () => {
  const employer = [
    { image: employer1, employerName: "James", profession: 'Event Planner' },
    { image: employer2, employerName: "Robert", profession: 'Wedding Planner' },
    { image: employer3, employerName: "Mary", profession: 'Venue Manager' },
    { image: employer4, employerName: "William", profession: 'event Managers.' },
    { image: employer5, employerName: "Thomas", profession: 'speaker' },
    { image: employer6, employerName: "Liam", profession: 'Event specialist' },
  ]
  return (
    <section className='py-6'>
      <div className='container mx-auto px-2 '>
        <div id="OurEmployer">
          <div className="">
            <h1 className='text-3xl py-4 pb-8 text-center'>Our Employer</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center gap-4">
            {
              employer.map((e, index) =>
                <div key={index} className="Employer shadow-2xl">
                  <div id="EmployerImg" className='shadow-2xl'>
                    <img className='rounded' src={e.image} alt="" />
                    <div id="EmployerContent">
                      <div id="EmployerText" className='py-4 px-4'>
                        <h1 className='text-lg sm:text-xl text-white capitalize'>{e.employerName}</h1>
                        <h3 className='text-xs sm:text-base text-white capitalize'>{e.profession}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            
          </div>
          <div className="text-center mb-12 pt-6">
              <button
                className="btnc btn-gradient gradient2 text-center">
                See More
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OurEmployer;