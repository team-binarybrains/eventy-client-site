import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SingleMyBooking = (props) => {
    const { productDeleteHandle, user } = props;
    const {Id}=useParams()
    const { bookingPersonName
        , phone,img, address, price, orderQuantity, _id } = user;
    const navigate=useNavigate()
    const payMent=(id) => {
      navigate(`/payMent/${_id}`)  
  }
    return (
        <div>
             <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">
                <h1>Name:{bookingPersonName}</h1>
                <h1>Price{phone}</h1>
                <h1>OrderQuantity{orderQuantity}</h1>
              </div>
              <div className="text-sm opacity-50">
                <h1>{address}</h1>
              </div>
            </div>
          </div>
        </td>
        <td>
          <Link to={`/dashboard/payMent/${_id}`} className="btn btn-ghost btn-xs">payment</Link>
        </td>
        <th>
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => productDeleteHandle(user._id)}
          >
            cancel
          </button>
        </th>
      </tr>

        </div>
    );
};

export default SingleMyBooking;