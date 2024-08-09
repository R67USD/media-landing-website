/* src/components/AboutUsMainSection.tsx */
import { t } from "@/utils/translation";
import Image from "next/image";
import React from "react";

const AboutUsMainSection: React.FC = () => {
  return (
    <div className="w-full pt-10">
      <div className="mx-auto">
        <div className="flex flex-col items-start justify-center my-10">
          <h2 className="text-3xl font-bold text-primary-orange mb-4">
            {t("aboutUs.title")}
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="max-w-2xl text-lg leading-relaxed md:mt-0 pt-10 ml-4">
              <p className="text-gray-800 text-2xl font-semibold leading-10 tracking-tight">
                {t("aboutUs.description")}
              </p>
            </div>
            <div>
              <Image
                src={"/images/about-us-banner.svg"}
                alt="Team working together"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMainSection;
