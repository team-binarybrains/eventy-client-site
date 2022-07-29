import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./EventDetails.css"
import { useParams } from "react-router-dom";
import SingleVenu from "./SingleVenu";
import auth from "../../../../Firebase/Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";


const EventDetails = () => {

  const [user] = useAuthState(auth);
  const name = user?.displayName;
  const email = user?.email;
  const { id } = useParams();
  const [venu, setVenu] = useState([]);
  const [service, setService] = useState({});
  const [selectVenu, setSelectVenu] = useState([]);
  const [venuSelectDeleteRefetch, setvenuSelectDeleteRefetch] = useState(0);
  const [bookingDate, setBookingDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingPersonAddress, setAddress] = useState("");
  const [bookingDetails, setBookingDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/allservices/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, [id, selectVenu, bookingDate])

  useEffect(() => {
    fetch("http://localhost:5000/allvenues")
      .then(res => res.json())
      .then(data => setVenu(data))
  }, [id])

  useEffect(() => {
    fetch(`http://localhost:5000/selectVenu/${email}`)
      .then(res => res.json())
      .then(data => {
        setSelectVenu(data);
      })
  }, [venuSelectDeleteRefetch, email])


  const handleSelectVenu = (VenuDetails) => {

    const { image, location, price, quantity, description } = VenuDetails;
    const totalPrice = service.eventPrice + price;
    const email = user?.email;
    const venuPrice = price;
    const selectEventDetails = { email, image, location, totalPrice, quantity, description, venuPrice }

    fetch('http://localhost:5000/venuInsert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectEventDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          setvenuSelectDeleteRefetch(venuSelectDeleteRefetch + 1);
        } else {
          toast.error(data.message);
        }
      })
  }

  const selectedVenuDelete = (id) => {

    fetch(`http://localhost:5000/selectVenuDelete/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          setvenuSelectDeleteRefetch(venuSelectDeleteRefetch + 1)
        }
      })

  }

  const handleBookingDate = (e) => {
    setBookingDate(e.target.value);
  }

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleAddress = (e) => {
    setAddress(e.target.value);
  }

  const handleBookingSubmit = () => {

    if (selectVenu.length) {
      const bookingPersonName = name;
      const bookingPersonEmail = email;
      const date = bookingDate;
      const phone = phoneNumber;
      const address = bookingPersonAddress;
      const eventName = service?.eventName;
      const eventPrice = service?.eventPrice;
      const venuLocation = selectVenu[0].location;
      const venuPrice = selectVenu[0].venuPrice;
      const venuPeopleAttend = selectVenu[0].quantity;
      const totalPrice = selectVenu[0].totalPrice;
      const eventImage = service?.image;
      const venuImage = selectVenu[0].image;
      const bookingInfo = { bookingPersonName, bookingPersonEmail, date, phone, address, eventName, eventPrice, venuLocation, venuPrice, venuPeopleAttend, totalPrice, eventImage, venuImage }
      setBookingDetails(bookingInfo);
      setvenuSelectDeleteRefetch(venuSelectDeleteRefetch + 1);
    } else {
      toast.warning("Please Select Venu");
    }
  }

  const handleBookingConfirm = (id) => {
    if (selectVenu.length && bookingDate && bookingPersonAddress && phoneNumber) {
      fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.acknowledged) {
            setBookingDetails({});
            toast.success(`${bookingDetails.eventName} Event Booking`);
            setBookingDate("");
            setPhoneNumber("");
            setAddress("");
          } else {
            toast.error(data.message);
          }
        })

      fetch(`http://localhost:5000/selectVenuDelete/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            setvenuSelectDeleteRefetch(venuSelectDeleteRefetch + 1)
          }
        })
    } else {
      toast.error("Please select venu Or Fill the input field");
    }

  }

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div id="viewerBox" className="lg:p-10 md:p-6 p-4 bg-white">
          <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={8}
              className="lg:w-1/2 flex justify-between items-strech bg-gray-50 px-2 pt-1 md:pt-2 md:px-3 lg:pt-3"
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
                    {venu.map((v, i) => <SingleVenu key={v._id} VenuDetails={v} index={i} servicePrice={service.eventPrice} handleSelectVenu={handleSelectVenu}></SingleVenu>)}
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
                {service.eventName}
              </h1>
              <p className="text-xl font-bold leading-normal text-gray-800 mt-2">
                Price : ${service.eventPrice}
              </p>
              <p className="text-base leading-normal text-gray-600 mt-2">
                {service.eventDetails}
              </p>
              <div className="h-24">
                <p className="text-lg font-bold leading-normal mt-3">
                  Selceted Venu : {selectVenu.length ? "" : <span className="text-gray-400 font-medium">Please Select Venu...</span>}
                </p>
                {
                  selectVenu.length ?
                    <>
                      <span className="text-sm pr-2 sm:pr-3 font-bold border-r-4">Location : {selectVenu[0]?.location}</span>
                      <span className="text-sm font-bold pl-2 sm:pl-3">Capacity : {selectVenu[0]?.quantity} Peoples</span>
                    </>
                    :
                    ""
                }

                <div className="mt-1">
                  {selectVenu.length ? <button onClick={() => selectedVenuDelete(selectVenu[0]._id)} className="bg-red-500 text-xs font-semibold text-white px-3 py-1 rounded">Cancle Venu</button> : ""}
                </div>

              </div>
              <p className="text-2xl font-semibold leading-normal mb-4">
                Total Price : ${selectVenu.length ? selectVenu[0].totalPrice : service.eventPrice}
              </p>

              <form>
                <div className="flex flex-col gap-3 mt-3">
                  <div class="form-control w-full max-w-xs">
                    <input type="date" name="date" onChange={(e) => handleBookingDate(e)} placeholder="Event Date" class="input input-bordered w-full max-w-xs rounded-none focus:outline-none" value={bookingDate} required />
                  </div>
                  <div class="form-control w-full max-w-xs">
                    <input type="text" name="phone" onChange={(e) => handlePhoneNumber(e)} placeholder="Phone Number" class="input input-bordered w-full max-w-xs rounded-none focus:outline-none mt-1" required value={phoneNumber} />
                  </div>
                  <div class="form-control w-full max-w-xs">
                    <input type="text" name="address" onChange={(e) => handleAddress(e)} placeholder="Address" class="input input-bordered w-full max-w-xs rounded-none focus:outline-none mt-1" required value={bookingPersonAddress} />
                  </div>

                  <label onClick={() => handleBookingSubmit()} for="my-modal-6" className="w-3/5 border border-gray-800 text-base font-medium leading-none capitalize py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white mt-3 text-center" >Booking Service</label>

                  <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                  <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                      <h3 class="font-bold text-2xl">Booking {service.eventName}</h3>
                      <ul className=" text-black font-medium mt-4 ml-2">
                        <li className="font-medium">Name : {bookingDetails.bookingPersonName}</li>
                        <li>Email : {bookingDetails.bookingPersonEmail}</li>
                        <li>Phone : {bookingDetails.phone}</li>
                        <li className="mb-5">Address : {bookingDetails.address}</li>
                        <li>Event Name : {bookingDetails.eventName}</li>
                        <li>Event Price : ${bookingDetails.eventPrice}</li>
                        <li>Event Date : {bookingDetails.date}</li>
                        <li>Venu Location : {bookingDetails.venuLocation}</li>
                        <li>Venu Price : ${bookingDetails.venuPrice}</li>
                        <li>Event Capacity : {bookingDetails.venuPeopleAttend} Peoples</li>
                        <li className="text-lg font-bold">Total Price : ${bookingDetails.totalPrice}</li>
                      </ul>
                      <div class="modal-action">
                        <label onClick={() => setBookingDetails({})} for="my-modal-6" class="bg-red-500 px-5 py-2 text-white font-medium">Cancle</label>
                        <label type="reset" onClick={() => handleBookingConfirm(selectVenu[0]._id)} for="my-modal-6" class="bg-green-500 px-5 py-2 text-white font-medium">Booking Confirm</label>
                      </div>
                    </div>
                  </div>

                </div>
              </form>
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
