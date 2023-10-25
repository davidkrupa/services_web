import React from "react";
import heroImage from "../assets/heroImage.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-center w-full px-2 sm:px-6 py-12 gap-10">
      <div className="w-full sm:w-1/2">
        <Image
          src={heroImage}
          width={500}
          height={500}
          alt="background"
          priority
          className="rounded-md shadow-xl mx-auto"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:w-1/2 py-6 gap-4">
        <h1 className="text-5xl text-gray-800 font-semibold">Service Title</h1>
        <h2 className="text-3xl text-gray-800 font-semibold">
          Catchy Subheading
        </h2>
        <a className="px-6 py-2 rounded-xl shadow-lg hover:shadow-xl bg-orange-500 hover:bg-orange-600 transition ease-in-out delay-50">
          <p className="text-white font-medium">Call now</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
