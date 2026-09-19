"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SkillText } from "@/components/sub/skill-text";
import {
  FaChartBar,
  FaDatabase,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Business Intelligence & Dashboards",
      badge: "Power BI & Visualization",
      accent: "from-purple-500 to-indigo-500",
      skills: [
        {
          name: "Power BI",
          level: "PL-300 Certified",
          exp: "Core Tool",
          image: "/skills/powerbi.svg",
          desc: "Star schema modeling, report design, drill-throughs, RLS, and interactive scorecards.",
        },
        {
          name: "DAX Modeling",
          level: "Measures & Logic",
          exp: "Calculations",
          image: "/skills/dax.svg",
          desc: "Time intelligence (MoM/YoY), CALCULATE, semi-additive measures, and dynamic slicers.",
        },
        {
          name: "Tableau",
          level: "Visual BI",
          exp: "Dashboards",
          image: "/skills/tableau.svg",
          desc: "Story points, visual analytics, parameters, calculated fields, and dashboard actions.",
        },
        {
          name: "Excel",
          level: "Spreadsheet Modeling",
          exp: "Formulas",
          image: "/skills/excel.svg",
          desc: "Power Pivot, XLOOKUP, nested functions, dynamic arrays, and pivot analysis.",
        },
        {
          name: "Google Sheets",
          level: "Operations MIS",
          exp: "MIS Tracking",
          image: "/skills/sheets.svg",
          desc: "Operational inventory tracking, dispatch logs, and reconciled cash ledgers.",
        },
      ],
    },
    {
      category: "Databases, Relational SQL & ETL",
      badge: "Data Querying & Pipelines",
      accent: "from-cyan-500 to-blue-500",
      skills: [
        {
          name: "SQL",
          level: "Relational Queries",
          exp: "Queries & Joins",
          image: "/skills/sql.svg",
          desc: "CTEs, window functions (ROW_NUMBER, DENSE_RANK), multi-table joins, and aggregations.",
        },
        {
          name: "PostgreSQL",
          level: "Relational DB",
          exp: "Schema & Views",
          image: "/skills/postgresql.png",
          desc: "Schema design, relational constraints, joins, and analytical reporting views.",
        },
        {
          name: "MySQL",
          level: "Relational DB",
          exp: "Transactional",
          image: "/skills/mysql.png",
          desc: "Operational schemas, analytical queries, and transactional data integrity.",
        },
        {
          name: "Power Query (M)",
          level: "ETL & Cleaning",
          exp: "Data Prep",
          image: "/skills/powerquery.svg",
          desc: "Data profiling, automated transformations, unpivoting, and handling missing values.",
        },
      ],
    },
    {
      category: "Python Analytics & Machine Learning",
      badge: "Data Science & Automation",
      accent: "from-indigo-500 to-emerald-500",
      skills: [
        {
          name: "Python",
          level: "Data Analytics",
          exp: "EDA & Scripts",
          image: "/skills/python.svg",
          desc: "Exploratory data analysis, data cleaning, automated workflows, and feature engineering.",
        },
        {
          name: "Pandas",
          level: "Data Wrangling",
          exp: "DataFrames",
          image: "/skills/pandas.svg",
          desc: "DataFrames, group-by aggregations, time-series resampling, and data preprocessing.",
        },
        {
          name: "NumPy",
          level: "Numerical Ops",
          exp: "Arrays",
          image: "/skills/numpy.svg",
          desc: "Array operations, vectorization, statistical distributions, and calculations.",
        },
        {
          name: "Scikit-Learn",
          level: "Machine Learning",
          exp: "Models",
          image: "/skills/scikit-learn.svg",
          desc: "Supervised classification, regression, cross-validation, and performance metrics.",
        },
        {
          name: "Git & GitHub",
          level: "Version Control",
          exp: "Collaboration",
          image: "/skills/git.svg",
          desc: "Repository management, versioning, and open-source portfolio code publishing.",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-8 h-full relative overflow-hidden py-20 px-4 md:px-8 max-w-7xl mx-auto z-20"
    >
      <SkillText />

      {/* 3D Cinematic Cosmos Analytics Video Showcase (Full-Width Large Viewport) */}
      <div className="w-full max-w-6xl mx-auto my-6 z-20">
        <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_60px_rgba(0,229,255,0.45)] bg-[#030014] group">
          <video
            className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/8] object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/videos/universe_data_analytics.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Categorized Skills Command Center with High-Contrast White Cards */}
      <div className="w-full flex flex-col gap-12 mt-4 z-20">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="flex flex-col gap-5">
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-7 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500 shadow-[0_0_12px_rgba(0,229,255,0.8)]" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {cat.category}
                </h3>
              </div>
              <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-purple-950/90 border border-purple-500/50 text-purple-200 shadow-md">
                {cat.badge}
              </span>
            </div>

            {/* High-Contrast White Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-2xl border-2 border-white/90 bg-white text-slate-900 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Top: Icon + Level Badge */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-13 h-13 w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={36}
                          height={36}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-950 shadow-sm">
                        {skill.level}
                      </span>
                    </div>

                    <h4 className="text-base font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                      {skill.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                      <FaCheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Applied Tool
                    </span>
                    <span className="font-mono font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                      {skill.exp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
