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
        <h1 className="Welcome-text text-[13px] font-semibold tracking-wide font-mono uppercase">
          03 // ANALYTICS SKILLS
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[28px] md:text-[36px] text-white font-bold mt-[14px] text-center mb-[10px]"
      >
        Tools &amp; Practical Technical Stack
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[15px] md:text-[17px] text-gray-300 mb-8 mt-[6px] text-center max-w-2xl"
      >
        Core analytical tools and real-world methods applied across dashboards and ETL workflows.
      </motion.div>
    </div>
  );
};
