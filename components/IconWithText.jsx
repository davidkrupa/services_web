"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../assets/heroImage.jpg";

const IconWithText = ({ details: { title, text, image, alt, id }, path }) => {
  const linkHref = path ? `/${path}/${id}` : `/${id}`;

  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="flex flex-col justify-start items-center rounded-md h-full text-center bg-primary-50 shadow-lg"
    >
      <Image
        src={heroImage}
        width={400}
        height={400}
        alt={alt}
        className="rounded-md shadow-md mx-auto"
      />
      <div className="flex flex-col justify-start items-center gap-4 px-4 py-8">
        {/* <span className="text-center text-2xl pt-4 text-orange-500">{icon}</span> */}
        <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
        <p className="line-clamp-3">{text}</p>

        <p className="text-lg text-gray-800 hover:text-primary-600 font-semibold">
          {"Check ->"}
        </p>
      </div>
    </motion.div>
  );
};

export default IconWithText;
