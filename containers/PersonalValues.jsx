import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

import ValuesColumn from "@/components/ValuesColumn";

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
    {
      item: "Discount on multiple projects wtet trete rettetertet tret retet etr",
    },
    { item: "Best prics for materials" },
  ];

  return (
    <section
      data-test="personal-values"
      className="flex flex-col justify-center items-center w-full px-2 sm:px-6 gap-10 py-14 bg-slate-100"
    >
      <h2 className="text-3xl text-gray-800 font-semibold">Why Me</h2>
      <div className="flex flex-col sm:flex-row justify-around items-start flex-shrink-0 sm:w-full gap-4 sm:gap-8">
        <ValuesColumn values={values1} />
        <ValuesColumn values={values2} />
      </div>
    </section>
  );
};

export default PersonalValues;
