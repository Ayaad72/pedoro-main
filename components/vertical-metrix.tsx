import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView as useInViewIntersection } from "react-intersection-observer";

interface VerticalMetricsProps {
  percentage: number;
  children: React.ReactNode;
}

export function VerticalMetrics({
  percentage,
  children,
}: VerticalMetricsProps) {
  const divRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Using react-intersection-observer hook properly
  const { ref, inView } = useInViewIntersection({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      className="metrix-container relative w-64 overflow-hidden md:h-[300px] md:w-96 h-[800px]"
      ref={divRef}
    >
      <motion.div
        ref={ref}
        className="absolute top-0 left-0 w-full p-6 text-[#41CE84] md:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-6xl font-bold mb-4 text-[#41CE84]">
          {percentage}%
        </div>
        {children}
      </motion.div>
    </div>
  );
}
