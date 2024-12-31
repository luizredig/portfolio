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
        "relative flex min-h-full flex-1 snap-start items-center",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Section;
