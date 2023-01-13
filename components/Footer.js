import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
     <>
    <div className="flex sm:flex-row flex-col-reverse md:justify-between justify-center md:items-start mt-3 gap-10 sm:gap-5 flex-wrap">
      <div className="flex flex-row md:flex-col gap-3">
        <Image
          alt="tizer"
          width={100}
          height={100}
          src="/images/tizer1.png"
          className="cursor-pointer md:h-[100px] md:w-[100px] h-20 w-20"
        />
        <Image
          alt="tizer"
          width={100}
          height={100}
          className="cursor-pointer md:h-[100px] md:w-[100px] h-20 w-20"
          src="/images/tizer2.png"
        />
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold">ارتباط با ویتسل</p>
        <div className="flex flex-col gap-3 mt-3">
          <div className="flex items-center justify-end gap-2">
            <span className="text-gray-500 text-sm">ٰvitdell@gmail.com</span>
            <span>
              <Image
                alt="tizer"
                width={20}
                height={20}
                className="cursor-pointer"
                src="/images/send.png"
              />
            </span>
          </div>
          <div className="flex items-center justify-end gap-2 text-right">
            <span className="text-gray-500 text-sm">۰۸۴۷۷۴۷۳۲۲</span>
            <span>
              <Image
                alt="tizer"
                width={20}
                height={20}
                className="cursor-pointer"
                src="/images/call.png"
              />
            </span>
          </div>
          <div className="flex justify-end items-center gap-2 text-right">
            <span className="text-gray-500 text-sm">
              خیابان ولی عصرنرسیده به سینما آفریقا
            </span>
            <span>
              <Image
                alt="tizer"
                width={20}
                height={20}
                className="cursor-pointer"
                src="/images/map.png"
              />
            </span>
          </div>
          <div className="flex items-center gap-3 justify-center mt-5">
            <Image
              alt="tizer"
              width={30}
              height={30}
              className="cursor-pointer"
              src="/images/whatsapp.png"
            />
            <Image
              alt="tizer"
              width={30}
              height={30}
              className="cursor-pointer"
              src="/images/telegram.png"
            />
            <Image
              alt="tizer"
              width={30}
              height={30}
              className="cursor-pointer"
              src="/images/instagram.png"
            />
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold">محصولات ویتسل</p>
        <div className="flex flex-col gap-3 mt-3">
          <span className="text-gray-500 text-sm">کالای دیجیتال</span>
          <span className="text-gray-500 text-sm">سوپرمارکت</span>
          <span className="text-gray-500 text-sm">گوشی موبایل</span>
          <span className="text-gray-500 text-sm">ابزار الات</span>
          <span className="text-gray-500 text-sm">لوازم تحریر</span>
        </div>
      </div>
      <div className="text-right ">
        <p className="text-sm font-semibold">با ویتسل</p>
        <div className="flex flex-col gap-3 mt-3">
          <span className="text-gray-500 text-sm">درباره ما</span>
          <span className="text-gray-500 text-sm">تماس با ما</span>
          <span className="text-gray-500 text-sm">حریم خصوصی</span>
          <span className="text-gray-500 text-sm">شرایط بازگشت کالا</span>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-end gap-3">
        <Image
          alt="tizer"
          width={80}
          height={80}
          className="cursor-pointer mr-0"
          src="/images/big-logo.png"
        />
        <p className="text-sm font-semibold"> ویتسل</p>
        <span className="text-gray-500 text-xs text-right">
          صرافی هفت ارز پلتفرم ایمن و سریع برای
          <br />
          انجام معاملات ارز دیجیتال در بستری مطمئن
        </span>
      </div>
    </div>
    <div class="border-b-2 border-gray-300 my-3"></div>
    <span className="text-gray-500 text-xs flex flex-row-reverse">کلیه حقوق متعلق به شرکت ویستا است</span>
    </>
  );
};

export default Footer;
