import React, { forwardRef } from "react";
import AnimatedTitles from "./AnimatedTitles";
import Section, { SectionProps } from "../Section";

type IntroSectionProps = SectionProps;

const IntroSection = forwardRef<HTMLDivElement, IntroSectionProps>(
  (props, ref) => {
    return (
      <Section ref={ref} {...props}>
        <AnimatedTitles />
      </Section>
    );
  },
);

IntroSection.displayName = "IntroSection";
export default IntroSection;
