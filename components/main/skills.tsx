"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SkillText } from "@/components/sub/skill-text";
import {
  FaChartBar,
  FaDatabase,
  FaCode,
  FaCheckCircle,
  FaVideo,
} from "react-icons/fa";

export const Skills = () => {
  const [selectedVideo, setSelectedVideo] = useState<string>(
    "/videos/skills-video.mp4"
  );

  const skillCategories = [
    {
      category: "Business Intelligence & Executive Dashboards",
      badge: "Power BI & Visualization",
      accent: "from-purple-500 to-indigo-500",
      skills: [
        {
          name: "Power BI",
          level: "PL-300 Certified",
          exp: "Expert",
          image: "/skills/powerbi.svg",
          desc: "Star schema design, report optimization, drill-throughs, RLS, and executive scorecards.",
        },
        {
          name: "DAX Modeling",
          level: "Advanced",
          exp: "Production",
          image: "/skills/dax.svg",
          desc: "Time intelligence, CALCULATE, semi-additive measures, dynamic dimension slicing.",
        },
        {
          name: "Tableau",
          level: "Advanced",
          exp: "Proficient",
          image: "/skills/tableau.svg",
          desc: "Story points, visual analytics, parameters, calculated fields, dashboard actions.",
        },
        {
          name: "Advanced Excel",
          level: "Advanced",
          exp: "Expert",
          image: "/skills/excel.svg",
          desc: "Power Pivot, nested formulas, dynamic arrays, scenario planning, financial modeling.",
        },
        {
          name: "Google Sheets",
          level: "5+ Years Daily MIS",
          exp: "Senior",
          image: "/skills/sheets.svg",
          desc: "Engineered 5+ years of live operational inventory, production, and cash flow ledgers.",
        },
      ],
    },
    {
      category: "Databases, Relational SQL & ETL Pipelines",
      badge: "Data Warehousing & Querying",
      accent: "from-cyan-500 to-blue-500",
      skills: [
        {
          name: "SQL",
          level: "Advanced",
          exp: "Expert",
          image: "/skills/sql.svg",
          desc: "CTEs, window functions (ROW_NUMBER, DENSE_RANK), joins, subqueries across 288K+ records.",
        },
        {
          name: "PostgreSQL",
          level: "Relational",
          exp: "Advanced",
          image: "/skills/postgresql.png",
          desc: "Complex schema normalization, indexing strategies, analytical aggregations.",
        },
        {
          name: "MySQL",
          level: "Relational",
          exp: "Advanced",
          image: "/skills/mysql.png",
          desc: "Transactional schema management, operational reporting queries, data consistency.",
        },
        {
          name: "Power Query (M)",
          level: "Advanced ETL",
          exp: "Expert",
          image: "/skills/powerquery.svg",
          desc: "Data profiling, automated transformations, unpivoting, custom M-code functions.",
        },
      ],
    },
    {
      category: "Python Analytics, Machine Learning & Tools",
      badge: "Data Science & Automation",
      accent: "from-indigo-500 to-emerald-500",
      skills: [
        {
          name: "Python",
          level: "Analytics & ML",
          exp: "Proficient",
          image: "/skills/python.svg",
          desc: "Exploratory data analysis (EDA), data imputation, feature engineering, script automation.",
        },
        {
          name: "Pandas",
          level: "Data Wrangling",
          exp: "Advanced",
          image: "/skills/pandas.svg",
          desc: "DataFrames, group-by aggregations, time-series resampling, memory optimization.",
        },
        {
          name: "NumPy",
          level: "Numerical Ops",
          exp: "Advanced",
          image: "/skills/numpy.svg",
          desc: "Vectorized calculations, multi-dimensional matrix operations, statistical modeling.",
        },
        {
          name: "Gemini AI",
          level: "GenAI Analytics",
          exp: "Applied",
          image: "/skills/gemini.svg",
          desc: "LLM-assisted SQL synthesis, unstructured text sentiment extraction, predictive insights.",
        },
        {
          name: "Git & GitHub",
          level: "Version Control",
          exp: "Standard",
          image: "/skills/git.svg",
          desc: "Repository management, branching, open-source portfolio publishing.",
        },
        {
          name: "Docker",
          level: "Containerization",
          exp: "Standard",
          image: "/skills/docker.png",
          desc: "Reproducible analytics environments and containerized data pipelines.",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-20 px-4 max-w-7xl mx-auto z-20"
    >
      <SkillText />

      {/* 3D Cinematic Skills Video Showcase */}
      <div className="w-full max-w-4xl mx-auto my-4 z-20">
        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/50 shadow-[0_0_50px_rgba(0,229,255,0.3)] bg-[#0c0524]/90 backdrop-blur-xl group">
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
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 p-2.5 px-4 rounded-2xl bg-[#030014]/90 backdrop-blur-md border border-purple-800/40">
            <span className="text-xs font-semibold text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Interactive Analytics Universe
            </span>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedVideo("/videos/skills-video.mp4")}
                className={`px-3 py-1 text-xs rounded-xl font-medium transition-all ${
                  selectedVideo.includes("skills-video")
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(147,51,234,0.6)]"
                    : "bg-purple-950/60 text-gray-300 hover:text-white"
                }`}
              >
                🌟 Subodh Front View
              </button>

              <button
                type="button"
                onClick={() => setSelectedVideo("/videos/Scene_02_Data_Analyst_BEST_FINAL.mp4")}
                className={`px-3 py-1 text-xs rounded-xl font-medium transition-all ${
                  selectedVideo.includes("Scene_02")
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                    : "bg-purple-950/60 text-gray-300 hover:text-white"
                }`}
              >
                🌌 3D Tools Galaxy
              </button>

              <button
                type="button"
                onClick={() => setSelectedVideo("/videos/universe_data_analytics.mp4")}
                className={`px-3 py-1 text-xs rounded-xl font-medium transition-all ${
                  selectedVideo.includes("universe_data_analytics")
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                    : "bg-purple-950/60 text-gray-300 hover:text-white"
                }`}
              >
                🪐 Cosmos Analytics
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categorized Skills Command Center */}
      <div className="w-full flex flex-col gap-10 mt-6 z-20">
        {skillCategories.map((cat, idx) => (
          <div key={cat.category} className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500" />
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {cat.category}
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-purple-300">
                {cat.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-2xl border border-purple-900/40 bg-gradient-to-b from-[#0c0524]/80 to-[#030014]/90 p-4 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl bg-[#030014] border border-purple-800/50 p-2 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={36}
                          height={36}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-700/40 text-cyan-300">
                        {skill.level}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-gray-300 mt-1.5 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-purple-900/30 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1 text-emerald-300 font-medium">
                      <FaCheckCircle className="w-3 h-3" /> Verified Skill
                    </span>
                    <span className="font-mono text-purple-300">{skill.exp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Atmospheric Background Video */}
      <div className="w-full h-full absolute top-0 left-0 -z-10 overflow-hidden pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-20"
          preload="auto"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-video.mp4" type="video/mp4" />
          <source src="/videos/skills-video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014] opacity-80" />
      </div>
    </section>
  );
};
