import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueegBanner() {
  const MarqueeText = () => (
    <div>
      <span className="inline-flex items-center text-[#7F1911] text-xl font-medium px-4">
        PEDROCOIN
      </span>
      <span className="inline-flex items-center text-[#7F1911] text-xl font-medium px-4">
        x
      </span>
      <span className="inline-flex items-center text-[#7F1911] text-xl font-medium px-4">
        AWKWARDLY EPIC
      </span>
      <span className="inline-flex items-center text-[#7F1911] text-xl font-medium px-4">
        x
      </span>
    </div>
  );
  return (
    <div className="bg-[#D38A59] transform-rotate-[13deg] scale-110 overflow-hidden whitespace-nowrap h-[64px] flex items-center border-t-2 border-b-2 border-[#7F1911]">
      <Marquee gradient={false} speed={30}>
        <MarqueeText />
        <MarqueeText />
        <MarqueeText />
        <MarqueeText />
      </Marquee>
    </div>
  );
}
