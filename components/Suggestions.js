import { ChevronLeftIcon } from "@heroicons/react/solid";
import Image from "next/image";

const CardItem = () => {
  return (
    <div
      className="bg-gray-1 cursor-pointer rounded-xl p-2 relative flex flex-row no-wrap items-center
    justify-between"
    >
      <div className="flex flex-col">
        <p className="text-xs flex flex-nowrap font-bold mb-0 text-left self-end">
          کتونی نایک 120
        </p>
        <span className="text-right flex gap-2 items-center mt-5">
          <span className="text-gray-400 text-sm">تومان</span>
          <span className="font-bold">{Number(12300).toLocaleString()}</span>
        </span>
        <span className="flex justify-between items-center">
          <span className="font-medium flex-1 text-xs line-through text-gray-400">
            4,343,000
          </span>
          <span className="bg-red px-2 py-1 rounded-full text-white text-xs font-medium mx-2">
            34%
          </span>
        </span>
      </div>
      <div>
        <Image width={88} height={88} alt="fire" src={"/images/item10.png"} />
      </div>
      <Image
        width={20}
        height={25}
        alt="fire"
        className="absolute top-0 left-2"
        src={"/images/fire-a.jpg"}
      />
    </div>
  );
};
const Suggestions = () => {
  return (
    <div>
      <div className="flex items-center flex-row-reverse gap-3 my-3">
        <span className="w-[35px] h-[35px] bg-gray-1 rounded-full flex justify-center items-center">
          <Image
            width={20}
            height={20}
            alt="fire"
            src={"/images/fire-red.png"}
          />
        </span>
        <span className="text-c-black md:font-bold md:text-md text-xs my-3">
          پیشنهادات شگفت انگیر
        </span>
        <div className="border border-b-[0.3px] mt-1 border-red-100 flex-1" />
        <span className="text-xs cursor-pointer">مشاهده همه</span>
        <ChevronLeftIcon className="w-5 h-5 text-gray-400 mt-1" />
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="md:col-span-9 col-span-12 grid grid-cols-1 md:grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
            <CardItem />
          ))}
        </div>
        <div className="hidden cursor-pointer md:col-span-3 md:flex flex-col justify-between bg-gray-1 p-2 rounded-xl relative">
          <Image
            width={170}
            height={170}
            alt="fire"
            className="mx-auto w-[170px] h-[170px]"
            src={"/images/item1.png"}
          />
          <p className="text-right text-sm font-bold">همزن برقی Sanford</p>
          <span className="text-right flex gap-2 items-center">
            <span className="text-gray-700 text-sm">تومان</span>
            <span className="font-bold text-xl">
              {Number(12300).toLocaleString()}
            </span>
          </span>
          <Image
            width={25}
            height={35}
            alt="fire"
            className="absolute top-0 left-3"
            src={"/images/fire-a.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
