import { AboutAnalytics } from "@/components/main/about-analytics";
import { CertificationSpotlight } from "@/components/main/certification-spotlight";
import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12 sm:gap-16">
        <Hero />
        <CertificationSpotlight />
        <AboutAnalytics />
        <Skills />
        <Projects />
        <Encryption />
        <Experience />
      </div>
    </main>
  );
}
