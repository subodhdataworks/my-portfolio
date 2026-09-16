"use client";

import { useState } from "react";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  ANALYTICS_AI_SKILLS,
  BI_SKILLS,
  DATABASE_SKILLS,
} from "@/constants";

export const Skills = () => {
  const [selectedVideo, setSelectedVideo] = useState<string>(
    "/videos/skills-video.mp4"
  );

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-20 px-4 max-w-7xl mx-auto z-20"
    >
      <SkillText />

      {/* 3D Cinematic Skills Video Showcase */}
      <div className="w-full max-w-4xl mx-auto my-3 z-20">
        <div className="relative rounded-3xl overflow-hidden border border-purple-500/50 shadow-[0_0_50px_rgba(112,66,248,0.45)] bg-[#0c0524]/80 backdrop-blur-xl group">
          <video
            key={selectedVideo}
            className="w-full aspect-video object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={selectedVideo} type="video/mp4" />
            <source src="/videos/skills-video.webm" type="video/webm" />
          </video>

          {/* Video Switcher Bar */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 p-2 px-4 rounded-2xl bg-[#030014]/85 backdrop-blur-md border border-purple-800/40">
            <span className="text-xs font-semibold text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Interactive Analytics Universe
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setSelectedVideo("/videos/skills-video.mp4")
                }
                className={`px-3 py-1 text-xs rounded-xl font-medium transition-all ${
                  selectedVideo.includes("skills-video")
                    ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(147,51,234,0.6)]"
                    : "bg-purple-950/60 text-gray-300 hover:text-white"
                }`}
              >
                🌟 Subodh Front View
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedVideo("/videos/Scene_02_Data_Analyst_BEST_FINAL.mp4")
                }
                className={`px-3 py-1 text-xs rounded-xl font-medium transition-all ${
                  selectedVideo.includes("Scene_02")
                    ? "bg-cyan-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                    : "bg-purple-950/60 text-gray-300 hover:text-white"
                }`}
              >
                🌌 3D Tools Galaxy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Row 1: Business Intelligence & Dashboards (Zero duplicates) */}
      <div className="w-full flex flex-col items-center gap-3 mt-4 z-20">
        <span className="text-xs uppercase tracking-wider font-semibold text-purple-300 bg-purple-950/60 border border-purple-800/40 px-3.5 py-1 rounded-full">
          Business Intelligence &amp; Dashboards
        </span>
        <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
          {BI_SKILLS.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Row 2: Database, SQL & ETL (Zero duplicates) */}
      <div className="w-full flex flex-col items-center gap-3 mt-4 z-20">
        <span className="text-xs uppercase tracking-wider font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-3.5 py-1 rounded-full">
          Databases, SQL &amp; Data Modeling
        </span>
        <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
          {DATABASE_SKILLS.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + BI_SKILLS.length}
            />
          ))}
        </div>
      </div>

      {/* Row 3: Python, Analytics & AI (Zero duplicates) */}
      <div className="w-full flex flex-col items-center gap-3 mt-4 z-20">
        <span className="text-xs uppercase tracking-wider font-semibold text-indigo-300 bg-indigo-950/60 border border-indigo-800/40 px-3.5 py-1 rounded-full">
          Advanced Analytics, Python &amp; AI
        </span>
        <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
          {ANALYTICS_AI_SKILLS.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + BI_SKILLS.length + DATABASE_SKILLS.length}
            />
          ))}
        </div>
      </div>

      {/* Atmospheric Background Video (Google Drive Video) */}
      <div className="w-full h-full absolute top-0 left-0 -z-10 overflow-hidden pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-20"
          preload="auto"
          playsInline
          loop
          muted
          autoPlay
        >
          <source
            src="/videos/skills-video.mp4"
            type="video/mp4"
          />
          <source
            src="/videos/skills-video.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014] opacity-80" />
      </div>
    </section>
  );
};
