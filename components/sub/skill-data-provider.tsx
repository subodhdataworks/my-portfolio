"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.08;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
      className="flex flex-col items-center gap-2 group cursor-pointer"
      title={name}
    >
      <div className="p-3 rounded-2xl bg-[#0e0730]/70 border border-purple-800/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_22px_rgba(0,229,255,0.35)] group-hover:scale-105 transition-all duration-300">
        <Image
          src={`/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          className="object-contain"
        />
      </div>
      <span className="text-[11px] md:text-xs text-gray-300 font-medium group-hover:text-cyan-300 transition-colors">
        {name}
      </span>
    </motion.div>
  );
};
