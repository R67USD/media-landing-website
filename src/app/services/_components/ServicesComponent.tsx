/* src/components/ServicesComponent.tsx */
import BottomLinks from "@/components/BottomLinks";
import { t } from "@/utils/translation";

import Image from "next/image";
import React from "react";

const ServicesComponent: React.FC = () => {
  return (
    <div className="w-full font-sans">
      <div className="mx-auto">
        <div className="flex flex-col items-start justify-center my-10">
          <div className="container">
            <h2 className="max-sm:text-[35px] text-[40px] font-bold pb-10 text-primary-orange mb-4">
              {t("services.title")}
            </h2>
            <h2 className="max-sm:text-[28px] max-sm:font-semibold text-4xl font-bold text-purple-primary mb-4">
              Political Campaigns
            </h2>
            <div className="flex flex-col justify-between md:flex-row items-center md:items-start gap-10 w-full">
              <div className="max-w-4xl max-sm:pt-2 pt-8 text-lg leading-relaxed md:mt-0 ">
                <p className="max-sm:text-[20px] max-sm:!font-normal max-sm:leading-[30px] text-2xl font-medium leading-services tracking-tight text-text-gray">
                  Empower your political narrative with precision-targeted
                  social media strategies. We leverage data-driven insights and
                  platform algorithms to reach your desired audience, drive
                  engagement, and amplify your message across multiple channels
                </p>
              </div>
              <div className="max-xl:hidden translate-y-[-150px] translate-x-[-100px]">
                <Image
                  className=""
                  src={"/images/mic-icon.svg"}
                  alt="Team working together"
                  width={276}
                  height={290}
                />
              </div>
            </div>
          </div>
          <hr className="w-full border-gray-600 mt-8 mb-16 my-24" />

          <div className="container">
            <h2 className="max-sm:text-[28px] max-sm:font-semibold text-3xl font-bold text-purple-primary mb-4">
              Brand Consulting
            </h2>
            <div className="flex flex-col justify-between md:flex-row items-center md:items-start gap-10 w-full">
              <div className="max-w-4xl max-sm:pt-2 pt-8 text-lg leading-relaxed md:mt-0 ">
                <p className="text-text-gray max-sm:leading-[30px] max-sm:text-[20px] max-sm:!font-normal max-sm:pt-2 text-2xl font-medium max-sm:leading-2 leading-10 tracking-tight">
                  Elevate your brand with bespoke social media consulting. From
                  crafting compelling content strategies to optimizing your
                  online presence, our experts help you build a brand that
                  resonates with your audience and stands out in the crowded
                  digital landscape.
                </p>
              </div>
              <div className="max-xl:hidden">
                <Image
                  className=""
                  src={"/images/debate-icon.svg"}
                  alt="Debate icon"
                  width={427}
                  height={427}
                />
              </div>
            </div>
          </div>
          <hr className="w-full border-gray-600 mt-8 mb-16 my-24" />

          <div className="container">
            <h2 className="max-sm:text-[28px] max-sm:font-semibold text-3xl font-bold text-purple-primary mb-4">
              Digital Marketing
            </h2>
            <div className="flex flex-col justify-between md:flex-row items-center md:items-start gap-10 w-full">
              <div className="max-w-4xl pt-8 max-sm:pt-2 text-lg leading-relaxed md:mt-0 ">
                <p className="text-text-gray max-sm:leading-[30px] max-sm:text-[20px] max-sm:!font-normal max-sm:pt-2 text-2xl font-medium max-sm:leading-2 leading-10 tracking-tight">
                  Harness the power of social media with tailored digital
                  marketing campaigns. Our innovative approaches to content
                  creation, influencer partnerships, and paid advertising ensure
                  that your brand not only reaches but also converts your target
                  audience
                </p>
              </div>
              <div className="max-xl:hidden">
                <Image
                  className=""
                  src={"/images/mobile-speaker-icon.svg"}
                  alt="Mobile speaker"
                  width={416}
                  height={416}
                />
              </div>
            </div>
          </div>
          <hr className="w-full border-gray-600 mt-8 mb-16 my-24" />

          <div className="container">
            <h2 className="max-sm:text-[28px] max-sm:font-semibold text-3xl font-bold text-purple-primary mb-4">
              Events
            </h2>
            <div className="flex flex-col justify-between md:flex-row items-center md:items-start gap-10 w-full">
              <div className="max-w-4xl pt-8 max-sm:pt-2 text-lg leading-relaxed md:mt-0 ">
                <p className="text-text-gray max-sm:leading-[30px] max-sm:text-[20px] max-sm:!font-normal text-2xl font-medium max-sm:leading-2 leading-10 tracking-tight">
                  Maximize your event’s impact with our comprehensive social
                  media event strategies. We handle everything from pre-event
                  buzz to live coverage and post-event engagement, ensuring your
                  event is the talk of the town long after it ends
                </p>
              </div>
              <div className="max-xl:hidden">
                <Image
                  className=""
                  src={"/images/calendar-people-icon.svg"}
                  alt="Calender icon"
                  width={538.5}
                  height={359}
                />
              </div>
            </div>
          </div>

          <hr className="w-full border-gray-600 mt-8 mb-16 my-24" />

          <BottomLinks />
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
