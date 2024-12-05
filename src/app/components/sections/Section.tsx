import React from "react";

type SectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return (
    <>
      <div className="flex min-h-full items-center px-5 md:px-40">
        {children}
      </div>
    </>
  );
};

export default Section;
