import { signOut } from "firebase/auth";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import SingleMyBooking from "./SinglMyBooking/SinglMyBooking";

const MyBooking = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5000/myBooking/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  const productDeleteHandle = (id) => {
    const proceed = window.confirm("Are you sure cancel booking?");
    if (proceed) {
      const url = `http://localhost:5000/myBooking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((OrderItems) => OrderItems._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div>
      <h1 className="pt-3 pb-3  text-3xl mt-4 uppercase ml-5">
      Total order: {items.length}
      </h1>

      <div className="grid md:grid-cols-2 gap-7 sm:grid-cols-1 px-3 pt-7">
        {items?.map((user) => (
          <SingleMyBooking
            key={user._id}
            user={user}
            productDeleteHandle={productDeleteHandle}
          ></SingleMyBooking>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
