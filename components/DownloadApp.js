import Image from "next/image";
import React from "react";

const DownloadApp = () => {
  return (
    <div className="py-0 lg:py-16 lg:px-5 px-0 mt-5 lg:mt-16">
      <div className="bg-red w-[100%] h-auto lg:w-[80%] lg:h-[150px] mx-auto rounded-xl p-1 grid grid-cols-12 relative">
        <div className="hidden lg:block lg:col-span-4">
          <Image
            alt="Mountains"
            width={200}
            height={300}
            src="/images/phone.png"
            className="absolute bottom-0 left-5"
          />
        </div>
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-between">
          <p className="text-white text-right font-bold m-5">
            {" "}
            ویتسل را همیشه همراه داشته باشید!
          </p>
          <div className="flex items-center justify-end gap-3 mr-5 flex-wrap my-5">
            <div className="flex cursor-pointer items-center justify-around w-[120px] transparent-bg rounded-full gap-1 p-2 ">
              <span className="text-white text-xs font-medium">
                دانلود مستقیم
              </span>
              <Image
                alt="Mountains"
                width={20}
                height={20}
                src="/images/app1.png"
                className=""
              />
            </div>
            <div className="flex cursor-pointer items-center justify-around w-[120px] transparent-bg rounded-full gap-2 p-2 ">
              <span className="text-white text-xs font-medium">
                دانلود از مایکت
              </span>
              <Image
                alt="Mountains"
                width={20}
                height={20}
                src="/images/app2.png"
                className=""
              />
            </div>
            <div className="flex cursor-pointer items-center justify-around w-[120px] transparent-bg rounded-full gap-2 p-2 ">
              <span className="text-white text-xs font-medium">
                دانلود از بازار
              </span>
              <Image
                alt="Mountains"
                width={20}
                height={20}
                src="/images/app3.png"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
