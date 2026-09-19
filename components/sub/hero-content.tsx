"use client";

import { useState, useRef } from "react";
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
  FaArrowRight,
  FaFileDownload,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [photoView, setPhotoView] = useState<"video" | "circle" | "card">("video");
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleAudio = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      id="about-me"
      className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-14 lg:px-20 mt-20 sm:mt-24 md:mt-36 w-full z-[20] max-w-7xl mx-auto min-h-[85vh] gap-8 lg:gap-12"
    >
      {/* Left Column: Bio, Credentials & Live KPI Ribbon */}
      <div className="h-full w-full flex flex-col gap-4 sm:gap-5 justify-center m-auto text-start lg:max-w-[620px]">
        {/* Availability & Role Badge */}
        <motion.div
          variants={slideInFromTop}
          className="flex flex-wrap items-center gap-2 sm:gap-2.5"
        >
          <div className="Welcome-box py-[5px] px-[12px] sm:py-[6px] sm:px-[14px] border border-[#7042f88b] opacity-[0.95] flex items-center gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="Welcome-text text-[11px] sm:text-[12px] font-semibold tracking-wide">
              OPEN TO WORK • DATA ANALYST &amp; BI
            </span>
          </div>

          <Link
            href="#certification"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-950/80 border border-cyan-500/50 text-cyan-300 text-[11px] sm:text-xs font-bold hover:bg-blue-900 transition-all shadow-[0_0_15px_rgba(0,164,239,0.3)]"
          >
            <FaMicrosoft className="text-[#00A4EF] w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Microsoft Certified (PL-300)</span>
          </Link>
        </motion.div>

        {/* Main Headline & Direct Data Analyst Identity */}
        <div className="flex flex-col gap-1 mt-1">
          <span className="text-base sm:text-xl text-cyan-400 font-mono font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Hi, I&apos;m Subodh Kumar
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Data Analyst{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              | Power BI, SQL &amp; DAX
            </span>
          </h1>
        </div>

        {/* Professional Summary */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base lg:text-lg text-gray-200 sm:text-gray-300 my-0.5 leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          I turn raw and messy data into clean dashboards and actionable insights. Microsoft Certified Power BI Data Analyst (PL-300) with experience analyzing{" "}
          <strong className="text-cyan-300 font-semibold font-mono">
            ₹3.47B+ across 288K+ digital transactions
          </strong>.
        </motion.p>

        {/* Core Tech Stack Pills */}
        <motion.div
          variants={slideInFromLeft(0.85)}
          className="flex flex-wrap items-center gap-1.5 sm:gap-2 my-1"
        >
          <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#0e0730]/90 border border-amber-500/50 text-amber-300 text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Power BI
          </span>
          <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#0e0730]/90 border border-cyan-500/50 text-cyan-300 text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            SQL
          </span>
          <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#0e0730]/90 border border-emerald-500/50 text-emerald-300 text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Excel
          </span>
          <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#0e0730]/90 border border-blue-500/50 text-blue-300 text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Python
          </span>
        </motion.div>

        {/* Action Buttons: 2 Clear Primary CTAs - Side-by-Side Grid on Mobile */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3.5 mt-1 w-full sm:w-auto"
        >
          <Link
            href="#projects"
            className="py-2.5 px-3 sm:py-3 sm:px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer group text-center"
          >
            <span>View Projects</span>
            <FaArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>

          <a
            href="/Subodh_Kumar_Resume.pdf"
            download="Subodh_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 sm:py-3 sm:px-6 rounded-xl bg-purple-950/80 hover:bg-purple-900/90 text-gray-200 hover:text-white font-semibold text-xs sm:text-sm tracking-wide border border-purple-800/60 hover:border-cyan-400 transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-[0_0_20px_rgba(112,66,248,0.25)] cursor-pointer group text-center"
          >
            <FaFileDownload className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-300 group-hover:translate-y-0.5 transition-transform flex-shrink-0" />
            <span>Resume PDF</span>
          </a>
        </motion.div>

        {/* Live Analytics KPI Ribbon */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="grid grid-cols-3 gap-2 sm:gap-3 my-1 pt-1 w-full"
        >
          {/* KPI 1 */}
          <div className="p-2 sm:p-3 rounded-2xl bg-[#0e0730]/85 border border-cyan-500/40 backdrop-blur-md text-center sm:text-left">
            <span className="text-[9px] sm:text-[10px] text-gray-400 block uppercase tracking-wider font-semibold font-mono truncate">Volume</span>
            <span className="text-base sm:text-xl font-extrabold text-cyan-300 font-mono">₹3.47B+</span>
          </div>

          {/* KPI 2 */}
          <div className="p-2 sm:p-3 rounded-2xl bg-[#0e0730]/85 border border-purple-500/40 backdrop-blur-md text-center sm:text-left">
            <span className="text-[9px] sm:text-[10px] text-gray-400 block uppercase tracking-wider font-semibold font-mono truncate">Transactions</span>
            <span className="text-base sm:text-xl font-extrabold text-purple-200 font-mono">288K+</span>
          </div>

          {/* KPI 3 */}
          <div className="p-2 sm:p-3 rounded-2xl bg-[#0e0730]/85 border border-emerald-500/40 backdrop-blur-md text-center sm:text-left">
            <span className="text-[9px] sm:text-[10px] text-gray-400 block uppercase tracking-wider font-semibold font-mono truncate">Success Rate</span>
            <span className="text-base sm:text-xl font-extrabold text-emerald-300 font-mono">96% SLA</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column: High-Impact Executive Showcase with Studio Video & Official Microsoft Badge */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 flex flex-col items-center justify-center relative mt-8 lg:mt-0 max-w-full"
      >
        {/* Ambient Glows */}
        <div className="absolute w-[320px] sm:w-[460px] md:w-[540px] h-[260px] sm:h-[340px] md:h-[400px] bg-gradient-to-r from-cyan-600/25 via-blue-600/20 to-purple-600/25 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />

        {/* Orbiting Subtle Cyber Rings */}
        <div className="absolute w-[320px] sm:w-[460px] md:w-[540px] h-[320px] sm:h-[460px] md:h-[540px] rounded-full border border-cyan-500/20 border-dashed animate-[spin_40s_linear_infinite] pointer-events-none" />
        <div className="absolute w-[360px] sm:w-[500px] md:w-[580px] h-[360px] sm:h-[500px] md:h-[580px] rounded-full border border-purple-500/15 animate-[spin_55s_linear_infinite_reverse] pointer-events-none" />

        {/* Main Photo/Video Showcase Frame */}
        <div className="relative group w-full flex justify-center">
          {photoView === "video" ? (
            /* View 1: Live Executive Video of Subodh with Voice */
            <div className="relative w-full max-w-[340px] sm:max-w-[480px] md:max-w-[540px] aspect-[16/9] rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-400/80 via-indigo-500/60 to-purple-500/80 shadow-[0_0_55px_rgba(0,229,255,0.5)] hover:shadow-[0_0_75px_rgba(0,229,255,0.7)] transition-all duration-500">
              {/* Internal cosmic aura glow */}
              <div className="absolute inset-0 bg-radial from-cyan-500/10 via-purple-500/5 to-transparent rounded-3xl pointer-events-none" />
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#030014]/40 backdrop-blur-[2px] relative">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  onClick={toggleAudio}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                >
                  <source src="/videos/subodh-intro-voice.mp4" type="video/mp4" />
                </video>

                {/* Top Badge: Live Intro */}
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 py-1 px-2.5 rounded-full bg-[#030014]/90 backdrop-blur-md border border-cyan-400/50 text-[9px] sm:text-[10px] font-bold text-cyan-300 flex items-center gap-1.5 shadow-md z-10 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>LIVE INTRO • WITH VOICE</span>
                </div>

                {/* Bottom Left: Interactive Audio Toggle Button */}
                <button
                  type="button"
                  onClick={toggleAudio}
                  className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 py-1.5 px-3 rounded-full bg-[#030014]/90 backdrop-blur-md border border-cyan-400/60 text-cyan-300 text-[11px] sm:text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:bg-cyan-950/90 transition-all z-20 cursor-pointer group/btn"
                >
                  {isMuted ? (
                    <>
                      <FaVolumeMute className="w-3.5 h-3.5 text-amber-400 animate-pulse group-hover/btn:scale-110 transition-transform" />
                      <span>Tap for Voice 🔊</span>
                    </>
                  ) : (
                    <>
                      <FaVolumeUp className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                      <span>Voice Active 🎙️</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : photoView === "circle" ? (
            /* View 2: Professional Circular Avatar */
            <div className="relative w-[260px] sm:w-[350px] md:w-[400px] h-[260px] sm:h-[350px] md:h-[400px] rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_50px_rgba(0,229,255,0.45)] hover:shadow-[0_0_70px_rgba(0,229,255,0.6)] transition-all duration-500">
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
            <div className="relative w-[260px] sm:w-[330px] md:w-[370px] h-[340px] sm:h-[420px] md:h-[470px] rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_50px_rgba(0,229,255,0.45)] hover:shadow-[0_0_70px_rgba(0,229,255,0.6)] transition-all duration-500">
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
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 -left-2 sm:-top-6 sm:-left-4 md:-left-8 flex items-center gap-2 sm:gap-3 py-1.5 px-3 sm:py-2 sm:px-4 rounded-2xl bg-[#07021b]/95 backdrop-blur-xl border border-cyan-400/60 shadow-[0_0_30px_rgba(0,164,239,0.45)] z-30 group-hover:scale-105 transition-transform"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 drop-shadow-[0_0_10px_rgba(0,164,239,0.7)]">
              <Image
                src="/certificates/microsoft-pl300-badge.webp"
                alt="Microsoft PL-300 Badge"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-extrabold text-white tracking-wide">
                Microsoft Certified
              </span>
              <span className="text-[8px] sm:text-[9px] text-cyan-300 font-bold uppercase tracking-wider">
                PL-300 Associate ★★
              </span>
              <span className="text-[7px] sm:text-[8px] text-gray-400 font-mono">
                ID: D7910E2DB3A299BB
              </span>
            </div>
          </motion.div>

          {/* Floating Pill 2: Bottom-Right Transaction Volume */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-3 -right-2 sm:-bottom-3 sm:-right-4 md:-right-6 flex items-center gap-2 sm:gap-2.5 py-1.5 px-3 sm:px-3.5 rounded-full bg-[#030014]/90 backdrop-blur-md border border-cyan-500/50 shadow-[0_0_20px_rgba(0,229,255,0.3)] z-30"
          >
            <span className="p-1 sm:p-1.5 rounded-full bg-cyan-950/70 text-cyan-300">
              <FaChartLine className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wide">
                ₹3.47B+ Analyzed
              </span>
              <span className="text-[8px] sm:text-[9px] text-emerald-300 font-medium">
                288K+ Transactions
              </span>
            </div>
          </motion.div>
        </div>

        {/* View Switcher Pill: Now with Live Studio Video as the Star Feature */}
        <div className="mt-7 flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[#030014]/90 backdrop-blur-md border border-purple-800/40 z-20 shadow-lg">
          <button
            type="button"
            onClick={() => setPhotoView("video")}
            className={`px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs rounded-full font-bold transition-all ${
              photoView === "video"
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(0,229,255,0.6)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🎬 Video with Voice
          </button>
          <button
            type="button"
            onClick={() => setPhotoView("circle")}
            className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs rounded-full font-semibold transition-all ${
              photoView === "circle"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(112,66,248,0.6)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🌟 Avatar
          </button>
          <button
            type="button"
            onClick={() => setPhotoView("card")}
            className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs rounded-full font-semibold transition-all ${
              photoView === "card"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(112,66,248,0.6)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            👤 Portrait
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
