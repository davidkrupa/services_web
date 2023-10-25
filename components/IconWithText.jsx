"use client";

import { motion } from "framer-motion";

const IconWithText = ({ details: { icon, title, text } }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="flex flex-col justify-center items-center rounded-sm text-center p-3 bg-slate-400 shadow-md"
    >
      <span className="text-center text-4xl text-slate-300">{icon}</span>
      <h4 className="text-xl font-semibold py-4">{title}</h4>
      <p>{text}</p>
    </motion.div>
  );
};

export default IconWithText;
