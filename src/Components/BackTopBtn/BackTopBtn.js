import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
// import link
import { animateScroll as scroll } from "react-scroll";
// import icon

const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    return (
      show && (
        <button
          onClick={() => scrollToTop()}
          className=" bounce bg-[#BAD4B6]  hover:bg-accent-hover text-3xl text-gray-700 w-12 h-12 rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all"
        >
          <AiOutlineArrowUp className="font-bold"></AiOutlineArrowUp>
        </button>
      )
    );
  }
};

export default BackTopBtn;
