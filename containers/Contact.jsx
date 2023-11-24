import React from "react";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full px-2 sm:px-6 py-14 gap-10 bg-primary-50"
    >
      <h2 className="text-3xl text-gray-800 text-center font-semibold">
        Kontakt
      </h2>
      <div className="flex flex-col sm:flex-row justify-around items-start w-full gap-8 sm:gap-16">
        <div className="flex justify-center items-center w-full sm:w-1/3">
          Linki
        </div>
        <div className="flex justify-center items-center w-full sm:w-1/3">
          <div className="flex flex-col justify-start items-center gap-4 sm:gap-6">
            <a
              href=""
              target="_blank"
              className="group px-6 py-2 w-full rounded-xl text-primary-50 font-medium shadow-lg border-2 border-transparent hover:border-secondary-600 hover:shadow-xl bg-secondary-500 hover:bg-white transition ease-in-out delay-50 cursor-pointer"
            >
              <div className="flex justify-start items-center gap-4">
                <BsFacebook className="shrink-0 text-xl text-primary-50 group-hover:text-secondary-600 transition ease-in-out delay-50 cursor-pointer" />
                <span className="whitespace-nowrap group-hover:text-secondary-600 transition ease-in-out delay-50 cursor-pointer">
                  Facebook
                </span>
              </div>
            </a>
            <a
              href=""
              className="group px-6 py-2 w-full rounded-xl text-primary-50 font-medium shadow-lg border-2 border-transparent hover:border-secondary-600 hover:shadow-xl bg-secondary-500 hover:bg-white transition ease-in-out delay-50 cursor-pointer"
            >
              <div className="flex justify-start items-center gap-4">
                <BsTelephone className="shrink-0 text-xl text-primary-50 group-hover:text-secondary-600 transition ease-in-out delay-50 cursor-pointer" />
                <span className="whitespace-nowrap group-hover:text-secondary-600 transition ease-in-out delay-50 cursor-pointer">
                  00 000 000 000
                </span>
              </div>
            </a>
            <a
              href=""
              className="group px-6 py-2 w-full rounded-xl text-primary-50 font-medium shadow-lg border-2 border-transparent hover:border-secondary-600 hover:shadow-xl bg-secondary-500 hover:bg-white transition ease-in-out delay-50 cursor-pointer"
            >
              <div className="flex justify-start items-center gap-4">
                <AiOutlineMail className="shrink-0 text-xl text-primary-50 group-hover:text-secondary-600 transition ease-in-out delay-50 cursor-pointer" />
                <span className="whitespace-nowrap group-hover:text-secondary-600 transition ease-in-out delay-50 cursor-pointer">
                  aaa@aaa.com
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full sm:w-1/3">
          <p>
            Nazwa firmy
            <br />
            ul. ...............
            <br />
            Miasto
            <br />
            tel: 00 000 000 000
            <br />
            email: aaa@aaa.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
