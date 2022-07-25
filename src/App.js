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
import Overview from "./Components/Dashboard/Overview/Overview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Components/Blogs/Blogs";

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
            element={<Overview></Overview>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
