import React from "react";
import { AiFillHome } from "react-icons/ai";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-7xl h-[80vh] gap-8">
      <h3 className="text-2xl font-medium">
        Wygląda na to, że ta strona nie istnieje
      </h3>
      <a
        href="/"
        className="group px-6 py-2 rounded-xl text-white font-medium shadow-lg border-2 border-transparent hover:border-orange-600 hover:shadow-xl bg-orange-600 hover:bg-white transition ease-in-out delay-50 cursor-pointer"
      >
        <div className="flex justify-start items-center gap-4">
          <AiFillHome className="shrink-0 text-xl text-white group-hover:text-orange-600 transition ease-in-out delay-50 cursor-pointer" />
          <span className="whitespace-nowrap group-hover:text-orange-600 transition ease-in-out delay-50 cursor-pointer">
            Strona Główna
          </span>
        </div>
      </a>
    </div>
  );
};

export default NotFound;
