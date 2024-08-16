import { HomeMainInfoCards } from "@/utils/constants";
import { t } from "@/utils/translation";
import Image from "next/image";
import React from "react";

const HomeMainSection = () => {
  return (
    <div className="container flex flex-col items-center justify-center max-sm:mt-12 mt-28 bg-transparent">
      <h4 className="text-[14px] tracking-[.425rem] text-center font-semibold text-purple-primary">
        {t("home.main.title")}
      </h4>
      <div className="max-sm:hidden max-sm:text-[24px] text-[38px] font-[500] text-primary-orange mt-12 w-[80%] text-center">
        {t("home.main.description")}
      </div>
      <div
        style={{
          fontSize: "1.2rem",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          letterSpacing: "-0.06rem",
        }}
        className="sm:hidden text-[38px] font-[500] text-primary-orange mt-12 w-[80%] text-center"
      >
        <div className="">Share, Like, and Grow with</div>
        <div className="">Our Innovative Social Media</div>
        <div className="">Strategies</div>
      </div>
      <div>
        <Image
          src={"/images/white-banner.svg"}
          alt="Home Main Section Image"
          width={931.5}
          height={621}
        />
      </div>

      <div className="pt-20">
        <div className="max-sm:px-4 md:grid grid-cols-3 md:grid-rows-3 max-md:space-y-4">
          {HomeMainInfoCards.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col max-sm:gap-2 max-sm:items-start items-center justify-center"
              >
                <div>
                  <Image
                    src={item.image}
                    alt="Hero Image"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="max-sm:font-bold text-black text-[18px] font-[500]">
                  {item.title}
                </div>
                <div className="text-black text-[16px] max-sm:leading-[26px] leading-[30px] max-md:text-left text-center max-md:p-0 p-4">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeMainSection;
