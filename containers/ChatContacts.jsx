"use client";

import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiFillFacebook } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const SocialMediaSticky = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-start items-center fixed lg:sticky z-20 bottom-8 ml-2 w-full h-0">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="flex justify-center items-center fixed lg:relative z-20"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center p-2 rounded-full text-2xl border-2 border-slate-50 text-orange-500 bg-slate-800"
        >
          <AiOutlineMail />
        </motion.div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            layout
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: -20, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center relative left-12 lg:static gap-2 p-1 pr-3 pl-8 border-2 border-slate-50 rounded-r-full bg-slate-800"
          >
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="hidden md:flex justify-center items-center text-3xl text-orange-500"
              >
                <AiFillFacebook />
              </motion.div>
            </a>

            <a href="mailto:aaa@aaa.com">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center items-center text-3xl text-orange-500"
              >
                <AiOutlineMail />
              </motion.div>
            </a>

            <a href="tel:+00 000 000 000">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center items-center text-3xl text-orange-500"
              >
                <AiOutlinePhone />
              </motion.div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialMediaSticky;
