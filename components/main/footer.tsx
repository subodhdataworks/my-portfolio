import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 border-t border-purple-900/30 pt-16 pb-12 px-6 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Footer Columns */}
        <div className="w-full flex flex-row items-start justify-between flex-wrap gap-10 mb-14 px-4">
          {/* Brand Intro Column */}
          <div className="max-w-xs flex flex-col items-start">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
              SUBODH KUMAR
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Data Analyst transforming multi-gigabyte transactional datasets into automated Power BI reporting environments and predictive insights.
            </p>
            <div className="text-xs text-purple-300 font-medium">
              📍 New Delhi, India • Open for Roles
            </div>
          </div>

          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[160px] h-auto flex flex-col items-start"
            >
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 border-b border-purple-500/30 pb-1">
                {column.title}
              </h4>
              <div className="flex flex-col gap-3">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target={link.startsWith("http") ? "_blank" : undefined}
                    rel={link.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="flex items-center text-xs md:text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {Icon && <Icon className="mr-2 text-purple-400 w-3.5 h-3.5" />}
                    <span>{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-6 border-t border-purple-900/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 px-4 text-center md:text-left">
          <div>
            &copy; {new Date().getFullYear()} Subodh Kumar. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#about-me" className="hover:text-cyan-400 transition-colors">
              Back to top ↑
            </Link>
            <Link
              href="https://subodhdataworks.github.io/my-portfolio/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-cyan-400 transition-colors"
            >
              Live Portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
