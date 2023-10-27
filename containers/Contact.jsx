import React from "react";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center w-full px-2 sm:px-6 py-14 gap-10 bg-slate-100"
    >
      <h2 className="text-3xl text-gray-800 font-semibold">Contact</h2>
      <div className="flex flex-col sm:flex-row justify-around items-start w-full gap-8 sm:gap-16">
        <div>Quick links</div>
        <div className="flex flex-col justify-center items-start gap-2">
          <a className="px-6 py-2 w-full rounded-xl text-slate-50  font-medium shadow-lg hover:shadow-xl bg-orange-500 hover:bg-orange-600 transition ease-in-out delay-50 cursor-pointer">
            <div className="flex justify-start items-center gap-4">
              <BsTelephone className="shrink-0 text-xl text-slate-50" />
              Telefon
            </div>
          </a>
          <a className="px-6 py-2 w-full rounded-xl text-slate-50  font-medium shadow-lg hover:shadow-xl bg-orange-500 hover:bg-orange-600 transition ease-in-out delay-50 cursor-pointer">
            <div className="flex justify-start items-center gap-4">
              <AiOutlineMail className="shrink-0 text-xl text-slate-50" />
              Mail
            </div>
          </a>
          <a className="px-6 py-2 w-full rounded-xl text-slate-50  font-medium shadow-lg hover:shadow-xl bg-orange-500 hover:bg-orange-600 transition ease-in-out delay-50 cursor-pointer">
            <div className="flex justify-start items-center gap-4">
              <BsFacebook className="shrink-0 text-xl text-slate-50" />
              Facebook
            </div>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>
            Nazwa Firmy
            <br />
            ul. Warszawska 111
            <br />
            00-000 Kraków
            <br />
            tel: 00-0000-00
            <br />
            email: aaa@aaa.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
