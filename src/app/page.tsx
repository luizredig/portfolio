import IntroSection from "./components/sections/intro-section/IntroSection";
import ProjectsSection from "./components/sections/projects-section/ProjectsSection";

const Page = () => {
  return (
    <>
      <div className="flex h-full snap-y snap-mandatory flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <IntroSection />

        <ProjectsSection />
      </div>
    </>
  );
};

export default Page;
