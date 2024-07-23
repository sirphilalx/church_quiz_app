import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <main className="w-full">
      <div className="relative w-full h-[700px] pt-36">
        <Image
          src="/assets/images/church_building.jpg"
          layout="fill"
          objectFit="cover"
          alt="church building"
        />
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>{" "}
        {/* Overlay */}
      </div>
    </main>
  );
};

export default Home;
