import { config } from "@/utils/config";
import Link from "next/link";
import React from "react";

const BottomLinks = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center py-24">
        <div className=" items-center flex gap-8 text-custom-gray">
          <Link
            href={config.links.youtube}
            className="leading-about max-lg:text-xl hover:text-primary-red text-[35px] font-semibold"
          >
            Youtube
          </Link>
          <Link
            href={config.links.facebook}
            className="leading-about max-lg:text-xl hover:text-primary-blue text-[35px] font-semibold"
          >
            Facebook
          </Link>
          <Link
            href={config.links.instagram}
            className="leading-about max-lg:text-xl hover:text-primary-pink text-[35px] font-semibold"
          >
            Instagram
          </Link>
        </div>
      </div>
    </>
  );
};

export default BottomLinks;
