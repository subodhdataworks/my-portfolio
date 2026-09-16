"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { FaChartPie, FaFilter } from "react-icons/fa";

export const Projects = () => {
  const [filter, setFilter] = useState<string>("ALL");

  const projectDetails = [
    {
      title: "PhonePe Payment Analytics Dashboard",
      category: "Fintech & Power BI",
      description:
        "Enterprise Power BI analytics platform processing 288K+ digital transactions worth ₹3B across 108K unique users with 96% SLA success rate. Evaluated loan-to-service growth and user demographics.",
      daxArchitecture:
        "Engineered time-intelligence DAX measures (MoM/YoY growth, transaction velocity), age-segment slicers, and weekday vs. weekend distribution models.",
      image: "/projects/phonepe-analytics.jpg",
      link: "https://github.com/subodhdataworks/PhonePe-Payment-Analytics-PowerBI",
      tags: ["Power BI", "DAX", "Power Query", "SQL", "Fintech"],
      metric: "₹3B Volume • 288K Txns • 96% Success",
      filterType: "POWER_BI",
    },
    {
      title: "Starbucks Beverage Nutritional Intelligence",
      category: "Consumer BI & DAX",
      description:
        "Comprehensive nutritional analysis built with Power Query and DAX, analyzing 33 beverage categories for calorie distribution (avg 193.87 kcal), sugar content (avg 32.96g), and caffeine concentration.",
      daxArchitecture:
        "Custom calculated columns for nutritional health indices, global market presence geo-mapping, and Top 5 high-caffeine beverage filters.",
      image: "/projects/starbucks-analytics.jpg",
      link: "https://github.com/subodhdataworks/-Starbucks-Beverage-Analytics-Dashboard-Power-BI",
      tags: ["Power BI", "Power Query", "DAX", "Advanced Excel"],
      metric: "33 Beverages • Nutrition KPIs • Global Map",
      filterType: "POWER_BI",
    },
    {
      title: "NeuroSathi - AI Healthcare (2nd Prize Winner)",
      category: "AI & Machine Learning",
      description:
        "Award-winning predictive AI solution developed as a core member of Team Psytech, securing 2nd Prize at the AI Innovation Challenge 2026. Engineered end-to-end data pipelines to empower neurodivergent minds.",
      daxArchitecture:
        "Built Python data preprocessing workflows, EDA pipelines, and inference models integrated with real-time responsive analytics.",
      image: "/projects/neurosathi-award.jpg",
      link: "https://lnkd.in/p/d66am9pf",
      tags: ["Python", "Machine Learning", "AI Engineering", "Team Psytech"],
      metric: "🏆 2nd Prize • Team Psytech • Official Post",
      filterType: "AI_ML",
    },
  ];

  const filteredProjects =
    filter === "ALL"
      ? projectDetails
      : projectDetails.filter((p) => p.filterType === filter);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-10 max-w-7xl mx-auto z-20"
    >
      <div className="text-center mb-10">
        <div className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b] opacity-[0.95] mx-auto mb-4">
          <span className="Welcome-text text-[13px] font-semibold tracking-wider uppercase">
            Production-Grade Case Studies
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-white">
          Featured Analytics Projects
        </h2>
        <p className="text-gray-300 mt-3 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Interactive dashboards, star-schema data models, and predictive machine learning architectures built for real-world enterprise impact.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-1.5 rounded-2xl bg-[#030014]/80 border border-purple-800/40 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setFilter("ALL")}
          className={`px-4 py-1.5 text-xs font-semibold rounded-xl transition-all ${
            filter === "ALL"
              ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(0,229,255,0.4)]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          All Dashboards &amp; Models ({projectDetails.length})
        </button>

        <button
          type="button"
          onClick={() => setFilter("POWER_BI")}
          className={`px-4 py-1.5 text-xs font-semibold rounded-xl transition-all ${
            filter === "POWER_BI"
              ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(0,229,255,0.4)]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          📊 Power BI &amp; DAX (2)
        </button>

        <button
          type="button"
          onClick={() => setFilter("AI_ML")}
          className={`px-4 py-1.5 text-xs font-semibold rounded-xl transition-all ${
            filter === "AI_ML"
              ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(0,229,255,0.4)]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          🐍 Python &amp; AI (1)
        </button>
      </div>

      {/* Projects Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            category={project.category}
            description={project.description}
            daxArchitecture={project.daxArchitecture}
            link={project.link}
            tags={project.tags}
            metric={project.metric}
          />
        ))}
      </div>
    </section>
  );
};
