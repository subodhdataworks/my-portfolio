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
          <span className="Welcome-text text-[13px] font-medium tracking-wide">
            Career Journey &amp; Milestones
          </span>
        </motion.div>

        <h2 className="text-[34px] md:text-[44px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Professional Experience
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          Proven track record of managing enterprise operational databases, engineering Power BI dashboards, and automating MIS workflows.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="w-full flex flex-col gap-8 mb-24">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="relative rounded-2xl border border-[#2A0E61] bg-[#0c0524]/60 backdrop-blur-md p-6 md:p-8 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(112,66,248,0.25)] transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-purple-900/40 pb-5 mb-5">
              <div>
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-purple-900/30 border border-purple-600/40 text-cyan-400">
                    <FaBriefcase className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      {exp.company}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-300">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-700/50">
                  <FaCalendarAlt className="text-purple-400" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-700/40 text-cyan-300">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  {exp.location}
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/40 text-indigo-200 font-medium">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Achievements Bullet Points */}
            <ul className="space-y-3 mb-6">
              {exp.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                  <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0 w-4 h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-purple-900/30">
              <span className="text-xs text-gray-400 self-center font-medium mr-1">
                Key Stack:
              </span>
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-0.5 rounded-full text-xs font-semibold bg-purple-950/80 border border-purple-700/50 text-purple-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education & Certifications Section */}
      <div id="credentials" className="w-full pt-10">
        <div className="text-center mb-14">
          <h2 className="text-[32px] md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Education &amp; Certifications
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Verified industry qualifications, advanced degrees, and technical awards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
              <FaGraduationCap className="text-cyan-400" />
              Academic Degrees
            </h3>

            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="rounded-2xl border border-[#2A0E61] bg-[#0c0524]/60 p-6 hover:border-purple-500/50 transition-all flex flex-col justify-between gap-3"
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-600/40 text-cyan-300 font-semibold">
                      {edu.badge}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-3">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-purple-300 mt-1 font-medium">
                    {edu.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
              <FaAward className="text-purple-400" />
              Certifications &amp; Honors
            </h3>

            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`rounded-2xl border ${
                  cert.highlight
                    ? "border-cyan-500/60 bg-[#0e0730]/80 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                    : "border-[#2A0E61] bg-[#0c0524]/60"
                } p-5 hover:border-cyan-400/60 transition-all flex items-center justify-between gap-4`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center p-1.5 overflow-hidden ${
                      cert.highlight
                        ? "bg-cyan-950/60 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                        : "bg-purple-950/60 border border-purple-700/40"
                    }`}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.issuer}
                      width={44}
                      height={44}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-purple-300 font-medium">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-gray-400">• {cert.date}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/40 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
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
