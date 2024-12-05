"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const AnimatedTitles = () => {
  const [currentKey, setCurrentKey] = useState(0);
  const gradients = [
    "#7BD0FF, #00DC80",
    "#F4D52F, #F19E21",
    "#A30CFF, #008DDC",
  ];

  return (
    <>
      <div className="flex max-h-20 flex-col items-start">
        <p className="text-4xl md:text-6xl">I'm</p>

        <div
          className="flex h-full items-start pb-2 text-4xl font-bold md:text-6xl"
          style={{
            display: "inline-block",
            overflowWrap: "break-word",
            wordBreak: "break-word",
            backgroundImage: `linear-gradient(to right, ${gradients[currentKey]})`,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          <TypeAnimation
            sequence={[
              "redig",
              1000,
              "",
              () => setCurrentKey(1),
              "a son of God",
              1000,
              "",
              () => setCurrentKey(2),
              "a full stack developer",
              1000,
              "",
              () => setCurrentKey(0),
              "",
            ]}
            repeat={Infinity}
            wrapper="p"
            cursor={true}
            preRenderFirstString={true}
            className="pb-2"
          />
        </div>
      </div>
    </>
  );
};

export default AnimatedTitles;
