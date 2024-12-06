import React, { forwardRef, RefObject } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export type SectionProps = {
  children?: React.ReactNode;
  backRef?: RefObject<HTMLDivElement>;
  nextRef?: RefObject<HTMLDivElement>;
};

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, backRef, nextRef }, ref) => {
    return (
      <div
        ref={ref}
        className="relative flex min-h-full items-center px-5 md:px-40"
      >
        {backRef && (
          <Button
            size={"icon"}
            variant={"outline"}
            className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full border-none"
            onClick={() => {
              backRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ChevronUp />
          </Button>
        )}

        {children}

        {nextRef && (
          <Button
            size={"icon"}
            variant={"outline"}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border-none"
            onClick={() => {
              nextRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ChevronDown />
          </Button>
        )}
      </div>
    );
  },
);

Section.displayName = "Section";
export default Section;
