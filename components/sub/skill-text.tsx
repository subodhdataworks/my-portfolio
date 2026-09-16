"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b] opacity-[0.95]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] font-medium tracking-wide">
          Data-Driven Intelligence &amp; BI
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[28px] md:text-[36px] text-white font-bold mt-[14px] text-center mb-[10px]"
      >
        Empowering Decisions with Modern Analytics Tools.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] md:text-[22px] text-gray-300 mb-8 mt-[6px] text-center"
      >
        Transforming raw operational data into executive dashboards &amp; DAX models.
      </motion.div>
    </div>
  );
};
