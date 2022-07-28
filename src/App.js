/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Navebar from "./Components/Share/Navebar";
import Footer from "./Components/Share/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Share/NotFound";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Components/Blogs/Blogs";
import Booking from "./Components/Dashboard/Booking/Booking";
import MyBooking from "./Components/Dashboard/MyBooking/MyBooking";
import Review from "./Components/Dashboard/Review/Review";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import BackTopBtn from "./Components/BackTopBtn/BackTopBtn";
import TotalUser from "./Components/Dashboard/TotalUser/TotalUser";
import Profile from "./Components/Dashboard/Profile/Profile";
import UpdateUser from "./Components/Dashboard/Profile/UpdateUser/UpdateUser";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
        <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* Dash board */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            index
            path="/dashboard"
            element={
              <RequireAuth>
                <Booking></Booking>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/my-booking"
            element={
              <RequireAuth>
                <MyBooking></MyBooking>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/review"
            element={
              <RequireAuth>
                <Review></Review>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/add-review"
            element={
              <RequireAuth>
                <AddReview></AddReview>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/total-user"
            element={
              <RequireAuth>
                <TotalUser></TotalUser>
              </RequireAuth>
            }
          ></Route>



        </Route>
        {/* for manage profile */}
        <Route
          path="/manage-profile"
          element={
            <Profile></Profile>
          }
        ></Route>
        {/* for update user */}
        <Route
          path="/update-profile"
          element={
            <UpdateUser></UpdateUser>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <BackTopBtn></BackTopBtn>
      <ToastContainer />
    </div>
  );
}

export default App;
