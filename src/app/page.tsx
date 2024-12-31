import "@/app/css/scrollbar.css";
import "@/app/css/backgrounds/grid.css";

import IntroSection from "./components/sections/intro-section/IntroSection";
import ProjectsSection from "./components/sections/projects-section/ProjectsSection";
import SkillsSection from "./components/sections/skills-section/SkillsSection";

const Page = () => {
  return (
    <>
      <div className="flex h-full snap-y snap-mandatory flex-col overflow-y-auto">
        <IntroSection />

        <SkillsSection />

        <ProjectsSection />
      </div>
    </>
  );
};

export default Page;
