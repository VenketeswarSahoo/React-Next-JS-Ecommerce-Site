"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[80rem] h-[40rem] items-center border rounded-2xl"
      >
        <SwiperSlide>
          <img
            className="w-[80rem] h-[40rem]"
            src="https://i.pinimg.com/originals/1a/6e/56/1a6e56af901500d76ec1daf5bfa7adcb.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80rem] h-[40rem]"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e456a8103211209.5f47dea744a23.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80rem] h-[40rem]"
            src="https://cdna.artstation.com/p/assets/images/images/043/309/388/large/remigiusz-steclik-nikex.jpg?1636916910"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[80rem] h-[40rem]"
            src="https://cdna.artstation.com/p/assets/images/images/036/002/188/large/m-n-vinit-img-20210322-204116-186.jpg?1616482578"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
