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




   return (
      <div>
         {
            allUsers.map(allUser => <DisplayTotalUsers
            key={allUser._id}
            allUser={allUser}
            />)
         }
      </div>
   );
};

export default TotalUser;