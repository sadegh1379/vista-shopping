import Image from "next/image";
import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import { toPersionNumber } from '../utils/toPersionNumber'
import { ThreeCama } from '../utils/ThreeCama';

const SingleCard = () => {
     console.log()
  return (
    <div className="flex flex-col relative overflow-hidden bg-gray-1">
      <Image
        className="mx-auto mt-5 w-[200px] h-[200px]"
        width={200}
        height={200}
        src={"/images/item1.png"}
      />
      <div className="p-4 leading-10">
        <p className="text-right font-bold mt-3">همزن برقی Sanford</p>
        <span className="text-right flex gap-2 items-center mt-5">
          <span className="text-gray-400 text-sm">تومان</span>
          <span className="font-bold">{Number(12300).toLocaleString()}</span>
        </span>
        <span className="flex justify-between items-center">
        <span className="font-bold line-through text-gray-400">4,343,000</span>
          <span className="bg-red px-2 py-1 rounded-full text-white text-sm font-bold">34%</span>
        </span>
      </div>
      <div className="absolute top-[50%] left-0 bottom-0 cursor-pointer
        rotate-45 w-10 h-10 -ml-4 text-right p-2 rounded-xl bg-white flex justify-center items-center">
          <span className="ml-1"><ArrowLeftIcon className="-rotate-45 w-[15px] h-[15px] text-gray-500"/></span>
     </div>
      <div className="absolute top-[50%] right-0 bottom-0 cursor-pointer
        rotate-45 w-10 h-10 -mr-4 text-right p-2 rounded-xl bg-white flex justify-center items-center">
           <span className="mr-1"><ArrowRightIcon className="-rotate-45 w-[15px] h-[15px] text-gray-500"/></span>
      </div>
    </div>
  );
};

export default SingleCard;
