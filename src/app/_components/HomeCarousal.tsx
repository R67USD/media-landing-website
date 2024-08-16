"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const HomeCarousal = () => {
  return (
    <div className="container max-md:hidden text-black">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="items-center text-center flex justify-center flex-col px-[210px]">
            <h3 className="text-lg font-semibold font-serif text-primary-orange">
              Endorsement
            </h3>

            <div className="w-full text-[24px] leading-[41px] text-center font-[500]">
              “The success of our campaign was beyond expectations, thanks to
              the innovative strategies and tireless efforts put forth by the
              team. They truly understood our vision and helped us connect with
              the masses like never before”
            </div>
            <div className="my-10">Ankit Goswami</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="items-center text-center flex justify-center flex-col px-[210px]">
            <h3 className="text-lg font-semibold font-serif text-primary-orange">
              Endorsement
            </h3>

            <div className="w-full text-[24px] leading-[41px] text-center font-[500]">
              “The success of our campaign was beyond expectations, thanks to
              the innovative strategies and tireless efforts put forth by the
              team. They truly understood our vision and helped us connect with
              the masses like never before”
            </div>
            <div className="my-10">Ankit Goswami</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="items-center text-center flex justify-center flex-col px-[210px]">
            <h3 className="text-lg font-semibold font-serif text-primary-orange">
              Endorsement
            </h3>

            <div className="w-full text-[24px] leading-[41px] text-center font-[500]">
              “The success of our campaign was beyond expectations, thanks to
              the innovative strategies and tireless efforts put forth by the
              team. They truly understood our vision and helped us connect with
              the masses like never before”
            </div>
            <div className="my-10">Ankit Goswami</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousal;
