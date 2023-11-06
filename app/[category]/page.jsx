import IconWithText from "@/components/IconWithText";
import React from "react";
import { BsFacebook, BsTelephone } from "react-icons/bs";

import croppedImage from "../../assets/croppedImage.jpg";

const Category = async ({ params }) => {
  console.log(`PARAMS: ${params.category}`);

  const sampleData = [
    {
      title: "Some title",
      icon: <BsFacebook />,
      text: "short description of the image",
    },
    {
      title: "Some title",
      icon: <BsFacebook />,
      text: "short description of the image",
    },
    {
      title: "Some title",
      icon: <BsFacebook />,
      text: "short description of the image",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-7xl py-14 gap-10">
      <h1 className="text-5xl text-gray-800 font-semibold">Title</h1>
      <h2 className="text-2xl text-gray-800 font-semibold">
        Subtitle or short description
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[500px] md:max-w-5xl gap-14 md:gap-10 px-4 py-10">
        {sampleData?.map((item, i) => (
          <IconWithText details={item} key={i} />
        ))}
      </div>

      <div className="flex flex-col justify-center items-center py-28 w-full bg-primary-50">
        <h2 className="text-2xl text-gray-800 font-semibold">
          Message or call
        </h2>
        <div className="flex justify-start items-center flex-wrap mt-8 gap-5">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="group px-6 py-2 rounded-xl text-primary-50 font-medium shadow-lg border-2 border-transparent hover:border-primary-700 hover:shadow-xl bg-primary-700 hover:bg-white transition ease-in-out delay-50 cursor-pointer"
          >
            <div className="flex justify-start items-center gap-4">
              <BsFacebook className="shrink-0 text-xl text-primary-50 group-hover:text-primary-700 transition ease-in-out delay-50 cursor-pointer" />
              <span className="whitespace-nowrap group-hover:text-primary-700 transition ease-in-out delay-50 cursor-pointer">
                Facebook
              </span>
            </div>
          </a>
          <a
            href=""
            className="group px-6 py-2 rounded-xl text-primary-50 font-medium shadow-lg border-2 border-transparent hover:border-primary-700 hover:shadow-xl bg-primary-700 hover:bg-white transition ease-in-out delay-50 cursor-pointer"
          >
            <div className="flex justify-start items-center gap-4">
              <BsTelephone className="shrink-0 text-xl text-primary-50 group-hover:text-primary-700 transition ease-in-out delay-50 cursor-pointer" />
              <span className="whitespace-nowrap group-hover:text-primary-700 transition ease-in-out delay-50 cursor-pointer">
                00 0000 0000
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;

export async function generateStaticParams() {
  return [{ category: "winter" }, { category: "summer" }];
}
