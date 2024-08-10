/* src/components/AboutUsMainSection.tsx */
import { t } from "@/utils/translation";
import Image from "next/image";
import React from "react";

const AboutUsMainSection: React.FC = () => {
  return (
    <div className="container w-full">
      <div className="mx-auto">
        <div className="flex flex-col items-start justify-center my-10">
          <h2 className="text-3xl font-bold text-primary-orange mb-4">
            {t("aboutUs.title")}
          </h2>
          <div className="flex flex-col justify-between md:flex-row items-center md:items-start gap-10 w-full">
            <div className="max-w-4xl pt-12 text-lg leading-relaxed md:mt-0 ">
              <p className="text-gray-800 text-2xl font-semibold leading-10 tracking-tight">
                {t("aboutUs.description")}
              </p>
            </div>
            <div className="">
              <Image
                className=""
                src={"/images/about-us-banner.svg"}
                alt="Team working together"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-center py-24">
            <div className=" items-center flex gap-8 text-custom-gray">
              <span className="leading-about max-lg:text-xl text-[35px] font-semibold">
                Youtube
              </span>
              <span className="leading-about max-lg:text-xl text-[35px] font-semibold">
                Facebook
              </span>
              <span className="leading-about max-lg:text-xl text-[35px] font-semibold">
                Instagram
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMainSection;
