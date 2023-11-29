import React from "react";
import exampleImg1 from "assets/exampleImg1.jpg";
import Image from "next/image";
import { BsFacebook, BsTelephone } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col sm:flex-row justify-start items-center w-full sm:px-6 pb-6 sm:py-12 gap-10"
    >
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
      <div className="flex flex-col justify-center items-start w-5/6 sm:w-1/2 md:pl-8 px-2 py-6 gap-6 lg:gap-10">
        <h4 className="sm:text-lg font-medium uppercase tracking-widest">
          10+ Lat Doświadczenia
        </h4>
        <div className="flex flex-col gap-4 md:gap-8">
          <h1
            data-test="hero-title"
            className="text-5xl leading-tight lg:text-6xl lg:leading-tight text-gray-800 font-semibold"
          >
            Fotowoltaika Elektryka
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-800 font-semibold">
            Pełny montaż i serwis
          </h2>
        </div>
        <div
          data-test="hero-buttons-container"
          className="flex justify-start items-center flex-wrap mt-8 gap-5"
        >
          <a
            href=""
            target="_blank"
            className="group px-6 py-2 rounded-xl text-primary-50 font-medium shadow-lg border-2 border-transparent hover:border-secondary-600 hover:shadow-xl bg-secondary-500 hover:bg-white transition ease-in-out delay-50 cursor-pointer"
          >
            <button className="flex justify-start items-center gap-4">
              <BsFacebook className="shrink-0 text-xl text-primary-50 group-hover:text-secondary-600 transition ease-in-out delay-50 cursor-pointer" />
              <span className="whitespace-nowrap group-hover:text-secondary-600 transition ease-in-out delay-50 cursor-pointer">
                Facebook
              </span>
            </button>
          </a>
          <a
            href=""
            className="group px-6 py-2 rounded-xl text-primary-50 font-medium shadow-lg border-2 border-transparent hover:border-secondary-600 hover:shadow-xl bg-secondary-500 hover:bg-white transition ease-in-out delay-50 cursor-pointer"
          >
            <button className="flex justify-start items-center gap-4">
              <BsTelephone className="shrink-0 text-xl text-primary-50 group-hover:text-secondary-600 transition ease-in-out delay-50 cursor-pointer" />
              <span className="whitespace-nowrap group-hover:text-secondary-600 transition ease-in-out delay-50 cursor-pointer">
                00 000 000 000
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
