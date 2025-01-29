import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Roadmap() {
  const [disableAnimations, setDisableAnimations] = useState(false);
  const phase1Ref = useRef(null);
  const phase2Ref = useRef(null);
  const phase3Ref = useRef(null);
  const phase4Ref = useRef(null);

  const phase1InView = useInView(phase1Ref, { once: false });
  const phase2InView = useInView(phase2Ref, { once: false });
  const phase3InView = useInView(phase3Ref, { once: false });
  const phase4InView = useInView(phase4Ref, { once: false });

  useEffect(() => {
    const handleResize = () => {
      setDisableAnimations(window.innerWidth < 768); // Disable animations on small screens
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const phases = [
    {
      number: "PHASE 1",
      title: "MEMEVOLUTION BEGINS",
      items: [
        "Launch on Solana.",
        "Build a community through contests and social media.",
      ],
    },
    {
      number: "PHASE 2",
      title: "NFT MAGIC",
      items: [
        "Launch the Pedro NFT Collection.",
        "Introduce NFT marketplace and perks for holders.",
      ],
    },
    {
      number: "PHASE 3",
      title: "FUNCTIONAL GROWTH",
      items: [
        "Launch PedroWallet and PedroSwap.",
        "Partner with influencers and platforms.",
      ],
    },
    {
      number: "PHASE 4",
      title: "GLOBAL EXPANSION",
      items: ["Explore partnerships and gamified NFT ecosystems."],
    },
  ];

  return (
    <div
      id="roadmap"
      className="flex justify-end max-w-[1440px] mx-auto bg-[#fafafa] relative overflow-hidden px-4 md:px-0"
    >
      <div className="w-full">
        {/* Header Text */}
        <h2 className="font-light pt-8 md:pt-16 text-[#8B1D1D] max-w-[600px] text-2xl md:text-4xl mx-auto mt-0 my-8 md:my-[6rem] text-center px-4">
          PedroCoin&apos;s roadmap is a four-phase journey to create a fun and
          functional ecosystem:
        </h2>

        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
          {/* Animated Vertical Text */}
          {!disableAnimations && (
            <motion.div
              className="v-text hidden md:block absolute left-[9rem] bottom-0"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              viewport={{ amount: 0.3, once: false }}
            >
              <div
                className="vertical-text-inner rotate-360 whitespace-nowrap [writing-mode:vertical-rl] text-6xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(to bottom, #ffffff 0%, #c47a49 50%, #ffffff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                THE ROAD TO PEDROFICATION
              </div>
            </motion.div>
          )}

          {/* Timeline Container */}
          <div className="flex-grow relative max-w-[1440px] mx-auto w-full md:w-auto">
            {/* Timeline Line */}
            <div className="v-line absolute left-4 md:right-[15.2rem] md:left-auto top-0 bottom-0 w-[2px] bg-[#8B1D1D]" />

            {/* Phases */}
            <div className="roadmap-container space-y-12 md:space-y-24 flex flex-col w-full md:w-[70%] md:float-right">
              <motion.div
                ref={phase1Ref}
                className="relative w-full text-left md:text-right"
                initial={{ opacity: 0, x: 100 }}
                animate={
                  phase1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="absolute left-[-2.15rem] md:left-auto md:right-0 w-3 h-3 rounded-full bg-[#8B1D1D] translate-y-[20px] md:translate-x-[2px]" />
                <div className="roadmap-content pl-4 md:pl-0 md:pr-24">
                  <div className="text-[#7F1911] font-bold mb-1 text-2xl md:text-3xl">
                    {phases[0].number}
                  </div>
                  <div className="text-[#D38A59] text-lg md:text-3xl font-bold mb-3">
                    {phases[0].title}
                  </div>
                  <div className="space-y-1">
                    {phases[0].items.map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="text-[#440C0A] text-sm md:text-base"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={phase2Ref}
                className="relative w-full text-left md:text-right"
                initial={{ opacity: 0, x: 100 }}
                animate={
                  phase2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="absolute left-[-2.15rem] md:left-auto md:right-0 w-3 h-3 rounded-full bg-[#8B1D1D] translate-y-[20px] md:translate-x-[2px]" />
                <div className="roadmap-content pl-4 md:pl-0 md:pr-24">
                  <div className="text-[#7F1911] font-bold mb-1 text-2xl md:text-3xl">
                    {phases[1].number}
                  </div>
                  <div className="text-[#D38A59] text-lg md:text-3xl font-bold mb-3">
                    {phases[1].title}
                  </div>
                  <div className="space-y-1">
                    {phases[1].items.map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="text-[#440C0A] text-sm md:text-base"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={phase3Ref}
                className="relative w-full text-left md:text-right"
                initial={{ opacity: 0, x: 100 }}
                animate={
                  phase3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="absolute left-[-2.15rem] md:left-auto md:right-0 w-3 h-3 rounded-full bg-[#8B1D1D] translate-y-[20px] md:translate-x-[2px]" />
                <div className="roadmap-content pl-4 md:pl-0 md:pr-24">
                  <div className="text-[#7F1911] font-bold mb-1 text-2xl md:text-3xl">
                    {phases[2].number}
                  </div>
                  <div className="text-[#D38A59] text-lg md:text-3xl font-bold mb-3">
                    {phases[2].title}
                  </div>
                  <div className="space-y-1">
                    {phases[2].items.map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="text-[#440C0A] text-sm md:text-base"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={phase4Ref}
                className="relative w-full text-left md:text-right"
                initial={{ opacity: 0, x: 100 }}
                animate={
                  phase4InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="absolute left-[-2.15rem] md:left-auto md:right-0 w-3 h-3 rounded-full bg-[#8B1D1D] translate-y-[20px] md:translate-x-[2px]" />
                <div className="roadmap-content pl-4 md:pl-0 md:pr-24">
                  <div className="text-[#7F1911] font-bold mb-1 text-2xl md:text-3xl">
                    {phases[3].number}
                  </div>
                  <div className="text-[#D38A59] text-lg md:text-3xl font-bold mb-3">
                    {phases[3].title}
                  </div>
                  <div className="space-y-1">
                    {phases[3].items.map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="text-[#440C0A] text-sm md:text-base"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
