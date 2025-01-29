"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhyPedroCoin() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
      image: "/pedro-2.png",
      bgColor: "bg-[#436B45]",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "FUN",
      description: "Memes, NFTs, and a thriving community",
      image: "/pedro-3.png",
      bgColor: "bg-[#436B45]",
      textColor: "text-white",
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold mb-4 font-[family-name:var(--font-pixelify-sans)]">
          WHY PEDROCOIN?
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto font-[family-name:var(--font-manrope)]">
          PedroCoin isn&apos;t just another pump shit coin. It&apos;s the
          quirky, community-powered token built on Solana to bring memes and
          utility together for the long haul. 🚀🐒
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className={`group relative rounded-[32px] overflow-hidden ${feature.bgColor} h-[400px] sm:h-[450px] lg:h-[500px] cursor-pointer transform transition-all duration-300 hover:shadow-2xl`}
          >
            {/* Number indicator with hover effect */}
            <motion.div
              className={`absolute top-6 left-6 w-12 h-12 rounded-full ${
                feature.image ? "bg-white" : "bg-white/20"
              } flex items-center justify-center z-20`}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              <span className="text-2xl font-bold text-[#8B2F05]">
                {feature.id}
              </span>
            </motion.div>

            {/* Image if exists */}
            {feature.image && (
              <div className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            )}

            {/* Initial Content (Visible by default) */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-8 ${
                feature.image
                  ? "bg-gradient-to-t from-black/60 to-transparent"
                  : ""
              } transition-opacity duration-300 opacity-100 group-hover:opacity-0`}
            >
              <h3
                className={`font-[family-name:var(--font-pixelify-sans)] text-3xl font-bold mb-3 ${feature.textColor}`}
              >
                {feature.title}
              </h3>
              <p className="text-white text-lg opacity-90">
                {feature.description}
              </p>
            </div>

            {/* Hover Content (Animated on hover) */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-8 ${
                feature.image
                  ? "bg-gradient-to-t from-black/60 to-transparent"
                  : ""
              } transform transition-all duration-300 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100`}
            >
              <h3
                className={`font-[family-name:var(--font-pixelify-sans)] text-3xl font-bold mb-3 ${feature.textColor}`}
              >
                {feature.title}
              </h3>
              <p className="text-white text-lg opacity-90">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
