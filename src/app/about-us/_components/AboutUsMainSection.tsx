/* src/components/AboutUsMainSection.tsx */
import BottomLinks from "@/components/BottomLinks";
import { t } from "@/utils/translation";
import Image from "next/image";
import React from "react";

const AboutUsMainSection: React.FC = () => {
  return (
    <div className="container w-full">
      <div className="mx-auto">
        <div className="flex flex-col items-start justify-center my-10">
          <h2 className="max-sm:text-[35px] text-[40px] font-bold text-primary-orange mb-4">
            {t("aboutUs.title")}
          </h2>
          <div className="flex flex-col justify-between md:flex-row items-center md:items-start gap-10 w-full">
            <div className="max-w-4xl pt-12 text-lg leading-relaxed md:mt-0 ">
              <p className="text-gray-800 max-sm:text-[20px] text-[35px] mt-24 font-semibold leading-10 tracking-tight">
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

          <BottomLinks />
        </div>
      </div>
    </div>
  );
};

export default AboutUsMainSection;
