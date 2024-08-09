import Image from "next/image";
import React from "react";

const HomeMainSection = () => {
  return (
    <div className="container flex flex-col items-center justify-center mt-28 bg-transparent">
      <h4 className="text-base font-semibold text-purple-primary">
        Building Connections, One Click at a Time.
      </h4>
      <div className="text-[38px] font-[500] text-primary-orange mt-12 w-[80%] text-center">
        Join the Community of Engaged Audiences. Share, Like, and Grow with Our
        Innovative Social Media Strategies
      </div>
      <div>
        <Image
          src={"/images/home-main-transparent.png"}
          alt="Home Main Section Image"
          width={931.5}
          height={621}
        />
      </div>

      <div className="pt-20">
        <div className="md:grid grid-cols-3 md:grid-rows-3 max-md:space-y-4">
          <div className="flex flex-col max-md:items-start items-center justify-center">
            <div>
              <Image
                src={"/images/bell-icon.svg"}
                alt="Hero Image"
                width={24}
                height={24}
              />
            </div>
            <div className="text-[18px] font-[500]">Targeted Advertising</div>
            <div className="text-[16px] leading-[30px] max-md:text-left text-center max-md:p-0 p-4">
              Reach your ideal audience with precision. Tailor ads to specific
              demographics, interests, and behaviors for maximum impact
            </div>
          </div>
          <div className="flex flex-col max-md:items-start items-center justify-center">
            <div>
              <Image
                src={"/images/bell-icon.svg"}
                alt="Hero Image"
                width={24}
                height={24}
              />
            </div>
            <div className="text-[18px] font-[500]">Engagement Strategies</div>
            <div className="text-[16px] leading-[30px] max-md:text-left text-center max-md:p-0 p-4">
              Boost interaction with your brand. Implement tactics that
              encourage likes, shares, and comments to grow your online
              community.
            </div>
          </div>
          <div className="flex flex-col max-md:items-start items-center justify-center">
            <div>
              <Image
                src={"/images/bell-icon.svg"}
                alt="Hero Image"
                width={24}
                height={24}
              />
            </div>
            <div className="text-[18px] font-[500]">Targeted Advertising</div>
            <div className="text-[16px] leading-[30px] max-md:text-left text-center max-md:p-0 p-4">
              Reach your ideal audience with precision. Tailor ads to specific
              demographics, interests, and behaviors for maximum impact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainSection;
