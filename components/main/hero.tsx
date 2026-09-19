import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="rotate-180 absolute top-[-460px] sm:top-[-340px] left-0 w-full h-[750px] sm:h-full object-cover -z-20 opacity-50 sm:opacity-80 pointer-events-none"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Dark Vignette Overlay for High-Contrast Mobile & Desktop Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/60 via-[#030014]/40 to-[#030014] -z-10 pointer-events-none" />

      <HeroContent />
    </div>
  );
};
