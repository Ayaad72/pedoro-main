"use client";
import Pedronomics from "@/components/pedronomics";
import Roadmap from "@/components/road-map";
import MarqueegBanner from "@/components/marquee-banner";
import "./../app/globals.css";
import WhyPedroCoin from "@/components/why-pedro";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import TokenDistribution from "@/components/token-distribution";
import Footer from "@/components/Footer";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="main-bg min-h-screen bg-gradient-to-b ">
      <div className="mx-auto" style={{ overflow: "hidden" }}>
        <div className="hero-bg lg:h-[85vh] sm:h-auto">
          <Header />
          <motion.div
            className="main-text text-center max-w-6xl mx-auto mt-20 mb-32"
            initial="initial"
            animate="animate"
          >
            <h1 className="banner-text text-4xl md:text-7xl font-title font-[family-name:var(--font-pixelify-sans)] text-white mb-6">
              <TypeAnimation
                sequence={[
                  "Building the Future of Memes & Tokens with the Awkward Look",
                  1000,
                  () => {
                    // Callback after typing animation completes
                  },
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={1}
              />
            </h1>

            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
            >
              Where humor and innovation unite on the Solana
              blockchain&mdash;join the community-driven revolution blending
              internet culture with cutting-edge crypto utility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5, ease: "easeOut" }}
            >
              <button className="join-community bg-[#4A1D1D] text-[#D38A59] hover:bg-[#3A1515] px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-[100px] border border-[#D38A59]">
                JOIN THE COMMUNITY
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative bg-[#fff]">
          <div className="transform rotate-6 pt-12">
            <MarqueegBanner />
          </div>
          <div
            id="about"
            className="max-w-[1440px] flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 mx-auto"
          >
            <div className="tale-of-perdro-wrapper text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-[#4A1D1D] mb-6 font-[family-name:var(--font-pixelify-sans)]">
                THE TALE OF PEDRO WHERE MEMES MEET BLOCKCHAIN
              </h2>
              <p className="text-[#7F1911] text-lg leading-8 font-light font-[family-name:var(--font-manrope)]">
                PedroCoin isn&apos;t just another cryptocurrency&mdash;it&apos;s
                a movement! Built on the Solana blockchain, PedroCoin merges the
                universal language of memes with groundbreaking blockchain
                technology. Our mission is to make crypto accessible, fun, and
                impactful for everyone, from seasoned investors to meme lovers.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://i.giphy.com/H5C8CevNMbpBqNqFjl.webp"
                alt="Pedro Meme"
                width={500}
                height={500}
                className="rounded-full aspect-square w-[300px] md:w-[400px] lg:w-[500px]"
                priority
              />
            </div>
          </div>
        </div>
        <WhyPedroCoin />
        <div id="tokenomics" className="pedronomics-container">
          <Pedronomics />
          <div className="relative flex items-end justify-center gap-[2rem]">
            <TokenDistribution />
          </div>
        </div>
        <Roadmap />
        <div>
          <MarqueegBanner />
        </div>
        <Footer />
      </div>
    </main>
  );
}
