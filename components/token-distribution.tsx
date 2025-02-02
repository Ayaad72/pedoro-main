"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TokenDistribution() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const controls = useAnimation();
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [animationStarted, setAnimationStarted] = useState(false);

  const bars = useMemo(
    () => [
      {
        percentage: 55,
        height: 500,
        title: "Liquidity Pool",
        coins: 550000000,
        description: "Locked liquidity ensures market stability",
      },
      {
        percentage: 25,
        height: 350,
        title: "Ecosystem Utility",
        coins: 250000000,
        description: "Staking rewards, governance, and transaction",
      },
      {
        percentage: 15,
        height: 180,
        title: "Team & Advisors",
        coins: 150000000,
        description: "Locked for 12-24 months with gradual vesting",
      },
      {
        percentage: 5,
        height: 100,
        title: "Marketing & Partnerships",
        coins: 50000000,
        description: "Meme campaigns and strategic collaborations",
      },
    ],
    []
  );

  useEffect(() => {
    if (inView && !animationStarted) {
      controls.start("visible");
      setAnimationStarted(true);

      bars.forEach((bar, index) => {
        let currentCount = 0;
        const interval = setInterval(() => {
          if (currentCount < bar.percentage) {
            currentCount++;
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = currentCount;
              return newCounts;
            });
          } else {
            clearInterval(interval);
          }
        }, 30);
      });
    }

    if (!inView) {
      setCounts([0, 0, 0, 0]);
      controls.start("hidden");
      setAnimationStarted(false);
    }
  }, [inView, controls, animationStarted, bars]);

  return (
    <div ref={ref} className="relative bg-gradient-to-br">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col items-center md:flex-row md:items-end gap-6 md:max-w-4xl w-full">
          {bars.map((bar, index) => (
            <div
              key={index}
              className="flex flex-col justify-end w-full md:w-auto"
            >
              <motion.div
                className="mb-4 space-y-1"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
              >
                <div className="text-5xl font-bold text-white">
                  {counts[index]}%
                </div>
                <div className="text-lg font-medium text-white">
                  {bar.title}
                </div>
                <div className="text-sm text-white">
                  {bar.coins.toLocaleString()} coins
                </div>
                <div className="max-w-[200px] text-xs text-white/90">
                  {bar.description}
                </div>
              </motion.div>
              <motion.div
                className="w-full md:w-[200px] bg-gradient-to-t from-[#9999992e] to-white"
                initial={{ height: 0 }}
                animate={inView ? { height: bar.height } : { height: 0 }}
                transition={{ delay: index * 0.3 + 0.3, duration: 0.6 }}
              />
            </div>
          ))}
        </div>

        <div className="relative w-[600px] h-[600px] md:ml-8 hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-r from-white/30 to-transparent backdrop-blur-sm flex flex-col items-center justify-center">
              <div className="w-[350px] h-[350px] rounded-full backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="w-[300px] h-[300px] rounded-full flex flex-col items-center justify-center text-white text-center">
                  <h1 className="font-bold text-3xl tracking-[0.2em] mb-2">
                    TOTAL SUPPLY
                  </h1>
                  <p className="text-4xl tracking-wider font-bold">1 BILLION</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
