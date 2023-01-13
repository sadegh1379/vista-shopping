import Image from "next/image";
import React from "react";

const items = [
  {
    title: "مد و پوشاک",
    url: "item11",
  },
  {
    title: "موبایل",
    url: "item2",
  },
  {
    title: "کالای دیجیتال",
    url: "item3",
  },
  {
    title: "تجهیزات صنعتی",
    url: "item4",
  },
  {
    title: "سوپرمارکت",
    url: "item5",
  },
  {
    title: "اسباب بازی",
    url: "item6",
  },
  {
    title: "زیبایی و سلامت",
    url: "item7",
  },
  {
    title: "خانه و آشپزخانه",
    url: "item8",
  },
];

const ItemCard = ({ title, url }) => {
  return (
    <div className="w-[100px] gap-1 cursor-pointer h-[100px] bg-gray-1 rounded-xl flex flex-col items-center justify-center">
      <Image
        alt="Mountains"
        width={50}
        height={50}
        src={`/images/${url}.png`}
        className="rounded-xl cursor-pointer"
      />
      <p className="text-xs font-semibold">{title}</p>
    </div>
  );
};
const ProductsCategory = () => {
  return (
    <div className="mt-3 ">
      <div className="grid grid-cols-12 gap-3">
        <div className="hidden md:block md:col-span-4 w-[310px] h-[300px] pt-3 relative">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              alt="Mountains"
              src="/images/banner-7.png"
              layout="fill"
              className="rounded-xl cursor-pointer"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="flex items-center flex-row-reverse gap-3 my-3">
            <span className="w-[35px] h-[35px] bg-gray-1 rounded-full flex justify-center items-center">
              <Image width={20} height={20} src={"/images/category.png"} />
            </span>
            <span className="text-c-black md:font-bold md:text-md text-xs my-3">
              دسته بندی های محبوب
            </span>
            <div className="border border-b-[0.3px] mt-1 border-red-100 flex-1" />
          </div>
          <div className="flex flex-row-reverse flex-wrap gap-3">
            {items.map((item, i) => (
              <ItemCard key={i} title={item.title} url={item.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
