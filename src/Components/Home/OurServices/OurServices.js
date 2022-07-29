import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./OurServices.css";


function OurServices() {

  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://powerful-cove-50894.herokuapp.com/allservices")
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className="grid justify-center my-10">
      <div className="mt-12 mb-8">
        <h1 className="uppercase title_line text-center text-4xl">
          our services
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {services?.map(service => <div key={service._id} className="mb-4 cursor-pointer">
          <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
            <img
              src={service.image}
              className="max-w-xs w-[321px] h-[216px]"
              alt="Louvre"
            />

            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out bg-green-700 bg-opacity-50">
              <div className="text-white grid items-end justify-center h-full">
                <h1 className="text-5xl uppercase text-center text-white">
                  {service.eventName}
                </h1>

                <button onClick={() => navigate(`/eventDetail/${service._id}`)} className="btn-selection type-1">Full Details</button>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
}

export default OurServices;
