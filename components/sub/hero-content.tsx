"use client";

import { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaAward, FaChartLine, FaCheckCircle, FaDatabase } from "react-icons/fa";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [photoView, setPhotoView] = useState<"circle" | "card">("circle");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      id="about-me"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-14 lg:px-20 mt-28 md:mt-36 w-full z-[20] max-w-7xl mx-auto min-h-[85vh] gap-12"
    >
      {/* Left Column: Bio & Highlights */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start lg:max-w-[600px]">
        {/* Welcome Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b] opacity-[0.95]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-medium tracking-wide">
            Data Analyst &amp; Business Intelligence Specialist
          </h1>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          <span>
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400">
              Enterprise Data
            </span>{" "}
            into Actionable Insights.
          </span>
        </motion.div>

        {/* Professional Summary */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-300 my-2 leading-relaxed"
        >
          Hi, I&apos;m <span className="text-white font-semibold">Subodh Kumar</span>. I build interactive Power BI dashboards, reusable DAX measures, and robust SQL pipelines. Experienced in analyzing over <span className="text-cyan-400 font-semibold">₹3.47B+ in transactions</span> and optimizing <span className="text-cyan-400 font-semibold">5+ years</span> of heavy industrial operational and procurement metrics.
        </motion.p>

        {/* Highlight Stats Chips */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex flex-wrap gap-2.5 my-2"
        >
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 border border-purple-500/40 text-purple-200">
            📊 Power BI (PL-300)
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 border border-cyan-500/40 text-cyan-200">
            ⚡ ₹3.47B+ Volume Analyzed
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-500/40 text-emerald-200">
            🎯 96% Data SLA
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/60 border border-blue-500/40 text-blue-200">
            🏆 2nd Prize AI Challenge
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 mt-3"
        >
          <Link
            href="#projects"
            className="py-3 px-6 button-primary text-center text-white font-medium cursor-pointer rounded-xl border border-[#7042f88b] hover:shadow-[0_0_25px_rgba(112,66,248,0.5)] transition-all duration-300 text-sm tracking-wide"
          >
            Explore Projects
          </Link>
          <Link
            href="#experience"
            className="py-3 px-6 bg-purple-950/30 hover:bg-purple-900/40 text-center text-gray-200 hover:text-white font-medium cursor-pointer rounded-xl border border-purple-800/40 transition-all duration-300 text-sm tracking-wide"
          >
            View Experience
          </Link>
          <a
            href="mailto:subodh.dataworks@gmail.com"
            className="py-3 px-6 bg-cyan-950/20 hover:bg-cyan-900/30 text-center text-cyan-300 hover:text-cyan-200 font-medium cursor-pointer rounded-xl border border-cyan-700/40 transition-all duration-300 text-sm tracking-wide"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right Column: Clean Executive Profile Showcase (Icons Completely Removed) */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 flex flex-col items-center justify-center relative mt-6 lg:mt-0"
      >
        {/* Ambient Glows */}
        <div className="absolute w-[360px] md:w-[460px] h-[360px] md:h-[460px] bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-cyan-500/30 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />

        {/* Orbiting Subtle Cyber Rings */}
        <div className="absolute w-[380px] md:w-[460px] h-[380px] md:h-[460px] rounded-full border border-purple-500/20 border-dashed animate-[spin_40s_linear_infinite] pointer-events-none" />
        <div className="absolute w-[420px] md:w-[500px] h-[420px] md:h-[500px] rounded-full border border-cyan-500/15 animate-[spin_55s_linear_infinite_reverse] pointer-events-none" />

        {/* Main Photo Frame */}
        <div className="relative group">
          {photoView === "circle" ? (
            /* Image 2: Professional Circular Avatar */
            <div className="relative w-[290px] sm:w-[350px] md:w-[400px] h-[290px] sm:h-[350px] md:h-[400px] rounded-full p-2 bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 shadow-[0_0_50px_rgba(112,66,248,0.45)] hover:shadow-[0_0_70px_rgba(0,229,255,0.5)] transition-all duration-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#030014] relative">
                <Image
                  src="/subodh-profile.png"
                  alt="Subodh Kumar - Data Analyst"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ) : (
            /* Image 1: Studio Executive Card */
            <div className="relative w-[280px] sm:w-[330px] md:w-[370px] h-[360px] sm:h-[420px] md:h-[470px] rounded-3xl p-1.5 bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 shadow-[0_0_50px_rgba(112,66,248,0.45)] hover:shadow-[0_0_70px_rgba(0,229,255,0.5)] transition-all duration-500">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#08021d] relative">
                <Image
                  src="/subodh-hero-card.png"
                  alt="Subodh Kumar - Studio Portrait"
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          )}

          {/* Floating Pill 1: Top-Left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -left-4 sm:-left-8 flex items-center gap-2.5 py-1.5 px-3.5 rounded-full bg-[#030014]/90 backdrop-blur-md border border-purple-500/50 shadow-[0_0_20px_rgba(112,66,248,0.3)] z-30"
          >
            <span className="p-1.5 rounded-full bg-purple-900/60 text-purple-300">
              <FaAward className="w-3.5 h-3.5" />
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white tracking-wide">
                Power BI (PL-300)
              </span>
              <span className="text-[9px] text-cyan-300 font-medium">
                Certified Analyst
              </span>
            </div>
          </motion.div>

          {/* Floating Pill 2: Bottom-Right */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-3 -right-4 sm:-right-8 flex items-center gap-2.5 py-1.5 px-3.5 rounded-full bg-[#030014]/90 backdrop-blur-md border border-cyan-500/50 shadow-[0_0_20px_rgba(0,229,255,0.3)] z-30"
          >
            <span className="p-1.5 rounded-full bg-cyan-950/70 text-cyan-300">
              <FaChartLine className="w-3.5 h-3.5" />
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white tracking-wide">
                ₹3.47B+ Analyzed
              </span>
              <span className="text-[9px] text-emerald-300 font-medium">
                300K+ Transactions
              </span>
            </div>
          </motion.div>

          {/* Floating Pill 3: Bottom-Left */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:flex absolute bottom-8 -left-10 items-center gap-2 py-1 px-3 rounded-full bg-[#030014]/90 backdrop-blur-md border border-emerald-500/40 shadow-lg z-30"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-semibold text-emerald-300">
              96% Data SLA Accuracy
            </span>
          </motion.div>
        </div>

        {/* View Switcher Pill */}
        <div className="mt-7 flex items-center gap-2 p-1.5 rounded-full bg-[#030014]/85 backdrop-blur-md border border-purple-800/40 z-20">
          <button
            type="button"
            onClick={() => setPhotoView("circle")}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
              photoView === "circle"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(112,66,248,0.6)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🌟 Creative Avatar
          </button>
          <button
            type="button"
            onClick={() => setPhotoView("card")}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
              photoView === "card"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(112,66,248,0.6)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            👤 Executive Studio
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
