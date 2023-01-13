import Image from "next/image";
import React from "react";

const ThirdBanner = () => {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 gap-3 my-3">
      <div className="grid grid-rows-2 gap-3 h-[300px]">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            alt="Mountains"
            src="/images/banner-4.png"
            layout="fill"
            className="rounded-xl cursor-pointer"
          />
        </div>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            alt="Mountains"
            src="/images/banner-5.png"
            layout="fill"
            className="rounded-xl cursor-pointer"
          />
        </div>
      </div>
      <div>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            alt="Mountains"
            src="/images/banner-6.png"
            layout="fill"
            className="rounded-xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdBanner;
