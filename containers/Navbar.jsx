"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "#hero",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "FAQ",
      path: "#faq",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center mx-auto max-w-5xl py-4 px-6 bg-slate-800">
      <div className="text-slate-50">Logo</div>

      <div className="hidden sm:flex sm:justify-center sm:items-center sm:gap-6">
        {navLinks.map((item, i) => (
          <a
            href={item.path}
            key={`navLink-${i}`}
            className="font-medium text-slate-50 border-b-2 border-transparent hover:border-orange-500 transition ease-in-out delay-100"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* burger menu */}
      <div className="sm:hidden relative">
        <AiOutlineMenu
          className={`text-xl text-slate-50 font-medium cursor-pointer ${
            toggle ? "hidden" : "block"
          }`}
          onClick={() => setToggle(true)}
        />
        <AnimatePresence initial={false}>
          {toggle && (
            <motion.div
              layout
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col justify-start items-start gap-6 fixed top-0 bottom-0 right-0 left-1/4 p-8 bg-slate-200"
            >
              <AiOutlineClose
                className="text-2xl text-slate-900 font-semibold self-end cursor-pointer"
                onClick={() => setToggle(false)}
              />
              <ul className="flex flex-col justify-start items-start gap-4">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.path}
                      onClick={() => setToggle(false)}
                      className="text-xl text-slate-900 font-medium border-b-2 border-transparent hover:border-orange-500 transition ease-in-out delay-100"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* burger menu */}
    </nav>
  );
};

export default Navbar;
