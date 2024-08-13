import { Metadata } from "next";
import HomeCarousal from "./_components/HomeCarousal";
import HomeHeroSection from "./_components/HomeHeroSection";
import HomeMainSection from "./_components/HomeMainSection";
import BottomLinks from "@/components/BottomLinks";

export const metadata: Metadata = {
  title: "Home | Media Solutions Pvt. Ltd.",
  description: "Media Solutions Pvt. Ltd. Company",
};

export default function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <hr className="w-full border-gray-600 mt-8 mb-8 !my-40" />
      <HomeMainSection />
      <HomeCarousal />
      <div className="max-sm:block hidden">
        <BottomLinks />
      </div>
    </main>
  );
}
