import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const ValuesColumn = ({ values }) => {
  return (
    <div className="flex flex-col justify-center items-start flex-shrink-0 sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] gap-4">
      {values.map((el, i) => (
        <div
          key={`values1-${i}`}
          className="flex justify-start items-start gap-4"
        >
          <AiFillCheckCircle className="shrink-0 text-2xl text-orange-500" />
          <p className="text-xl text-gray-700 font-semibold">{el.item}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuesColumn;
