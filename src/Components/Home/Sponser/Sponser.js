/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Sponser = () => {
    const [sponsers,setSponsers]= useState([]);

    useEffect(()=> {
        fetch('sponsers.json')
        .then(response => response.json())
        .then(data => setSponsers(data))
    },[])

    return (
        <div>
            <section className="bg-tertiary py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 md:grid-cols-8 md:grid-flow-col mx-10 gap-y-5">
                    {sponsers.map((sponser, index) => {
                        return (
                            <div
                                data-aos="zoom-in-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                className="flex items-center justify-center"
                                key={index}
                            >
                                <img className="" src={sponser.img} alt="" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
        </div>
    );
};

export default Sponser;