import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const PersonalValues = () => {
  const values = [
    { item: "Quality First" },
    { item: "Always on Time" },
    { item: "100% customers satisfied" },
    { item: "4.5 google rating" },
    { item: "3 months guarantee" },
    { item: "Free project" },
    { item: "Discount on multiple projects" },
    { item: "Best prics for materials" },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full px-2 sm:px-6 gap-10 py-14 bg-slate-100">
      <h2 className="text-3xl text-gray-800 font-semibold">Why Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-2/3 sm:w-full gap-4">
        {values.map((el, i) => (
          <div className="flex justify-center items-center gap-4">
            <AiFillCheckCircle className="shrink-0 text-2xl text-green-600" />
            <p className="text-xl text-gray-700 font-semibold">{el.item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalValues;
