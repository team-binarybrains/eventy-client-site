import React from 'react';

const MyBooking = () => {
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
      {/* {items?.map((user) => (
        <SingleMyOrder
          key={user._id}
          user={user}
          productDeleteHandle={productDeleteHandle}
        ></SingleMyOrder>
      ))} */}
    </tbody>
  </table>
</div>
      </div>
   );
};

export default MyBooking;