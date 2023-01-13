import React, { useRef } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

const ProductItem = () => {
  return (
    <div className="cursor-pointer flex-shrink-0 h-[150px] w-[150px] m-2 p-1">
      <Image
        alt="Mountains"
        className="mx-auto mt-5 w-[60px] h-[50px]"
        width={60}
        height={50}
        src={"/images/shoes.png"}
      />
      <div className="p-1">
        <span className="text-right flex gap-1 items-center mt-5">
          <span className="text-gray-400 text-xs">تومان</span>
          <span className="font-bold">{Number(12300).toLocaleString()}</span>
        </span>
        <span className="flex justify-between items-center">
          <span className="line-through text-gray-400 text-xs">
            4,343,000
          </span>
          <span className="bg-red px-2 py-1 rounded-full text-white text-xs font-medium mt-1">
            34%
          </span>
        </span>
      </div>
    </div>
  );
};

const ProductSlider = ({ title }) => {
  const scrollable = useRef(null);

  const scrollIt = (toRight) => {
    const scrollLength = 20; //Calculate your scroll length however you want.
    scrollable.current.scrollBy({
      left: scrollLength * (toRight ? 10 : -10),
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col justify-center my-3">
      <div className="flex items-center flex-row-reverse gap-3 my-3">
        <span className="w-[35px] h-[35px] bg-gray-1 rounded-full flex justify-center items-center">
          <Image
            width={20}
            height={20}
            src={"/images/ticket-discount-red.png"}
          />
        </span>
        <span className="text-c-black md:font-bold md:text-md text-xs my-3">
          {title}
        </span>
        <div className="border border-b-[0.3px] mt-1 border-red-100 flex-1" />
        <span className="text-xs cursor-pointer">مشاهده همه</span>
        <ChevronLeftIcon className="w-5 h-5 text-gray-400 mt-1" />
      </div>
      <div className="relative">
        <div
          ref={scrollable}
          className="flex overflow-x-scroll scrollbar-hide bg-gray-1 rounded-xl p-3"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 5, 7, 9, 8, 1, 6, 3].map(
            (product, i) => (
              <ProductItem key={i} />
            )
          )}
        </div>
        <div
          onClick={() => scrollIt(false)}
          className="absolute top-[38%] bottom-0 left-0 cursor-pointer
        rotate-45 w-12 h-12 -ml-7 text-right p-2 rounded-br-[30px] rounded-tl-[30px] rounded-tr-[10px] bg-white flex justify-end items-center"
        >
          <span className="mb-4">
            <ArrowLeftIcon className="-rotate-45 w-[15px] h-[15px] text-gray-500" />
          </span>
        </div>
        <div
          onClick={() => scrollIt(true)}
          className="absolute top-[38%] right-0 bottom-0 cursor-pointer
        rotate-45 w-12 h-12 -mr-7 text-right p-2 rounded-br-[30px] rounded-tl-[30px] rounded-bl-[10px] bg-white flex justify-start items-center"
        >
          <span className="mt-4">
            <ArrowRightIcon className="-rotate-45 w-[15px] h-[15px] text-gray-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
