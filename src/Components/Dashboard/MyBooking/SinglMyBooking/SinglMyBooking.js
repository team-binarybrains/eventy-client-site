import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './SingleMyBooking.css'

const SingleMyBooking = (props) => {
    console.log(props);
    const { productDeleteHandle, user } = props;
    const { bookingPersonName, phone,bookingPersonEmail, date,address, eventName,eventPrice,venuLocation,venuPrice,venuPeopleAttend,totalPrice,eventImage,venuImage, _id } = user;
 
 
    return (
        <div className=''>
    <div className="bookingModal rounded px-5 py-4 bg-white h transition-all
   
    ">
       
<div className='flex  justify-around gap-4'>
<div className=''>
        <img className="w-[216px] h-[50%] rounded mx-auto" src={eventImage} alt="" />
        <div className="pt-3">
        <p className="text-xl"><span className="font-bold pr-1"> Event Name: </span>{eventName}</p>
        <p className='py-1 font-bold text-lg'><span className="font-bold pr-1"> Event Price: $</span> {eventPrice}</p>
        <p className='py-1 font-bold text-lg'><span className="font-bold pr-1"> Address: </span>{address}</p>
        <p className='py-1 font-bold text-lg'><span className="font-bold pr-1"> Email:</span>{bookingPersonEmail}</p>

        </div>
     </div>

        <div className=''>
        <img className="w-[216px] h-[50%] rounded mx-auto" src={venuImage} alt="" />
            <div className='pt-3'>
            <p className="text-xl"><span className="font-bold pr-1"> Venue Location: </span>{venuLocation}</p>
            <p className='py-1 font-bold text-lg'><span className="font-bold pr-1"> Venue capacity: </span>{venuPeopleAttend}</p>
            <p className='py-1 font-bold text-lg'><span className="font-bold pr-1"> Venue Price: $</span>{venuPrice}</p>
            <p className='py-1 font-bold text-lg'><span className="font-bold pr-1"> Phone: </span>{phone}</p>
            <p className='py-1 font-bold text-lg'><span className="font-bold pr-1"> Date: </span>{date}</p>
            </div>
        </div>    
</div>
   
       <div className=''>
        <div className=''>
        <p className='text-xl text-center py-4'><span className="font-bold pr-1 "> Total Price: $</span>{totalPrice}</p>
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