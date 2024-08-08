// src/components/HeroSection.tsx
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="container mx-auto text-center py-20">
      <Image src={"/"} alt="Hero Image" width={500} height={500} />
      <h1 className="text-5xl font-bold text-orange-600 mt-10">About Us</h1>
      <p className="mt-6 text-lg text-gray-700">
        Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <div className="flex justify-center gap-10 mt-10">
        <p className="text-gray-600 text-2xl">Youtube</p>
        <p className="text-gray-600 text-2xl">Facebook</p>
        <p className="text-gray-600 text-2xl">Instagram</p>
      </div>
    </section>
  );
};

export default HeroSection;
