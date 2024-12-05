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
      <div className="flex flex-col">
        <div className="flex flex-col gap-1 text-5xl md:text-7xl">
          <p>I'm</p>

          <div
            className="flex h-fit items-center text-wrap font-bold"
            style={{
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedTitles;
