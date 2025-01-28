// Import the necessary modules
import { motion } from "framer-motion";

export default function Roadmap() {
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
      className="flex justify-end min-h-screen bg-[#fafafa] relative overflow-hidden px-4 md:px-0"
    >
      <div className="w-full">
        {/* Header Text */}
        <h2 className="font-light pt-8 md:pt-16 text-[#8B1D1D] max-w-[600px] text-2xl md:text-4xl mx-auto mt-0 my-8 md:my-[6rem] text-center px-4">
          PedroCoin's roadmap is a four-phase journey to create a fun and
          functional ecosystem:
        </h2>

        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
          {/* Animated Vertical Text */}
          <motion.div
            className="v-text hidden md:block absolute left-[9rem] bottom-0"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            viewport={{ amount: 0.3 }}
          >
            <div
              className="v-text-inner rotate-360 whitespace-nowrap [writing-mode:vertical-rl] text-6xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent"
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

          {/* Timeline Container */}
          <div className="flex-grow relative max-w-[1440px] mx-auto w-full md:w-auto">
            {/* Timeline Line */}
            <div className="v-line absolute left-4 md:right-[15.2rem] md:left-auto top-0 bottom-0 w-[2px] bg-[#8B1D1D]" />

            {/* Phases */}
            <div className="roadmap-container space-y-12 md:space-y-24 flex flex-col items-start md:items-end w-full md:w-[70%] md:float-right pl-12 md:pl-0">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className="relative w-full text-left md:text-right"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-2.15rem] md:left-auto md:right-0 w-3 h-3 rounded-full bg-[#8B1D1D] translate-y-[20px] md:translate-x-[2px]" />

                  {/* Content */}
                  <div className="roadmap-content pl-4 md:pl-0 md:pr-24">
                    <div className="text-[#7F1911] font-bold mb-1 text-2xl md:text-3xl">
                      {phase.number}
                    </div>
                    <div className="text-[#D38A59] text-lg md:text-3xl font-bold mb-3">
                      {phase.title}
                    </div>
                    <div className="space-y-1">
                      {phase.items.map((item, itemIndex) => (
                        <p
                          key={itemIndex}
                          className="text-[#440C0A] text-sm md:text-base"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
