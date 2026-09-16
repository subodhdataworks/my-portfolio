import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tags?: readonly string[];
  metric?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  tags,
  metric,
}: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-[#2A0E61] bg-[#0c0524]/70 backdrop-blur-md flex flex-col justify-between hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(112,66,248,0.3)] transition-all duration-300">
      <div className="relative w-full overflow-hidden border-b border-purple-900/30">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={625}
          className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {metric && (
          <div className="absolute bottom-3 left-3 bg-[#030014]/85 backdrop-blur-md border border-cyan-500/50 text-cyan-300 text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
            {metric}
          </div>
        )}
      </div>

      <div className="relative p-6 flex flex-col flex-grow justify-between gap-4">
        <div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
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

          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="mt-2.5 text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-purple-900/30">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-cyan-300 transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            <span>View Source &amp; Artifacts</span>
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="p-2 rounded-lg bg-purple-950/50 border border-purple-800/40 text-gray-300 hover:text-white hover:border-cyan-400 transition-all"
            aria-label={`Open ${title}`}
          >
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
