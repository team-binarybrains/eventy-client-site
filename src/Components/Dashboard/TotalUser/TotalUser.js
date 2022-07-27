import React, { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'


const TotalUser = () => {

   const [allUser, setAllUser] = useState([])
   console.log(allUser);

   useEffect(() => {

      axios.get('http://localhost:5000/allusers')
         .then(res => {
            const { data } = res
            setAllUser(data);
         })

   }, [])




   return (
      <div>
         <h1>Total user</h1>
      </div>
   );
};

export default TotalUser;