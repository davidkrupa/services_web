import React from "react";
import exampleImg1 from "../assets/exampleImg1.jpg";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-center w-full px-2 sm:px-6 py-12 gap-10">
      <div className="w-full sm:w-1/2">
        <Image
          src={exampleImg1}
          width={500}
          height={500}
          alt="background"
          priority
          className="rounded-md shadow-xl mx-auto"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:w-1/2 py-6 gap-6">
        <h1 className="text-center text-6xl text-gray-800 font-semibold leading-tight">
          Fotowoltaika Elektryka
        </h1>
        <h2 className="text-center text-3xl text-gray-700 font-semibold">
          Pełny montaż i serwis
        </h2>
        <a className="px-8 py-3 mt-3 rounded-xl text-slate-50  font-medium shadow-lg hover:shadow-xl bg-orange-500 hover:bg-orange-600 transition ease-in-out delay-50 cursor-pointer">
          <div className="flex justify-start items-center gap-4">
            <BsTelephone className="shrink-0 text-xl text-slate-50" />
            Zadzwoń
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
