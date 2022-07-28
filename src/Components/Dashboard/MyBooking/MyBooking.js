import { signOut } from 'firebase/auth';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import SingleMyBooking from './SinglMyBooking/SinglMyBooking';

const MyBooking = () => {
   const [user] = useAuthState(auth);
   const [items, setItems] = useState([]);
   const navigate = useNavigate();
   useEffect(() => {
     const myBooking = async () => {
       const email = user.email;
       const url = `http://localhost:5000/myBooking?email=${email}`;
 
       try {
         const { data } = await axios.get(url, {
           headers: {
             authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
           },
         });
         setItems(data);
       } catch (error) {
         console.log(error.message);
         if (error.response.status === 401 || error.response.status === 403) {
           signOut(auth);
           navigate("/login");
         }
       }
     };
     myBooking();
   }, [user]);


   return (
      <div>
        
        <h1>my order </h1>

<div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        {/* <th>SL</th> */}
        <th className="text-xl font-bold">Details</th>

        <th className="text-xl font-bold">Payment</th>
        <th className="text-xl font-bold">cancel</th>
      </tr>
    </thead>

    <tbody>
      {items?.map((user) => (
        <SingleMyBooking
          key={user._id}
          user={user}
         //  productDeleteHandle={productDeleteHandle}
        ></SingleMyBooking>
      ))}
    </tbody>
  </table>
</div>
      </div>
   );
};

export default MyBooking;