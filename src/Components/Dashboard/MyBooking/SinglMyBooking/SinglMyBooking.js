import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './SingleMyBooking.css'

const SingleMyBooking = (props) => {
    const { productDeleteHandle, user } = props;
    const {Id}=useParams()
    const { bookingPersonName, phone,bookingPersonEmail, date,address, eventName,eventPrice,venuLocation,venuPrice,venuPeopleAttend,totalPrice, _id } = user;
    const navigate=useNavigate()
    const payMent=(id) => {
      navigate(`/payMent/${_id}`)  
  }
    return (
        <div className=''>
    <div className="bookingModal rounded px-5 py-4 bg-white hover:scale-105 transition-all
   
    ">
       
<div className='flex  justify-around gap-4'>
<div className=''>
        <img className="w-[50%] h-[50%] rounded mx-auto" src="https://i.ibb.co/pwXySBZ/vicky-hladynets-C8-Ta0gw-Pb-Qg-unsplash.jpg" alt="" />
        <div className="pt-3">
        <h1><span className=" pr-1"> Name:</span>{bookingPersonName}</h1>
        <p><span className="font-bold pr-1"> Event Name: </span>{eventName}</p>
        <p><span className="font-bold pr-1"> Event Price: </span> {eventPrice}</p>
        <p><span className="font-bold pr-1"> Address: </span>{address}</p>
        <p><span className="font-bold pr-1"> Email:</span>{bookingPersonEmail}</p>

        </div>
     </div>

        <div className=''>
        <img className="w-[50%] h-[50%] rounded mx-auto" src="https://i.ibb.co/pwXySBZ/vicky-hladynets-C8-Ta0gw-Pb-Qg-unsplash.jpg" alt="" />
            <div className='pt-3'>
            <p><span className="font-bold pr-1"> Venue Location: </span>{venuLocation}</p>
            <p><span className="font-bold pr-1"> Venue Attend: </span>{venuPeopleAttend}</p>
            <p><span className="font-bold pr-1"> Venue Price: </span>{venuPrice}</p>
            <p><span className="font-bold pr-1"> Phone: </span>{phone}</p>
            <p><span className="font-bold pr-1"> Date: </span>{date}</p>
       
            </div>
        </div>
        
</div>
   
       <div className=''>
        <div className=''>
        <p className='text-xl'><span className="font-bold pr-1 "> Total Price: $</span>{totalPrice}</p>
        </div>
       </div>
        <div className='flex justify-center gap-4 mt-1'>

        <button
            className="btn change-btn"
            onClick={() => productDeleteHandle(user._id)}
          >
           <span className=""> cancel</span>
          </button>
        <button className='btn change-btn2 '> <span>payment</span></button>

        </div>
        <br />
        <br />
    </div>

        </div>
    );
};

export default SingleMyBooking;