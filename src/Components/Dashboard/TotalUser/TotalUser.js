import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import DisplayTotalUsers from "./DisplayTotalUsers";

const TotalUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  console.log(allUsers);

  useEffect(() => {
    axios.get("http://localhost:5000/allusers").then((res) => {
      const { data } = res;
      setAllUsers(data);
    });
  }, []);

  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/delete-user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = allUsers.filter((toDo) => toDo._id !== id);
          setAllUsers(remaining);
        });
    }
  };

  return (
    <div class="mt-2">
      <table class="max-w-5xl mx-auto table-auto">
        <thead class="justify-between">
          <tr class="bg-green-600">
            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Avatar</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Name</span>
            </th>

            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Date</span>
            </th>

            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Setting</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
          {allUsers.map((allUser) => (
            <DisplayTotalUsers
              allUser={allUser}
              handleDeleteUser={handleDeleteUser}
              key={allUser._id}
            ></DisplayTotalUsers>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TotalUser;
