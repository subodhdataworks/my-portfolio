"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaCopy,
  FaSearchPlus,
  FaTimes,
  FaAward,
  FaShieldAlt,
  FaDatabase,
  FaChartPie,
  FaCogs,
  FaLock,
  FaMicrosoft,
} from "react-icons/fa";

export const CertificationSpotlight = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const credentialId = "D7910E2DB3A299BB";
  const certNumber = "DE75E7-A6538D";

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const domains = [
    {
      title: "Model the Data",
      percent: "30-35%",
      icon: FaDatabase,
      desc: "Star schemas, 1:N relationships, complex DAX measures (CALCULATE, time intelligence, semi-additive metrics).",
      tags: ["Star Schema", "DAX", "Calculated Columns", "Row Context"],
    },
    {
      title: "Prepare the Data",
      percent: "25-30%",
      icon: FaCogs,
      desc: "Power Query ETL, M code scripting, data profiling, deduplication, handling nulls & anomalous entries.",
      tags: ["Power Query", "M Code", "Data Cleaning", "Schema Normalization"],
    },
    {
      title: "Visualize & Analyze Data",
      percent: "25-30%",
      icon: FaChartPie,
      desc: "Executive KPI scorecards, drill-throughs, bookmarks, dynamic conditional formatting, cohort analytics.",
      tags: ["KPI Scorecards", "Bookmarks", "Drill-Through", "Visual Analytics"],
    },
    {
      title: "Deploy & Maintain Assets",
      percent: "20-25%",
      icon: FaLock,
      desc: "Row-Level Security (RLS), workspace collaboration, on-premises data gateways, dataset refresh governance.",
      tags: ["Row-Level Security", "Workspaces", "Gateway Refresh", "Lineage"],
    },
  ];

  return (
    <section
      id="certification"
      className="relative flex flex-col items-center justify-center py-20 px-4 md:px-10 max-w-7xl mx-auto z-20"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[500px] bg-gradient-to-r from-cyan-600/15 via-blue-600/20 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header Tag */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-950/70 border border-cyan-500/50 shadow-[0_0_20px_rgba(0,229,255,0.2)] mb-4">
          <FaMicrosoft className="text-[#00A4EF] w-4 h-4" />
          <span className="text-xs uppercase tracking-widest font-bold text-cyan-300">
            Official Credential Verification
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-300">
          Microsoft Certified Power BI Data Analyst
        </h2>
        <p className="text-gray-300 mt-3 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Rigorous industry benchmark validating enterprise-grade Power BI report design, advanced DAX modeling, relational ETL, and executive data governance.
        </p>
      </div>

      {/* Grid: Left Certificate Proof & Right Domain Masteries */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Card: 7 Columns - Official Badge & Credential Verification Proof */}
        <div className="lg:col-span-7 rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-[#0e0730]/90 via-[#07031e]/90 to-[#030014]/90 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,164,239,0.2)] hover:border-cyan-400 transition-all flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Cyber Grid */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Top row: Badge + Title */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-purple-800/40 pb-6">
              {/* Official Badge Shield */}
              <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 drop-shadow-[0_0_25px_rgba(0,164,239,0.55)] group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/certificates/microsoft-pl300-badge.webp"
                    alt="Microsoft Certified: Power BI Data Analyst Associate Badge"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-cyan-950 border border-cyan-400 text-cyan-300 text-xs shadow-md">
                  <FaSearchPlus className="w-3 h-3" />
                </span>
              </div>

              {/* Title & Status */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Active Status
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-500/60 text-cyan-300 text-xs font-semibold">
                    Associate ★★
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  Power BI Data Analyst Associate (PL-300)
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Issued to <span className="text-cyan-300 font-semibold">Subodh Kumar</span> by <span className="text-white font-semibold">Microsoft</span>
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Signatory: Satya Narayana Nadella, Chairman &amp; CEO
                </p>
              </div>
            </div>

            {/* Verifiable Credentials Spec Sheet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {/* Credential ID */}
              <div className="p-3.5 rounded-2xl bg-[#030014]/70 border border-purple-800/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-400 block font-medium">Credential ID</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-cyan-300 tracking-wider">
                    {credentialId}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copy Credential ID"
                  className="p-2 rounded-lg bg-purple-950/60 hover:bg-cyan-950 text-gray-300 hover:text-cyan-300 border border-purple-700/40 hover:border-cyan-500 transition-all text-xs flex items-center gap-1"
                >
                  <FaCopy className="w-3.5 h-3.5" />
                  <span className="text-[10px]">{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* Certification Number */}
              <div className="p-3.5 rounded-2xl bg-[#030014]/70 border border-purple-800/40">
                <span className="text-[11px] text-gray-400 block font-medium">Certification Number</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-purple-200 tracking-wider">
                  {certNumber}
                </span>
              </div>

              {/* Earned Date */}
              <div className="p-3.5 rounded-2xl bg-[#030014]/70 border border-purple-800/40">
                <span className="text-[11px] text-gray-400 block font-medium">Earned On</span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  7 September 2026
                </span>
              </div>

              {/* Expiry Date */}
              <div className="p-3.5 rounded-2xl bg-[#030014]/70 border border-purple-800/40">
                <span className="text-[11px] text-gray-400 block font-medium">Valid Through</span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-300">
                  8 September 2027 (Active)
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Actions: Certificate Lightbox & External Verification */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-purple-900/40">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex-1 min-w-[160px] py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,164,239,0.4)] transition-all"
            >
              <FaAward className="w-4 h-4" />
              <span>Inspect Official Certificate</span>
            </button>

            <Link
              href="https://www.linkedin.com/in/subodh-kumar-3520503ba/details/certifications/"
              target="_blank"
              rel="noreferrer noopener"
              className="py-3 px-5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-700/50 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <span>Verify Online</span>
              <FaExternalLinkAlt className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Right Card: 5 Columns - 4 Exam Competency Domains */}
        <div className="lg:col-span-5 rounded-3xl border border-[#2A0E61] bg-[#0c0524]/80 backdrop-blur-xl p-6 md:p-7 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-purple-900/40">
              <div>
                <h4 className="text-lg font-bold text-white">
                  Exam PL-300 Competency Domains
                </h4>
                <p className="text-xs text-gray-400">
                  Core competencies evaluated &amp; certified by Microsoft
                </p>
              </div>
              <span className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
                <FaShieldAlt className="w-4 h-4" />
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {domains.map((dom) => {
                const IconComponent = dom.icon;
                return (
                  <div
                    key={dom.title}
                    className="p-3.5 rounded-2xl bg-[#030014]/60 border border-purple-900/30 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-cyan-400" />
                        <h5 className="text-sm font-bold text-white">
                          {dom.title}
                        </h5>
                      </div>
                      <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/70 px-2 py-0.5 rounded-md border border-purple-800/40">
                        {dom.percent}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed mb-2.5">
                      {dom.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {dom.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-purple-950/70 border border-purple-800/40 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-purple-900/40 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
              <FaCheckCircle className="w-3.5 h-3.5" /> 100% Industry Standard
            </span>
            <span>Credential ID: D7910E2DB3A299BB</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Certificate Preview */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl border border-cyan-500/50 bg-[#08021d] p-4 sm:p-6 shadow-[0_0_70px_rgba(0,229,255,0.4)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-purple-950/80 hover:bg-red-950/80 text-gray-300 hover:text-white border border-purple-700/50 hover:border-red-500 transition-all z-20"
                aria-label="Close modal"
              >
                <FaTimes className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src="/certificates/microsoft-pl300-badge.webp"
                    alt="Microsoft Badge"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Microsoft Certified: Power BI Data Analyst Associate
                  </h3>
                  <p className="text-xs text-gray-300">
                    Credential ID: <span className="text-cyan-300 font-mono font-bold">D7910E2DB3A299BB</span> • Satya Nadella Signature
                  </p>
                </div>
              </div>

              {/* High-Res Certificate Image */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-purple-800/40 bg-black">
                <Image
                  src="/certificates/microsoft-pl300-certificate.png"
                  alt="Subodh Kumar Microsoft PL-300 Certificate"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-purple-900/40">
                <span className="text-xs text-gray-300">
                  Earned: <strong className="text-white">7 Sep 2026</strong> | Expires: <strong className="text-emerald-300">8 Sep 2027</strong>
                </span>
                <Link
                  href="https://www.linkedin.com/in/subodh-kumar-3520503ba/details/certifications/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="py-2 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <span>Verify on LinkedIn</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
