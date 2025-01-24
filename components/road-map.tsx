// import Marquee from "react-fast-marquee";

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
      className="flex justify-end min-h-screen bg-[#fafafa]  relative overflow-hidden"
    >
      <div className="w-full">
        {/* Header Text */}
        <h2 className="font-light pt-16 text-[#8B1D1D] max-w-[600px] text-3xl md:text-4xl mx-auto mt-0 my-[6rem]">
          PedroCoin's roadmap is a four-phase journey to create a fun and
          functional ecosystem:
        </h2>

        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
          {/* <Marquee direction="up" speed={30}> */}
          <div className="v-text  md:block absolute left-[9rem] bottom-0 height-[100%]">
            <div
              className="v-text-inner rotate-360 whitespace-nowrap [writing-mode:vertical-rl] text-8xl font-bold tracking-tight bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(to bottom, #ffffff 0%, #c47a49 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              THE ROAD TO PEDROFICATION
            </div>
          </div>
          {/* </Marquee> */}

          {/* Timeline Container */}
          <div className="flex-grow relative">
            {/* Timeline Line */}
            <div className="v-line absolute right-[15.2rem] top-0 bottom-0 w-[2px] bg-[#8B1D1D]" />

            {/* Phases */}
            <div className="roadmap-container space-y-24 flex flex-col items-end w-[70%] float-right ">
              {phases.map((phase, index) => (
                <div key={index} className="relative w-full text-right ">
                  {/* Timeline Dot */}
                  <div className="absolute right-0 w-3 h-3 rounded-full bg-[#8B1D1D] translate-x-[2px] translate-y-[20px]" />

                  {/* Content */}
                  <div className="roadmap-content pr-24">
                    <div className="text-[#7F1911] font-bold mb-1 md:text-3xl">
                      {phase.number}
                    </div>
                    <div className="text-[#D38A59] text-xl md:text-3xl font-bold mb-3">
                      {phase.title}
                    </div>
                    <div className="space-y-1 text-right">
                      {phase.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-[#440C0A]">
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
