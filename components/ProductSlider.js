import React, { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import Image from "next/image";

const ProductItem = () => {
  return(
    <div className="cursor-pointer">item</div>
  )
}

const ProductSlider = () => {
  const scrollable = useRef(null)

  const scrollIt = (toRight) => {
    const scrollLength = 20 //Calculate your scroll length however you want.
    scrollable.current.scrollBy({left: scrollLength * (toRight ? 10 : -10), behavior: "smooth"});
  }

  return (
    <div className="flex flex-col justify-center my-3">
      <div className="flex items-center flex-row-reverse gap-3">
        <span className="w-[35px] h-[35px] bg-gray-1 rounded-full flex justify-center items-center">
          <Image
            width={20}
            height={20}
            src={"/images/ticket-discount-red.png"}
          />
        </span>
        <span className="text-c-black md:font-semibold md:text-lg text-xs my-3">تخفیف های ویتسل</span>
        <div className="border border-b-[0.3px] mt-1 border-red-100 flex-1" />
        <span className="text-xs cursor-pointer">مشاهده همه</span>
        <ChevronLeftIcon className="w-5 h-5 text-gray-400 mt-1" />
      </div>
      <div ref={scrollable} className="flex gap-5 overflow-x-scroll scrollbar-hide">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,5,7,9,8,1,6,3].map((product, i) => (
            <ProductItem />
          ))}
         
      </div>
      <ArrowLeftIcon onClick={()=>scrollIt(false)} className="w-20 h-20"/>
        <ArrowRightIcon onClick={()=>scrollIt(true)} className="w-20 h-20"/>
    </div>
  );
};

export default ProductSlider;
