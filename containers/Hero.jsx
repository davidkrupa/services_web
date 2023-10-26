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
      <div className="flex flex-col justify-center items-start w-5/6 sm:w-1/2 md:pl-8 py-6 gap-6 lg:gap-10">
        <h4 className="text-lg font-medium uppercase tracking-widest">
          10+ years of experience
        </h4>
        <div className="flex flex-col gap-2 lg:gap-4">
          <h1 className="text-5xl leading-tight lg:text-6xl lg:leading-tight text-gray-800 font-semibold">
            Fotowoltaika Elektryka
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-700 font-semibold">
            Pełny montaż i serwis
          </h2>
        </div>
        <div className="flex justify-start items-center flex-wrap mt-8 gap-5">
          <a className="flex px-8 py-3 rounded-xl text-slate-50  font-medium shadow-lg hover:shadow-xl bg-orange-500 hover:bg-orange-600 transition ease-in-out delay-50 cursor-pointer">
            <div className="flex justify-start items-center gap-4">
              <BsTelephone className="shrink-0 text-xl text-slate-50" />
              Zadzwoń
            </div>
          </a>
          <span className="text-lg font-medium text-slate-900">
            0-555-666-888
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
