import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const PersonalValues = () => {
  const values1 = [
    { item: "Quality First" },
    { item: "Always on Time" },
    { item: "100% customers satisfied" },
    { item: "4.5 google rating" },
  ];
  const values2 = [
    { item: "3 months guarantee" },
    { item: "Free project" },
    { item: "Discount on multiple projects" },
    { item: "Best prics for materials" },
  ];
  // const values = [
  //   { item: "Quality First" },
  //   { item: "Always on Time" },
  //   { item: "100% customers satisfied" },
  //   { item: "4.5 google rating" },
  //   { item: "3 months guarantee" },
  //   { item: "Free project" },
  //   { item: "Discount on multiple projects" },
  //   { item: "Best prics for materials" },
  // ];
  return (
    <div className="flex flex-col justify-center items-center w-full px-2 sm:px-6 gap-10 py-14 bg-slate-100">
      <h2 className="text-3xl text-gray-800 font-semibold">Why Me</h2>
      <div className="flex flex-col sm:flex-row justify-between items-start w-2/3 sm:w-full gap-4 sm:gap-8">
        <div className="flex flex-col justify-center items-start w-full gap-4">
          {values1.map((el, i) => (
            <div className="flex justify-start items-center gap-4 w-full">
              <AiFillCheckCircle className="shrink-0 text-2xl text-orange-500" />
              <p className="text-xl text-gray-700 font-semibold">{el.item}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-start w-full gap-4">
          {values2.map((el, i) => (
            <div className="flex justify-start items-center gap-4 w-full">
              <AiFillCheckCircle className="shrink-0 text-2xl text-orange-500" />
              <p className="text-xl text-gray-700 font-semibold">{el.item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="flex flex-col justify-center items-center w-full px-2 sm:px-6 gap-10 py-14 bg-slate-100">
    //   <h2 className="text-3xl text-gray-800 font-semibold">Why Me</h2>
    //   <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-2 w-2/3 sm:w-full gap-4 bg-green-300">
    //     {values.map((el, i) => (
    //       <div className="flex justify-start items-center gap-4 w-full">
    //         <AiFillCheckCircle className="shrink-0 text-2xl text-orange-500" />
    //         <p className="text-xl text-gray-700 font-semibold">{el.item}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default PersonalValues;
