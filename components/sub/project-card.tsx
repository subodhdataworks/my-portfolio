import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaCheckCircle, FaDatabase } from "react-icons/fa";

type ProjectCardProps = {
  src: string;
  title: string;
  category?: string;
  description: string;
  problem?: string;
  daxArchitecture?: string;
  link: string;
  tags?: readonly string[];
  metric?: string;
};

export const ProjectCard = ({
  src,
  title,
  category,
  description,
  problem,
  daxArchitecture,
  link,
  tags,
  metric,
}: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-2xl border border-[#2A0E61] bg-[#0c0524]/80 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.25)] transition-all duration-500">
      {/* Dashboard Preview Frame */}
      <div className="relative w-full overflow-hidden border-b border-purple-900/30 bg-black/50">
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Floating KPI Metric Pill */}
        {metric && (
          <div className="absolute bottom-3 left-3 bg-[#030014]/90 backdrop-blur-md border border-cyan-500/60 text-cyan-300 text-xs px-3.5 py-1.5 rounded-full font-bold shadow-[0_0_15px_rgba(0,229,255,0.3)] flex items-center gap-1.5">
            <FaChartLine className="text-cyan-400 w-3 h-3" />
            <span>{metric}</span>
          </div>
        )}

        {category && (
          <div className="absolute top-3 right-3 bg-purple-950/90 backdrop-blur-md border border-purple-700/50 text-purple-200 text-[11px] px-2.5 py-1 rounded-full font-semibold">
            {category}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="relative p-6 flex flex-col flex-grow justify-between gap-4">
        <div>
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-950/80 border border-purple-700/50 text-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>

          <p className="mt-2.5 text-gray-300 text-xs sm:text-sm leading-relaxed">
            {description}
          </p>

          {/* Architecture / DAX Highlight */}
          {daxArchitecture && (
            <div className="mt-3 p-3 rounded-xl bg-[#030014]/70 border border-purple-800/40 text-[11px] text-gray-300">
              <span className="font-semibold text-cyan-300 block mb-1">
                Data Architecture &amp; DAX:
              </span>
              {daxArchitecture}
            </div>
          )}
        </div>

        {/* Action Link Footer */}
        <div className="pt-3 flex items-center justify-between border-t border-purple-900/40">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            <span>View Source &amp; Live Demo</span>
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-700/40 text-gray-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/60 transition-all"
            aria-label={`Open ${title}`}
          >
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
