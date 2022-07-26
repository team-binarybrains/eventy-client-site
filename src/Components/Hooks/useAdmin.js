import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        // console.log(email);
        if (email) {
            axios
                .get(`https://powerful-cove-50894.herokuapp.com/admin/${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                })
                .then((data) => {
                    setAdmin(data.data.admin);
                    setAdminLoading(false);
                });
        }
    }, [user]);
    return [admin, adminLoading];
};

export default useAdmin;