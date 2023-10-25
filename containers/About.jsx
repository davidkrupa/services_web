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
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-[400px] md:max-w-5xl gap-8 px-4 py-10">
      {testArray.map((item, i) => (
        <IconWithText details={details} key={i} />
      ))}
    </div>
  );
};

export default About;
