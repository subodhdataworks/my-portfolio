"use client";

import { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaAward,
  FaChartLine,
  FaCheckCircle,
  FaDatabase,
  FaShieldAlt,
  FaCertificate,
  FaMicrosoft,
  FaPlay,
} from "react-icons/fa";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [photoView, setPhotoView] = useState<"video" | "circle" | "card">("video");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      id="about-me"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-14 lg:px-20 mt-28 md:mt-36 w-full z-[20] max-w-7xl mx-auto min-h-[85vh] gap-12"
    >
      {/* Left Column: Bio, Credentials & Live KPI Ribbon */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start lg:max-w-[620px]">
        {/* Availability & Role Badge */}
        <motion.div
          variants={slideInFromTop}
          className="flex flex-wrap items-center gap-2.5"
        >
          <div className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b] opacity-[0.95] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="Welcome-text text-[12px] font-semibold tracking-wide">
              OPEN TO WORK • DATA ANALYST &amp; BI SPECIALIST
            </span>
          </div>

          <Link
            href="#certification"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-cyan-500/50 text-cyan-300 text-xs font-bold hover:bg-blue-900 transition-all shadow-[0_0_15px_rgba(0,164,239,0.3)]"
          >
            <FaMicrosoft className="text-[#00A4EF] w-3.5 h-3.5" />
            <span>Microsoft Certified (PL-300)</span>
          </Link>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          <span>
            Turning Raw Data into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Executive Decisions.
            </span>
          </span>
        </motion.div>

        {/* Professional Summary */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-300 my-1 leading-relaxed"
        >
          Hi, I&apos;m <span className="text-white font-bold">Subodh Kumar</span>—a{" "}
          <strong className="text-cyan-300 font-semibold">
            Microsoft Certified Power BI Data Analyst (PL-300)
          </strong>{" "}
          specializing in DAX data modeling, SQL pipelines, and executive KPI scorecards. Experienced in modeling over{" "}
          <span className="text-cyan-300 font-bold">₹3.47B+ across 288K+ digital transactions</span> and managing{" "}
          <span className="text-purple-300 font-bold">5+ years</span> of heavy industrial operational MIS.
        </motion.p>

        {/* Live Analytics KPI Ribbon */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-2"
        >
          {/* KPI 1 */}
          <div className="p-3 rounded-2xl bg-[#0e0730]/70 border border-cyan-500/40 backdrop-blur-md">
            <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold">Volume Analyzed</span>
            <span className="text-lg sm:text-xl font-extrabold text-cyan-300 font-mono">₹3.47B+</span>
          </div>

          {/* KPI 2 */}
          <div className="p-3 rounded-2xl bg-[#0e0730]/70 border border-purple-500/40 backdrop-blur-md">
            <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold">Transactions</span>
            <span className="text-lg sm:text-xl font-extrabold text-purple-200 font-mono">288K+</span>
          </div>

          {/* KPI 3 */}
          <div className="p-3 rounded-2xl bg-[#0e0730]/70 border border-emerald-500/40 backdrop-blur-md">
            <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold">Data Accuracy</span>
            <span className="text-lg sm:text-xl font-extrabold text-emerald-300 font-mono">96% SLA</span>
          </div>

          {/* KPI 4 */}
          <div className="p-3 rounded-2xl bg-[#0e0730]/70 border border-blue-500/40 backdrop-blur-md">
            <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold">Experience</span>
            <span className="text-lg sm:text-xl font-extrabold text-blue-200 font-mono">5+ Years</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-3.5 mt-2"
        >
          <Link
            href="#projects"
            className="py-3 px-6 button-primary text-center text-white font-semibold cursor-pointer rounded-xl border border-[#7042f88b] hover:shadow-[0_0_30px_rgba(112,66,248,0.5)] transition-all duration-300 text-sm tracking-wide"
          >
            Explore Dashboards
          </Link>
          <Link
            href="#certification"
            className="py-3 px-5 bg-gradient-to-r from-blue-900/60 to-cyan-950/60 hover:from-blue-800/80 hover:to-cyan-900/80 text-cyan-300 hover:text-white font-semibold cursor-pointer rounded-xl border border-cyan-500/50 transition-all duration-300 text-sm tracking-wide flex items-center gap-2 shadow-[0_0_20px_rgba(0,164,239,0.3)]"
          >
            <FaMicrosoft className="text-[#00A4EF]" />
            <span>Verify PL-300</span>
          </Link>
          <Link
            href="#experience"
            className="py-3 px-5 bg-purple-950/40 hover:bg-purple-900/50 text-gray-200 hover:text-white font-medium cursor-pointer rounded-xl border border-purple-800/40 transition-all duration-300 text-sm tracking-wide"
          >
            View Experience
          </Link>
        </motion.div>
      </div>

      {/* Right Column: High-Impact Executive Showcase with Studio Video & Official Microsoft Badge */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 flex flex-col items-center justify-center relative mt-6 lg:mt-0"
      >
        {/* Ambient Glows */}
        <div className="absolute w-[360px] md:w-[480px] h-[360px] md:h-[480px] bg-gradient-to-r from-cyan-600/25 via-blue-600/20 to-purple-600/25 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />

        {/* Orbiting Subtle Cyber Rings */}
        <div className="absolute w-[380px] md:w-[480px] h-[380px] md:h-[480px] rounded-full border border-cyan-500/20 border-dashed animate-[spin_40s_linear_infinite] pointer-events-none" />
        <div className="absolute w-[430px] md:w-[530px] h-[430px] md:h-[530px] rounded-full border border-purple-500/15 animate-[spin_55s_linear_infinite_reverse] pointer-events-none" />

        {/* Main Photo/Video Showcase Frame */}
        <div className="relative group">
          {photoView === "video" ? (
            /* View 1: Live Studio Executive Video of Subodh */
            <div className="relative w-[285px] sm:w-[335px] md:w-[375px] h-[370px] sm:h-[430px] md:h-[480px] rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_55px_rgba(0,229,255,0.55)] hover:shadow-[0_0_75px_rgba(0,229,255,0.7)] transition-all duration-500">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-white relative">
                <video
                  src="/videos/subodh-studio-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 py-1 px-2.5 rounded-full bg-[#030014]/90 backdrop-blur-md border border-cyan-400/50 text-[10px] font-bold text-cyan-300 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>LIVE STUDIO VIEW</span>
                </div>
              </div>
            </div>
          ) : photoView === "circle" ? (
            /* View 2: Professional Circular Avatar */
            <div className="relative w-[290px] sm:w-[350px] md:w-[400px] h-[290px] sm:h-[350px] md:h-[400px] rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_50px_rgba(0,229,255,0.45)] hover:shadow-[0_0_70px_rgba(0,229,255,0.6)] transition-all duration-500">
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
            /* View 3: Studio Executive Card */
            <div className="relative w-[280px] sm:w-[330px] md:w-[370px] h-[360px] sm:h-[420px] md:h-[470px] rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_50px_rgba(0,229,255,0.45)] hover:shadow-[0_0_70px_rgba(0,229,255,0.6)] transition-all duration-500">
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

          {/* Prominent Floating Pill 1: Official Microsoft Certified Shield Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 sm:-left-12 flex items-center gap-3 py-2 px-4 rounded-2xl bg-[#07021b]/95 backdrop-blur-xl border border-cyan-400/60 shadow-[0_0_30px_rgba(0,164,239,0.45)] z-30 group-hover:scale-105 transition-transform"
          >
            <div className="relative w-11 h-11 flex-shrink-0 drop-shadow-[0_0_10px_rgba(0,164,239,0.7)]">
              <Image
                src="/certificates/microsoft-pl300-badge.webp"
                alt="Microsoft PL-300 Badge"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold text-white tracking-wide">
                Microsoft Certified
              </span>
              <span className="text-[9px] text-cyan-300 font-bold uppercase tracking-wider">
                PL-300 Associate ★★
              </span>
              <span className="text-[8px] text-gray-400 font-mono">
                ID: D7910E2DB3A299BB
              </span>
            </div>
          </motion.div>

          {/* Floating Pill 2: Bottom-Right Transaction Volume */}
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
                288K+ Transactions
              </span>
            </div>
          </motion.div>

          {/* Floating Pill 3: Bottom-Left 5+ Years MIS Experience */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:flex absolute bottom-8 -left-10 items-center gap-2 py-1 px-3 rounded-full bg-[#030014]/90 backdrop-blur-md border border-purple-500/40 shadow-lg z-30"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[10px] font-semibold text-purple-200">
              5+ Years Operations MIS &amp; Audit
            </span>
          </motion.div>
        </div>

        {/* View Switcher Pill: Now with Live Studio Video as the Star Feature */}
        <div className="mt-7 flex flex-wrap justify-center items-center gap-2 p-1.5 rounded-full bg-[#030014]/90 backdrop-blur-md border border-purple-800/40 z-20 shadow-lg">
          <button
            type="button"
            onClick={() => setPhotoView("video")}
            className={`px-3.5 py-1.5 text-xs rounded-full font-bold transition-all ${
              photoView === "video"
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(0,229,255,0.6)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🎬 Live Studio Video
          </button>
          <button
            type="button"
            onClick={() => setPhotoView("circle")}
            className={`px-3 py-1.5 text-xs rounded-full font-semibold transition-all ${
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
            className={`px-3 py-1.5 text-xs rounded-full font-semibold transition-all ${
              photoView === "card"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(112,66,248,0.6)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            👤 Executive Portrait
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
