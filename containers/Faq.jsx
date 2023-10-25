"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Faq = () => {
  const [questions, setQuestions] = useState([
    {
      question: "Are headphones used both for iOS and Android devices?",
      answer:
        "Yes, the headphones are compatible with any Bluetooth-enabled device, including smartphones, tablets, and laptops running iOS, Android, Windows, and macOS operating systems.",
      isOpen: false,
    },
    {
      question: "Can I use the headphones for gaming?",
      answer:
        "While these headphones can be used for gaming, they may not provide the same level of performance and features as dedicated gaming headsets. However, they still offer excellent sound quality, comfort, and noise cancellation suitable for casual gaming experiences.",
      isOpen: false,
    },
    {
      question: "Are headphones used both for iOS and Android devices?",
      answer:
        "Yes, the headphones are compatible with any Bluetooth-enabled device, including smartphones, tablets, and laptops running iOS, Android, Windows, and macOS operating systems.",
      isOpen: false,
    },
    {
      question: "Can I use the headphones for gaming?",
      answer:
        "While these headphones can be used for gaming, they may not provide the same level of performance and features as dedicated gaming headsets. However, they still offer excellent sound quality, comfort, and noise cancellation suitable for casual gaming experiences.",
      isOpen: false,
    },
  ]);

  const handleClick = (id) => {
    setQuestions((prev) =>
      prev.map((item, index) => {
        if (id !== index) return item;
        else return { ...item, isOpen: !item.isOpen };
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-10 py-14">
      <h2 className="text-3xl font-semibold text-center px-2">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 w-11/12 sm:w-5/6 gap-6 px-4">
        {questions?.map((item, index) => (
          <div key={index} className="w-full">
            <motion.div
              onClick={() => handleClick(index)}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
              className="flex justify-between items-center relative z-10 p-3 rounded-xl shadow-md bg-slate-400"
            >
              <h5 className="text-base font-semibold">{item.question}</h5>
              {item.isOpen ? <FaChevronDown /> : <FaChevronRight />}
            </motion.div>
            <AnimatePresence>
              {item.isOpen && (
                <motion.div
                  key={`motion-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="p-3 rounded-xl shadow-inner bg-slate-300">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
