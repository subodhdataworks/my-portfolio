"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[32px] md:text-[40px] font-bold text-center text-gray-200 px-4"
        >
          Data Integrity{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &amp;
          </span>{" "}
          Governance.
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Data Security Top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Data Security Lock"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[18px] py-[5px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.95]">
          <h1 className="Welcome-text text-[12px] font-semibold tracking-wider uppercase">
            Data Governance &amp; Security
          </h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[15px] max-w-2xl">
        <div className="cursive text-[18px] md:text-[22px] font-medium text-center text-gray-300">
          Ensuring 96%+ transaction accuracy, automated cash reconciliation, and trusted executive reporting.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto opacity-70"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
