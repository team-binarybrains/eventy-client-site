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

function App() {
  return (
    <div className="">
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
        <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
