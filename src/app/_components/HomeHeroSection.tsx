import Image from "next/image";
import React from "react";

const HomeHeroSection = () => {
  return (
    <div className="flex justify-between max-md:flex-col container">
      <div className="lg:w-1/2 flex flex-col max-sm:text-center gap-4 max-md:mt-12 mt-32">
        <div className="max-sm:text-left max-sm:leading-[24px] max-sm:text-[20px] text-[40px] font-semibold text-purple-primary sm:leading-hero">
          Transforming Digital Campaigns with Creative Excellence.
        </div>
        <div className="max-sm:hidden max-sm:text-[35px] max-sm:truncate  text-[40px] font-semibold text-primary-orange leading-hero">
          Engage, Influence, and Inspire with our Customized Political Campaigns
          and Brand Content Strategies
        </div>
        <div className="sm:hidden text-left max-sm:text-[35px] truncate text-[40px] font-semibold text-primary-orange leading-hero">
          <div className="font-semibold text-primary-orange leading-hero">
            Political Campaigns,
          </div>
          <div>Brand Content ...</div>
        </div>
      </div>
      <div className="md:hidden max-md:flex max-md:gap-4 max-md:mt-10">
        <button>
          <Image
            src={"/images/like-icon.svg"}
            alt="Like icon"
            width={48}
            height={48}
          />
        </button>
        <button>
          <Image
            src={"/images/insta-icon.svg"}
            alt="Like icon"
            width={48}
            height={48}
          />
        </button>
      </div>
      <div className="max-lg:hidden">
        <Image
          src={"/images/home-hero.svg"}
          alt="Team working together"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default HomeHeroSection;
