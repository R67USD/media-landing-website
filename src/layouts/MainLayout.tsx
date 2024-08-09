import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Image
        src={"/images/main-gradient.svg"}
        alt="Home Main Section Image"
        style={{
          width: "100%",
          height: "621px",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          objectFit: "cover",
        }}
        className="max-sm:w-full"
        width={100}
        height={621}
      />
      <div className="min-h-screen h-full">
        <Header />
        {children}
        <hr className="w-full border-gray-600 mt-8 mb-8 my-24" />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
