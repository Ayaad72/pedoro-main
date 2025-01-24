export default function WhyPedroCoin() {
  const features = [
    {
      id: 1,
      title: "TRUST",
      description: "Initial LP tokens are burned to prevent rug pulls.",
      bgColor: "bg-[#D4916A]",
      textColor: "text-[#8B2F05]",
    },
    {
      id: 2,
      title: "GROWTH",
      description:
        "Reserved tokens for staking rewards and ecosystem development",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vsbh7scJheHbO68bHCyH1tmlzYvCIQ.png",
      bgColor: "bg-[#436B45]",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "FUN",
      description: "Memes, NFTs, and a thriving community",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vsbh7scJheHbO68bHCyH1tmlzYvCIQ.png",
      bgColor: "bg-[#436B45]",
      textColor: "text-white",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4 font-[family-name:var(--font-pixelify-sans)] ">
          WHY PEDROCOIN?
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto font-[family-name:var(--font-manrope)] ">
          PedroCoin isn't just another pump shit coin. It's the quirky,
          community-powered token built on Solana to bring memes and utility
          together for the long haul. 🚀🐒
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`relative rounded-3xl overflow-hidden ${feature.bgColor} p-8 min-h-[300px] flex flex-col`}
          >
            {/* Number indicator */}
            <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className={`text-xl font-bold ${feature.textColor}`}>
                {feature.id}
              </span>
            </div>

            {/* Content */}
            <div className="mt-12">
              <h3
                className={`text-2xl font-mono font-bold mb-4 ${feature.textColor}`}
              >
                {feature.title}
              </h3>
              <p className={`${feature.textColor} text-lg`}>
                {feature.description}
              </p>
            </div>

            {/* Image if exists */}
            {feature.image && (
              <div className="mt-auto">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-auto mt-4"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
