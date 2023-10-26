import React from "react";
import croppedImage from "../assets/croppedImage.jpg";
import Image from "next/image";
import { BiSolidQuoteAltRight, BiSolidQuoteAltLeft } from "react-icons/bi";

const Quote = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center px-2 sm:px-6 py-14 gap-8 sm:gap-0 bg-slate-100">
      <div className="w-full sm:w-1/3">
        <Image
          src={croppedImage}
          width={360}
          height={540}
          alt="author"
          className="rounded-2xl shadow-xl mx-auto"
        />
      </div>
      <div className="flex flex-col justify-center items-start w-2/3 sm:pl-14 sm:pr-5 gap-5">
        <h4 className="text-lg uppercase tracking-widest">Our values</h4>
        <BiSolidQuoteAltLeft className="text-4xl lg:text-6xl text-orange-500 font-bold" />
        <p className="text-xl leading-relaxed sm:text-2xl sm:leading lg:text-3xl lg:leading-relaxed font-light  text-slate-800 tracking-wide">
          Quality is not an accident; it's a result of years of honing our
          skills, learning from our experiences, and upholding the highest
          standards of ethics.
        </p>
        <BiSolidQuoteAltRight className="self-end text-4xl lg:text-6xl text-orange-500 font-bold" />
      </div>
    </div>
  );
};

export default Quote;
