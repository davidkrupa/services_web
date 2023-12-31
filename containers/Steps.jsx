import React from "react";
import { BsFacebook, BsTelephone } from "react-icons/bs";

const Steps = () => {
  const stepsData = [
    {
      tag: "Contact",
      title: "Contact",
      text: "Call us or write us a message, we will choose materials, delivery time and pricing",
    },
    {
      tag: "Preparing",
      title: "Preparing",
      text: "We are preparing materials and making your order, if you order bigger amount we will notice you about progress",
    },
    {
      tag: "Delivery",
      title: "Delivery",
      text: "When everything is ready we will send your order and give you the tracking number",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-14 py-14 px-2 sm:px-6">
      <h2 className="text-3xl text-gray-800 font-semibold">Plan Działania</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-[400px] md:max-w-none">
        {stepsData.map((step, i) => (
          <div
            key={`step-${i}`}
            className="flex flex-col justify-start items-start gap-3 p-2 mx-4 border-t-2 border-gray-800"
          >
            <span className="text-7xl text-orange-500 font-semibold">
              {`0${i + 1}`}
            </span>
            <h3 className="text-xl text-gray-800 font-semibold">
              {step.title}
            </h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <a
          href="#"
          target="_blank"
          className="group px-6 py-2 w-full rounded-xl text-slate-50 font-medium shadow-lg border-2 border-transparent hover:border-orange-600 hover:shadow-xl bg-orange-500 hover:bg-white transition ease-in-out delay-50 cursor-pointer"
        >
          <div className="flex justify-start items-center gap-4">
            <BsFacebook className="shrink-0 text-xl text-slate-50 group-hover:text-orange-600 transition ease-in-out delay-50 cursor-pointer" />
            <span className="whitespace-nowrap group-hover:text-orange-600 transition ease-in-out delay-50 cursor-pointer">
              Facebook
            </span>
          </div>
        </a>
        <a
          href="#"
          className="group px-6 py-2 w-full rounded-xl text-slate-50 font-medium shadow-lg border-2 border-transparent hover:border-orange-600 hover:shadow-xl bg-orange-500 hover:bg-white transition ease-in-out delay-50 cursor-pointer"
        >
          <div className="flex justify-start items-center gap-4">
            <BsTelephone className="shrink-0 text-xl text-slate-50 group-hover:text-orange-600 transition ease-in-out delay-50 cursor-pointer" />
            <span className="whitespace-nowrap group-hover:text-orange-600 transition ease-in-out delay-50 cursor-pointer">
              000-000-000
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Steps;
