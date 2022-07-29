import React from 'react';
import employer1 from "../../../image/employer/1.jpg";
import employer2 from "../../../image/employer/2.jpg";
import employer3 from "../../../image/employer/3.jpg";
import employer4 from "../../../image/employer/4.jpg";
import employer5 from "../../../image/employer/5.jpg";
import employer6 from "../../../image/employer/6.jpg";
import employer7 from "../../../image/employer/responsive_big_webp_EsIkRAdJtyQG7N9SsTHDY6RCi5bYfKYV1DFH_fL0zcg.webp"
import employer8 from "../../../image/employer/1633365559-GettyImages-1041967716.jpg"
import employer9 from "../../../image/employer/0223_637256793905100705.jpg"

const AllEmployers = () => {

    const employer = [
        { image: employer1, employerName: "James", profession: "Event Planner" },
        { image: employer2, employerName: "Robert", profession: "Wedding Planner" },
        { image: employer3, employerName: "Mary", profession: "Venue Manager" },
        {
            image: employer4,
            employerName: "William",
            profession: "event Managers.",
        },
        { image: employer5, employerName: "Thomas", profession: "speaker" },
        { image: employer6, employerName: "Liam", profession: "Event specialist" },
        { image: employer7, employerName: "Niak", profession: "Organize specialist" },
        { image: employer8, employerName: "Farin", profession: "Event specialist" },
        { image: employer9, employerName: "Nasrim", profession: "Motivational Speaker" }
    ];

    return (
        <div className='bg-white pb-16'>
            <section className="py-6">
                <div className="container mx-auto px-2 ">
                    <div id="OurEmployer">
                        <div className="">
                            <h1 className='text-4xl py-2 pb-5 text-center title_line uppercase'>Our Employer</h1>
                        </div>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center gap-4">
                            {employer.map((e, index) => (
                                <div key={index} className="Employer shadow-2xl ">
                                    <div id="EmployerImg" className="shadow-2xl">
                                        <img className="rounded w-[410px] h-[310px] object-cover" src={e.image} alt="" />
                                        <div id="EmployerContent">
                                            <div id="EmployerText" className="py-4 px-4">
                                                <h1 className="text-lg sm:text-xl text-white capitalize">
                                                    {e.employerName}
                                                </h1>
                                                <h3 className="text-xs sm:text-base text-white capitalize">
                                                    {e.profession}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllEmployers;