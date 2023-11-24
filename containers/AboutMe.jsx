import React from "react";
import heroImage from "../assets/heroImage.jpg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center px-2 sm:px-6 py-14 gap-10"
    >
      <h2 className="text-3xl text-gray-800 font-semibold">About Me</h2>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center w-full gap-10  px-2 sm:px-6">
        <div className="w-5/6 sm:w-1/2">
          <h3 className="text-3xl text-gray-800 font-semibold mb-8 pl-2 border-l-4 border-orange-400">
            Full Name
          </h3>
          <p>
            Few words describing who am I, what I am doing and why I am
            passionate about it. Few words describing who am I, what I am doing
            and why I am passionate about it. Few words describing who am I,
            what I am doing and why I am passionate about it.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <Image
            src={heroImage}
            width={400}
            height={400}
            alt="background"
            className="rounded-md shadow-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
