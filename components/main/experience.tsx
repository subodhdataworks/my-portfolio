"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { CERTIFICATIONS, EDUCATION, EXPERIENCES } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-10 max-w-7xl mx-auto z-20"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b] opacity-[0.95] mx-auto mb-4"
        >
          <span className="Welcome-text text-[13px] font-semibold tracking-wider uppercase">
            Career Journey &amp; Milestones
          </span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-white">
          Professional Experience
        </h2>
        <p className="text-gray-300 mt-3 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Proven track record of managing enterprise operational databases, engineering Power BI dashboards, and automating industrial MIS workflows.
        </p>
      </div>

      {/* Experience Timeline with High-Contrast White Cards */}
      <div className="w-full flex flex-col gap-8 mb-24">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="relative rounded-3xl border-2 border-white/90 bg-white text-slate-900 p-6 md:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:border-cyan-400 transition-all duration-300 group"
          >
            {/* Top Bar: Role, Company & Metadata */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-5">
              <div className="flex items-center gap-3.5">
                <span className="p-3 rounded-2xl bg-purple-100 border border-purple-300 text-purple-800 shadow-sm flex-shrink-0">
                  <FaBriefcase className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                    {exp.role}
                  </h3>
                  <h4 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">
                    {exp.company}
                  </h4>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 text-xs md:text-sm">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-900 font-bold">
                  <FaCalendarAlt className="text-purple-700" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-950 font-bold">
                  <FaMapMarkerAlt className="text-cyan-700" />
                  {exp.location}
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 font-bold">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Achievements Bullet Points */}
            <ul className="space-y-3 mb-6">
              {exp.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base leading-relaxed">
                  <FaCheckCircle className="text-cyan-600 mt-1 flex-shrink-0 w-4 h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Skills Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mr-1">
                Core Stack:
              </span>
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 border border-slate-300 text-slate-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education & Certifications Section with High-Contrast White Cards */}
      <div id="credentials" className="w-full pt-10">
        <div className="text-center mb-14">
          <div className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b] opacity-[0.95] mx-auto mb-4">
            <span className="Welcome-text text-[13px] font-semibold tracking-wider uppercase">
              Academic &amp; Professional Qualifications
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-white">
            Education &amp; Certifications
          </h2>
          <p className="text-gray-300 mt-3 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Verified industry credentials, postgraduate technical degrees, and competitive AI innovation honors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Education Column with High-Contrast White Cards */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-2">
              <span className="p-2 rounded-xl bg-cyan-950/70 border border-cyan-500/50 text-cyan-400">
                <FaGraduationCap className="w-5 h-5" />
              </span>
              <span>Academic Degrees</span>
            </h3>

            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="rounded-2xl border-2 border-white/90 bg-white text-slate-900 p-6 shadow-xl hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] hover:border-cyan-400 transition-all flex flex-col justify-between gap-3 group"
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-950 font-bold">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 mt-3 group-hover:text-purple-700 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-purple-700 mt-1 font-bold">
                    {edu.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Column with High-Contrast White Cards */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-2">
              <span className="p-2 rounded-xl bg-purple-950/70 border border-purple-500/50 text-purple-400">
                <FaAward className="w-5 h-5" />
              </span>
              <span>Certifications &amp; Honors</span>
            </h3>

            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`rounded-2xl border-2 ${
                  cert.highlight
                    ? "border-cyan-400 bg-white shadow-[0_12px_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.7)]"
                    : "border-white/90 bg-white shadow-xl hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,229,255,0.5)]"
                } p-5 transition-all duration-300 flex items-center justify-between gap-4 group hover:-translate-y-0.5`}
              >
                <div className="flex items-center gap-4">
                  {/* Official Logo Container */}
                  <div
                    className={`w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center p-1.5 overflow-hidden ${
                      cert.highlight
                        ? "bg-cyan-50 border-2 border-cyan-300 shadow-sm"
                        : "bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.issuer}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  <div>
                    <h4 className="text-base font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-purple-700 font-bold">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">• {cert.date}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all flex-shrink-0 shadow-sm"
                  aria-label={`View certification: ${cert.title}`}
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
