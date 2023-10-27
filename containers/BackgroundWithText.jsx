import React from "react";
import { BsTelephone } from "react-icons/bs";

const BackgroundWithText = () => {
  return (
    <div className="bg-[url('../assets/landscape.jpg')] bg-fixed bg-center flex justify-start items-center w-full py-12">
      <div className="w-full sm:w-2/3 md:w-1/2 m-4 sm:ml-8 p-10 rounded-xl bg-white">
        <div className="flex flex-col justify-center items-start w-5/6 sm:w-full gap-2 lg:gap-6">
          <h4 className="sm:text-lg font-medium uppercase tracking-widest">
            10+ years of experience
          </h4>
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1 className="text-4xl leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight text-gray-800 font-semibold">
              Fotowoltaika Elektryka
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-semibold">
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
    </div>
  );
};

export default BackgroundWithText;
