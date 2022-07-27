import React, { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import DisplayTotalUsers from './DisplayTotalUsers';


const TotalUser = () => {

   const [allUsers, setAllUsers] = useState([])
   console.log(allUsers);

   useEffect(() => {

      axios.get('http://localhost:5000/allusers')
         .then(res => {
            const { data } = res
            setAllUsers(data);
         })

   }, [])


   const handleDeleteUser = (id) => {
      const proceed = window.confirm("Are you sure?");
      if (proceed) {
         const url = `http://localhost:5000/delete-user/${id}`;
         fetch(url, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((data) => {
               const remaining = allUsers.filter(toDo => toDo._id !== id)
               setAllUsers(remaining)
            });
      }
   };




   return (
      <div>
         {
            allUsers.map(allUser => <DisplayTotalUsers
               key={allUser._id}
               allUser={allUser}
               handleDeleteUser={handleDeleteUser}
            />)
         }
      </div>
   );
};

export default TotalUser;