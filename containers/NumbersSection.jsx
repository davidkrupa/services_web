import React from "react";

const NumbersSection = () => {
  const elementsArray = [
    [
      {
        title: "15+",
        subtitle: "Years of experience",
      },
      {
        title: "50+",
        subtitle: "Happy customers",
      },
    ],
    [
      {
        title: "500+",
        subtitle: "Panels mounted",
      },
      {
        title: "4.5",
        subtitle: "Stars in Google",
      },
    ],
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-full px-2 sm:px-6 py-14 gap-10 bg-slate-100">
      <div className="flex flex-col justify-center items-start w-5/6 sm:w-1/2 md:ml-6">
        <h3 className="text-3xl font-semibold mb-8 text-slate-900">
          Lets numbers talk
        </h3>
        <p className="mb-3">
          Description of our work in few sentences describing our expertise and
          proffesionalissm proven by many finished projects and happy customers
        </p>
        <p>
          Description of our work in few sentences describing our expertise and
          proffesionalissm.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 w-5/6 sm:w-1/2">
        <div className="flex flex-col justify-center items-center">
          <span className="text-6xl md:text-7xl font-semibold text-orange-500">
            15+
          </span>
          <p className="text-lg text-slate-900 font-medium">
            Years of Experience
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-6xl md:text-7xl font-bold text-orange-500">
            50+
          </span>
          <p className="text-lg text-slate-900 font-medium">Happy Customers</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-6xl md:text-7xl font-semibold text-orange-500">
            4.5
          </span>
          <p className="text-lg text-slate-900 font-medium">Stars in Google</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-6xl md:text-7xl font-semibold text-orange-500">
            500+
          </span>
          <p className="text-lg text-slate-900 font-medium">Panels Mounted</p>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
