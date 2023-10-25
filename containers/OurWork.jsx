import IconWithText from "@/components/IconWithText";
import Multicolumn from "@/components/Multicolumn";
import React from "react";
import { AiFillHome } from "react-icons/ai";

const About = () => {
  const testArray = [1, 2, 3];
  const details = {
    icon: <AiFillHome />,
    title: "Title",
    text: "some text about content of this container shortly describing some facts about the company",
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10 px-2 sm:px-6 py-14">
      <h2 className="text-3xl text-gray-800 font-semibold">
        What are we doing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[400px] md:max-w-5xl gap-8 px-4 py-10">
        {testArray.map((item, i) => (
          <IconWithText details={details} key={i} />
        ))}
      </div>
    </div>
  );
};

export default About;
