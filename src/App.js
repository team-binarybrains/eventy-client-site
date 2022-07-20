/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Navebar from "./Components/Share/Navebar";
import Footer from "./Components/Share/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Share/NotFound";

function App() {
  return (
    <div className="App">
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
