import React from "react";
import Section from "../Section";
import AnimatedTitles from "./AnimatedTitles";

const IntroSection = () => {
  return (
    <Section className="px-5 md:px-40">
      <AnimatedTitles />

      <div className="bg-grid absolute inset-0 flex h-full flex-1 opacity-5">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
      </div>
    </Section>
  );
};

export default IntroSection;
