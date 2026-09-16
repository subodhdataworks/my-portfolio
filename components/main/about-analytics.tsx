"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaDatabase,
  FaCogs,
  FaBrain,
  FaCheckCircle,
  FaCode,
  FaCopy,
  FaArrowRight,
  FaIndustry,
} from "react-icons/fa";
import { SiPostgresql, SiPython } from "react-icons/si";

export const AboutAnalytics = () => {
  const [activeTab, setActiveTab] = useState<"dax" | "sql" | "python">("dax");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    dax: `// ========================================================
// DAX MEASURE: MoM % Revenue Growth with Time Intelligence
// Microsoft Certified PL-300 Standard
// ========================================================
Revenue_CurrentMonth = SUM( 'Fact_Transactions'[Transaction_Amount] )

Revenue_PreviousMonth = 
CALCULATE (
    [Revenue_CurrentMonth],
    DATEADD( 'Dim_Date'[Date], -1, MONTH )
)

Revenue_MoM_Growth% = 
VAR _Current = [Revenue_CurrentMonth]
VAR _Previous = [Revenue_PreviousMonth]
RETURN
    DIVIDE( 
        _Current - _Previous, 
        _Previous, 
        0 
    )

// Dynamic Formatted KPI Indicator
MoM_Indicator = 
SWITCH(
    TRUE(),
    [Revenue_MoM_Growth%] > 0.05, "🟢 High Growth (+" & FORMAT([Revenue_MoM_Growth%], "0.0%") & ")",
    [Revenue_MoM_Growth%] >= 0,   "🟡 Stable (+" & FORMAT([Revenue_MoM_Growth%], "0.0%") & ")",
    "🔴 Attention Required (" & FORMAT([Revenue_MoM_Growth%], "0.0%") & ")"
)`,
    sql: `-- ========================================================
-- SQL: Daily Transaction Velocity & Rolling 7-Day Window
-- Modeled across 288K+ Fintech Records (PhonePe Analytics)
-- ========================================================
WITH Daily_Summary AS (
    SELECT 
        CAST(t.transaction_timestamp AS DATE) AS txn_date,
        t.payment_instrument,
        COUNT(t.txn_id) AS total_txns,
        SUM(t.amount_inr) AS total_volume_inr,
        AVG(CASE WHEN t.status = 'SUCCESS' THEN 1.0 ELSE 0.0 END) * 100 AS success_rate_pct
    FROM fact_digital_transactions t
    WHERE t.transaction_timestamp >= CURRENT_DATE - INTERVAL '90 days'
    GROUP BY CAST(t.transaction_timestamp AS DATE), t.payment_instrument
)
SELECT 
    txn_date,
    payment_instrument,
    total_txns,
    total_volume_inr,
    success_rate_pct,
    -- 7-Day Moving Average for Volume Velocity
    AVG(total_volume_inr) OVER(
        PARTITION BY payment_instrument 
        ORDER BY txn_date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS rolling_7d_avg_volume,
    -- Rank high-spike days
    DENSE_RANK() OVER(
        PARTITION BY payment_instrument 
        ORDER BY total_volume_inr DESC
    ) AS volume_spike_rank
FROM Daily_Summary
ORDER BY txn_date DESC, total_volume_inr DESC;`,
    python: `# ========================================================
# PYTHON: Automated Data Hygiene & Outlier IQR Imputation
# Analyzed across industrial operations (170+ TPD production)
# ========================================================
import pandas as pd
import numpy as np

def clean_operational_metrics(df: pd.DataFrame) -> pd.DataFrame:
    """Standardizes production, furnace heat output, and dispatch logs."""
    cleaned = df.copy()
    
    # 1. Standardize column names & dates
    cleaned.columns = [col.strip().lower().replace(' ', '_') for col in cleaned.columns]
    cleaned['date'] = pd.to_datetime(cleaned['date'], errors='coerce')
    
    # 2. Detect & Bound Outliers using IQR for Furnace Production (TPD)
    Q1 = cleaned['production_tonnes'].quantile(0.25)
    Q3 = cleaned['production_tonnes'].quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    
    # Cap anomalous sensor spikes
    cleaned['production_clipped'] = cleaned['production_tonnes'].clip(lower_bound, upper_bound)
    
    # 3. Compute 7-day rolling efficiency index
    cleaned['rolling_7d_eff'] = cleaned['production_clipped'].rolling(window=7, min_periods=1).mean()
    
    # 4. Reconciliation discrepancy flag
    cleaned['reconciliation_diff'] = cleaned['finished_dispatch'] - cleaned['production_clipped']
    cleaned['requires_audit'] = np.where(cleaned['reconciliation_diff'].abs() > 5.0, True, False)
    
    return cleaned`,
  };

  const handleCopyCode = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(codeSnippets[activeTab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const pillars = [
    {
      title: "Data Modeling & DAX",
      icon: FaDatabase,
      badge: "Star Schema Specialist",
      desc: "Architecting Kimball star schemas with dedicated dimension and fact tables, eliminating bidirectional relationship bottlenecks, and crafting performant time-intelligence DAX.",
      stat: "10+ Reusable Measures",
    },
    {
      title: "High-Volume Analytics",
      icon: FaChartLine,
      badge: "Fintech & Industrial",
      desc: "Proven track record analyzing 288K+ transactional records (₹3.47B+ digital volume), auditing 100+ tonnes/day dispatches, and identifying critical revenue trends.",
      stat: "₹3.47B+ Modeled",
    },
    {
      title: "5+ Years Industrial MIS",
      icon: FaIndustry,
      badge: "Ganesh Foundry & Castings",
      desc: "5+ years of tracking 170+ TPD Furnace production, 120+ TPD Rolling Mill output, stock reconciliations, and daily ₹6.5+ lakh cash register accountability.",
      stat: "5+ Years MIS Experience",
    },
    {
      title: "Predictive AI & Python",
      icon: FaBrain,
      badge: "AI Challenge 2nd Prize",
      desc: "Blending classical statistical data analytics with Python (Pandas, NumPy, Scikit-learn) and Gemini AI to build predictive models and automated data validation pipelines.",
      stat: "🏆 2nd Prize Winner",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-4 md:px-10 max-w-7xl mx-auto z-20">
      {/* Ambient Section Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b] opacity-[0.95] mx-auto mb-4">
          <span className="Welcome-text text-[13px] font-semibold tracking-wider uppercase">
            Data Architecture &amp; Analytics Philosophy
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-white">
          The Data Analyst Mindset
        </h2>
        <p className="text-gray-300 mt-3 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Data analysis isn&apos;t just about creating pretty charts—it&apos;s about translating messy, unorganized raw operations into clear, confident executive decision velocity.
        </p>
      </div>

      {/* 4 Pillars Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {pillars.map((p, idx) => {
          const IconComp = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border border-purple-900/40 bg-gradient-to-b from-[#0c0524]/80 to-[#030014]/90 p-5 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-purple-950/70 border border-purple-700/50 text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-700/40 text-cyan-300">
                    {p.stat}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-900/30 text-[11px] font-medium text-purple-300">
                {p.badge}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Production Code & Formula Sandbox */}
      <div className="w-full rounded-3xl border border-cyan-500/30 bg-[#07021b]/90 backdrop-blur-xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
        {/* Terminal Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-800/40 pb-4 mb-6">
          <div className="flex items-center gap-3">
            {/* Terminal Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 pl-2">
              <FaCode className="text-cyan-400 w-4 h-4" />
              <span className="text-sm font-bold text-white font-mono">
                Production Code &amp; Formulas Written by Subodh
              </span>
            </div>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-[#030014] border border-purple-800/50">
            <button
              type="button"
              onClick={() => setActiveTab("dax")}
              className={`px-3 py-1 text-xs font-mono font-semibold rounded-lg transition-all ${
                activeTab === "dax"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              📊 Power BI DAX
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("sql")}
              className={`px-3 py-1 text-xs font-mono font-semibold rounded-lg transition-all ${
                activeTab === "sql"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              🗄️ SQL Pipeline
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("python")}
              className={`px-3 py-1 text-xs font-mono font-semibold rounded-lg transition-all ${
                activeTab === "python"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              🐍 Python EDA
            </button>
          </div>
        </div>

        {/* Code Display Area */}
        <div className="relative rounded-2xl bg-[#030014] border border-purple-900/40 p-4 sm:p-5 font-mono text-xs sm:text-sm text-cyan-200 overflow-x-auto shadow-inner">
          <button
            type="button"
            onClick={handleCopyCode}
            className="absolute top-4 right-4 p-2 rounded-lg bg-purple-950/80 hover:bg-cyan-950 text-gray-300 hover:text-cyan-300 border border-purple-700/40 hover:border-cyan-500 transition-all text-xs flex items-center gap-1.5"
            title="Copy Code"
          >
            <FaCopy className="w-3.5 h-3.5" />
            <span className="text-[11px]">{copied ? "Copied to Clipboard!" : "Copy Snippet"}</span>
          </button>

          <pre className="pt-2 leading-relaxed whitespace-pre font-mono text-gray-200">
            {codeSnippets[activeTab]}
          </pre>
        </div>

        {/* Interactive Pipeline Steps Footer */}
        <div className="mt-6 pt-5 border-t border-purple-900/40 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-cyan-300">Subodh&apos;s Data Pipeline:</span>
            <span className="px-2.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-800/40">1. Ingest (SQL/CSV/Sheets)</span>
            <FaArrowRight className="w-3 h-3 text-purple-400" />
            <span className="px-2.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-800/40">2. Clean (Power Query / Python)</span>
            <FaArrowRight className="w-3 h-3 text-purple-400" />
            <span className="px-2.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-800/40">3. Model (Star Schema &amp; DAX)</span>
            <FaArrowRight className="w-3 h-3 text-purple-400" />
            <span className="px-2.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-600/50 text-cyan-300 font-semibold">4. Executive BI Dashboard</span>
          </div>

          <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
            <FaCheckCircle className="w-3.5 h-3.5" />
            Production-Tested Logic
          </span>
        </div>
      </div>
    </section>
  );
};
