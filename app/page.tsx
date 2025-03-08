import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import GitHubActivitySection from "@/components/sections/GithubActivitySection";
import ProjectSection from "@/components/sections/ProjectSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <GitHubActivitySection />
      <ProjectSection />
    </main>
  );
}