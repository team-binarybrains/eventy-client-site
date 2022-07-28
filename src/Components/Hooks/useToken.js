import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    // console.log(email);
    const currentUser = { email: email, name: name };
    // console.log(currentUser);
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        body: JSON.stringify(currentUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
