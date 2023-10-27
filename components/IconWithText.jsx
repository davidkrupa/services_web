"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../assets/heroImage.jpg";

const IconWithText = ({ details: { icon, title, text } }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="flex flex-col justify-center items-center rounded-md text-center px-4 py-6 bg-slate-100 shadow-lg"
    >
      <Image
        src={heroImage}
        width={400}
        height={400}
        alt="work exapmle"
        className="rounded-md shadow-md mx-auto"
      />
      <span className="text-center text-2xl pt-4 text-orange-500">{icon}</span>

      <h4 className="text-xl font-semibold py-4">{title}</h4>
      <p>{text}</p>
    </motion.div>
  );
};

export default IconWithText;
