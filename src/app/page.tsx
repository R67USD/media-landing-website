import HomeCarousal from "./_components/HomeCarousal";
import HomeHeroSection from "./_components/HomeHeroSection";
import HomeMainSection from "./_components/HomeMainSection";

export default function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <hr className="w-full border-gray-600 mt-8 mb-8 my-24" />
      <HomeMainSection />
      <HomeCarousal />
    </main>
  );
}
