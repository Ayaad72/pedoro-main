"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        const { clientX: x, clientY: y } = event;
        cursorRef.current.style.transform = `translate3d(${x - 24}px, ${
          y - 24
        }px, 0)`;
      }
    };

    const handleHoverEvents = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        setIsHovering(event.target.matches("a, button, .hoverable"));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleHoverEvents);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHoverEvents);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed z-50 h-12 w-12 rounded-full transition-transform duration-300 pointer-events-none ${
        isHovering
          ? "bg-gradient-to-r from-[#8B4513] to-[#D2B48C] scale-150"
          : "bg-[#D2B48C]"
      }`}
      style={{
        willChange: "transform",
      }}
    />
  );
};

export default CustomCursor;
