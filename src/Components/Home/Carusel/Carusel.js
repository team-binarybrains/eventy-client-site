/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carusel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carusel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        rewind={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="" src="https://i.ibb.co/jf3d28m/BANNER-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src="https://i.ibb.co/DkqHxR9/5907824.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src="https://i.ibb.co/R27VyGD/5340469.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
