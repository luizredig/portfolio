"use client";

import { useRef } from "react";
import IntroSection from "./components/sections/intro-section/IntroSection";

const Page = () => {
  const introSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="flex h-full flex-col overflow-y-auto">
        <IntroSection ref={introSectionRef} />
      </div>
    </>
  );
};

export default Page;
