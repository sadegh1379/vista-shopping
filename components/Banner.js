import Image from "next/image";
import React from "react";
import SingleCard from "./SingleCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";

const Banner = () => {
  return (
    <div className="grid grid-cols-12 gap-4 my-4">
      <div className="col-span-3 hidden md:block">
        <SingleCard />
      </div>
      <div className="md:col-span-9 col-span-12 h-32 md:h-auto  overflow-hidden relative">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            alt="Mountains"
            src="/images/banner.png"
            layout="fill"
            className="rounded-xl"
          />
        </div>
        <div
          className="absolute top-[45%] left-0 bottom-0 cursor-pointer
        rotate-45 w-10 h-10 -ml-4 text-right p-2 rounded-xl bg-white flex justify-center items-center"
        >
          <span className="ml-1">
            <ArrowLeftIcon className="-rotate-45 w-[15px] h-[15px] text-gray-500" />
          </span>
        </div>
        <div
          className="absolute top-[45%] right-0 bottom-0 cursor-pointer
        rotate-45 w-10 h-10 -mr-4 text-right p-2 rounded-xl bg-white flex justify-center items-center"
        >
          <span className="mr-1">
            <ArrowRightIcon className="-rotate-45 w-[15px] h-[15px] text-gray-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
