import { cn } from "@/app/lib/utils";
import React from "react";

export type SectionProps = {
  children?: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <div
      className={cn(
        "relative flex min-h-full flex-1 snap-start items-center px-5 md:px-40",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Section;
