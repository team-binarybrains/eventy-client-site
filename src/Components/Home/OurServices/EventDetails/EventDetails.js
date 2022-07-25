import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./EventDetailsl.css"

const EventDetails = () => {

  const [venu, setVenu] = useState([]);

  useEffect(() => {
    fetch("Venu.json")
      .then(res => res.json())
      .then(data => setVenu(data))
  }, [])

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div id="viewerBox" className="lg:p-10 md:p-6 p-4 bg-white">
          <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={8}
              className="lg:w-1/2 flex justify-between items-strech bg-gray-50 px-2 pt-5 md:pt-5 md:px-3 lg:pt-10"
            >
              <div className="flex items-center">
                <ButtonBack
                  aria-label="slide back"
                  className=""
                  role="button"
                >
                  <svg
                    className="w-10 h-10 lg:w-16 lg:h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 16L24 32L40 48"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
              </div>
              <div className="slider">
                <div className="slide-ana">
                  <Slider className="w-full h-screen">
                    {venu.map((v, i) => <Slide index={i}>
                      <div>
                        <img
                          src={v.image}
                          alt="A black chair with wooden legs"
                          className=""
                        />
                        <div className="p-3">
                          <p className="text-lg"><b>Event Location :</b> {v.location}</p>
                          <p className="text-base pt-1"><b>Price :</b> {v.price}</p>
                          <p className="text-base pt-1"><b>Quantity :</b> {v.quantity} peoples</p>
                          <p className="w-full pt-1"><b>Details : </b> {v.description.slice(0, 190)}...</p>
                        </div>
                      </div>
                    </Slide>)}
                  </Slider>
                </div>
              </div>
              <div className="flex items-center">
                <ButtonNext
                  role="button"
                  aria-label="next slide"
                  className="cursor-pointer ml-2"
                >
                  <svg
                    className="w-10 h-10 lg:w-16 lg:h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 16L40 32L24 48"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
            <div className="lg:w-1/2 mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                Marrige Event
              </h1>
              <p className="text-base leading-normal text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum nobis ut, beatae in amet repellendus molestiae error voluptatem delectus fugiat aliquid repellat magnam cumque?
              </p>
              <p className="text-3xl font-medium text-gray-800 mt-3 md:mt-5">
                Order Form
              </p>
              <div className="flex flex-col gap-3 mt-3">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Event name</span>
                  </label>
                  <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs rounded-none focus:outline-none" />
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Event Price</span>
                  </label>
                  <input type="text" placeholder="Price" class="input input-bordered w-full max-w-xs rounded-none focus:outline-none" />
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Phone</span>
                  </label>
                  <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs rounded-none focus:outline-none" />
                </div>
                <button className="w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white mt-3">
                  Order Place
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
            .slider {
                width: 200px;
                height: 400px;
                position: relative;
                overflow: hidden;
            }

            .slide-ana {
                height: 360px;
            }

            .slide-ana > div {
                width: 100%;
                height: 100%;
                position: absolute;
                transition: all 0.7s;
            }

            @media (min-width: 200px) and (max-width: 639px) {
                .slider {
                    height: 300px;
                    width: 170px;
                }
            }
        `}</style>
    </div>
  );
};

export default EventDetails;
