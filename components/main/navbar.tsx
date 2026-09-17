'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="Subodh Kumar Logo"
            width={55}
            height={55}
            draggable={false}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
          <div className="hidden md:flex flex-col">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-[15px] tracking-wide">
              SUBODH KUMAR
            </span>
            <span className="text-[11px] text-gray-400 tracking-wider uppercase font-medium">
              Data Analyst &amp; BI
            </span>
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden lg:flex w-auto h-full flex-row items-center justify-between">
          <div className="flex items-center gap-7 h-auto border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.45)] px-[24px] py-[8px] rounded-full text-gray-200 text-[14px]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-cyan-400 transition-colors font-medium"
              >
                {link.title}
              </Link>
            ))}

            {/* GitHub Profile */}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer text-[#b49bff] hover:text-cyan-400 transition-colors font-semibold"
            >
              GitHub
            </Link>

            {/* Resume PDF Download */}
            <a
              href="/Subodh_Kumar_Resume.pdf"
              download="Subodh_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-cyan-300 hover:text-white transition-colors font-semibold"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row items-center gap-4">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              title={name}
              className="p-2 rounded-full border border-purple-800/40 bg-purple-950/20 hover:border-cyan-400 hover:scale-110 transition-all text-gray-200 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
          <Link
            href="mailto:subodh.dataworks@gmail.com"
            className="hidden xl:inline-flex py-1.5 px-4 button-primary rounded-full text-xs font-semibold text-white tracking-wide border border-[#7042f88b]"
          >
            Hire Me
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          aria-label="Toggle navigation menu"
          className="lg:hidden text-white focus:outline-none text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-b border-purple-900/40 p-6 flex flex-col items-center text-gray-200 lg:hidden shadow-2xl">
          {/* Links */}
          <div className="flex flex-col items-center gap-5 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-cyan-400 transition text-center text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer text-[#b49bff] hover:text-cyan-400 transition text-center text-lg font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GitHub Profile
            </Link>
            <a
              href="/Subodh_Kumar_Resume.pdf"
              download="Subodh_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-cyan-300 hover:text-white transition text-center text-lg font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download Resume (PDF)
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-purple-900/30 w-full">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="p-2.5 rounded-full border border-purple-800/40 bg-purple-950/40 text-gray-200 hover:text-cyan-400"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};